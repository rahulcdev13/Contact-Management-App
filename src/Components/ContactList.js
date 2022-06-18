import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css" 

const ContactList = () => {
    return (
        <>
            <section className="contact-search">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            {/* <div className="col">
                                <p className="font-bold fst-italic">In this appliication user can add a contact, delete, update amd serach a contact. For storing data I have used a JSON server which is connected to the application in React js App..</p>
                            </div> */}
                        </div><br />
                        <div className="row mx-auto">
                            <div className="col-md-8">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-warning bg-orange" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <p className="h5">
                                    <Link to={'/contact/add'} className="btn btn-success ms-2"> <i className="fa fa-plus-circle me-2"></i>ADD NEW CONTACT
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-1">
                                <p className="h5">
                                    <Link to={'/contact/allview'} className="btn btn-warning ms-2"> <i className="fa fa-eye me-2"></i>All
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br />
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-item-center d-flex justify-content-around me-2">
                                        <div className="col-md-4">
                                            <img src="https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png" alt="user" className="img-fluid contact-img" />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name: <span className="fw-bold">Samat Chavan</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile No : <span className="fw-bold">8806440725</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email ID : <span className="fw-bold">SamatChavan@gmail.com</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Compnay Name : <span className="fw-bold">Skylex technology</span>
                                                </li> 
                                            </ul>
                                        </div>
                                        <div className="col-md-1 align-item-center">
                                            <Link className="btn btn-warning my-2" to={'/contact/view/:contactId'}>
                                                <li className="fa fa-eye" />
                                            </Link>
                                            <Link className="btn btn-primary my-2" to={'/contact/edit/:contactId'}>
                                                <li className="fa fa-edit " />
                                            </Link> 
                                            <Link className="btn btn-danger my-2" to={`/`}>
                                                <li className="fa fa-trash me-0.5" />
                                            </Link>  
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-item-center d-flex justify-content-around me-2">
                                        <div className="col-md-4">
                                            <img src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt="user" className="img-fluid contact-img" />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name: <span className="fw-bold">Samat Chavan</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile No : <span className="fw-bold">8806440725</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email ID : <span className="fw-bold">SamatChavan@gmail.com</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Compnay Name : <span className="fw-bold">Skylex technology</span>
                                                </li> 
                                            </ul>
                                        </div>
                                        <div className="col-md-1 align-item-center">
                                            <Link className="btn btn-warning my-2" to={'/contact/view/:contactId'}>
                                                <li className="fa fa-eye" />
                                            </Link>
                                            <Link className="btn btn-primary my-2" to={'/contact/edit/:contactId'}>
                                                <li className="fa fa-edit " />
                                            </Link> 
                                            <Link className="btn btn-danger my-2" to={`/`}>
                                                <li className="fa fa-trash me-0.5" />
                                            </Link>  
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </section>
        </>
    )
}
export default ContactList;