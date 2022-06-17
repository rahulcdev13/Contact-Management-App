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
                            <div className="col"> 
                                <p className="font-bold fst-italic">In this appliication user can add a contact, delete, update amd serach a contact. For storing data I have used a JSON server which is connected to the application in React js App..</p>
                            </div>
                        </div><br />
                        <div className="row mx-auto">
                            <div className="col-md-9">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-warning bg-orange" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <p className="h5">
                                    <Link to={'contact/add'} className="btn btn-success ms-2"> <i className="fa fa-plus-circle me-2"></i>ADD NEW CONTACT
                                    </Link>
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactList;