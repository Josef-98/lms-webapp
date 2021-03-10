import App from "../App"
import './home.css'

function Home() {
    return (
        <div id='global' >
            <main className="border d-flex" >
                <section id="newstudent" className="w-25" >
                    <form >
                        <div className="text-center ">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg" width="100px" height="100px" className="rounded-circle my-3 "></img>
                        </div>
                        <div className="col-md-12 my-4">
                            <label htmlFor="text" className="form-label" >First Name</label>
                            <input type="text" className="form-control rounded-pill" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-md-12 my-4">
                            <label htmlFor="text" className="form-label" >Last Name</label>
                            <input type="text" className="form-control rounded-pill" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-md-12 my-4">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control rounded-pill" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="col-md-12 my-4">
                            <label htmlFor="inputCity" className="form-label">Picture URL</label>
                            <input type="text" className="form-control rounded-pill" id="inputCity" />
                        </div>

                        <div className="col-12 my-4 text-center">
                            <button type="submit" className="btn btn-warning rounded-pill"> Add Student  <i class="fas fa-user-plus"></i></button>
                        </div>
                    </form>
                </section>
                <section id="sec2" className="w-75  vh-100" >
                    <div className="input-group mb-3 w-50 mx-auto my-5  ">
                        <input type="text" className="form-control text-center" placeholder="search for student " aria-label="search for student " aria-describedby="button-addon2" />
                    </div>
                    <section className=" d-flex justify-content-around ">
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start">
                            <img src="https://www.siepvv37.com/images/Template/placeholder-profile.jpg"width="200px" height="200px"></img>
                            <div>
                            <div className=" rounded-pill my-4 " id="icon1"><i class="fas fa-user-edit "></i></div>
                            <div className="rounded-pill " id="icon2"><i class="fas fa-user-times" ></i></div>
                            </div>
                        </div>
                    </section>

                </section>

            </main>
        </div>

    )
}
// export default Home;