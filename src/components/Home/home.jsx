import HeaderHome from '../HeaderHome';
import './home.css'
import ListStudent from '../Student/List-Student'
import NewStudent from '../Student/NewStudent';
import StudentModel from './../../model/student';
import React from 'react';
import axios from "../../util/axios"


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            nom: "",
            pren: "",
            avatar: "",
            email: "",
            list_student_data: []
        }

        // this.state = {
        //     list_student_data: [
        //         new StudentModel("Chamekh", "Youssef", "Youssef.chamekh98@gmail.com", "https://www.anthedesign.fr/w2015/wp-content/uploads/2016/12/couleur-du-web-2017.jpg"),
        //         new StudentModel("Chamekh", "Youssef", "Youssef.chamekh98@gmail.com", "https://sayingimages.com/wp-content/uploads/classmate-forgets-pen-senior-college-student-meme.jpg"),
        //         new StudentModel("Chamekh", "Youssef", "Youssef.chamekh98@gmail.com", "https://sayingimages.com/wp-content/uploads/classmate-forgets-pen-senior-college-student-meme.jpg"),
        //         new StudentModel("Chamekh", "Youssef", "Youssef.chamekh98@gmail.com", "https://sayingimages.com/wp-content/uploads/classmate-forgets-pen-senior-college-student-meme.jpg"),
        //         new StudentModel("Chamekh", "Youssef", "Youssef.chamekh98@gmail.com", "https://sayingimages.com/wp-content/uploads/classmate-forgets-pen-senior-college-student-meme.jpg"),

        //     ]

        // }
    }
    render() {
        return (
            <>
                <HeaderHome />
                <div className="container-fluid d-flex p-4">
                    {/* new student component */}
                    <NewStudent
                        handleSubmit={this.addStudent}
                        changeInput={this.changeInput}

                    />
                    {/* List student */}
                    <ListStudent dataList={this.state.list_student_data} />
                </div>
            </>
        )
    }
    addStudent = (event) => {
        event.preventDefault()
        // validation du formulaire
        if (this.state.nom === "" || this.state.pren === "" || this.state.avatar === "" || this.state.email === "") {
            alert("veuillez remplir tout les champs 🤬")
        }
        else {
            event.target.reset();
            let nStudent = new StudentModel(
                0,
                this.state.nom,
                this.state.pren,
                this.state.email,
                this.state.avatar,
                false
            );
            this.setState({
                nom: "",
                pren: "",
                email: "",
                avatar: ""
            })

            // ajouter student a la list
            let newStudentlist = this.state.list_student_data;
            newStudentlist.push(nStudent);
            this.setState({ list_student_data: newStudentlist })


            // ajouter l'etudiant a la partie serveur (firebase) en utilisant axios 
            const data_student = {
                nom: nStudent.nom,
                pren: nStudent.pren,
                email: nStudent.email,
                avatar: nStudent.avatar,
                isPresence:nStudent.isPresence
            }

            axios.post("students.json", data_student).then((response) => {
                let id_new_student = response.data.name;
                const myNewStudent = {
                    nom: nStudent.nom,
                    pren: nStudent.pren,
                    email: nStudent.email,
                    avatar: nStudent.avatar,
                    id: id_new_student
                }
                let newListStudent = this.state.list_student_data;
                newListStudent.forEach(s => {
                    if (s.id == 0) {
                        s.id = id_new_student;
                    }
                    // modifier la list sur le state
                    this.setState({list_student_data:newListStudent})
                })
            })
        }
    }
    // recuperer la liste des etudiants depuis firebase onload page avec firebase

    componentDidMount() {
        axios.get("students.json").then((response) => {
            // extraire toutes les cle de l'objet data
            let keys = Object.keys(response.data)
            // parcourir les keys
           let ListEtudiant= keys.map(k => {

                let ns = new StudentModel(k, response.data[k].nom,
                    response.data[k].pren,
                    response.data[k].email,
                    response.data[k].avatar,
                    response.data[k].isPresence);
                // creer la nouvelle list des etudiants
            return ns;
            })

            // ajouter la list 
            this.setState({list_student_data:ListEtudiant})
        })
    }

    changeInput = (event) => {
        let value = event.target.value;
        let inputname = event.target.name;
        this.setState({ [inputname]: value })
    }
}

export default Home;