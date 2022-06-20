import React from "react";
import "./Contact.css"

// import { Link } from "react-router-dom";

const ViewAllContact = () => {
    return (
        <>
            <div className="container">
                <div className="Allcontact">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-item-center d-flex justify-content-around me-2">
                                        <div className="col-md-4">
                                            <img src="https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png" alt="user" className="img-fluid contact-img" />
                                        </div>
                                        <div className="col-md-8">
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
                                                    Title : <span className="fw-bold">Skylex technology</span>
                                                </li>
                                            </ul>
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
                                        <div className="col-md-8">
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
                                                    Title : <span className="fw-bold">Skylex technology</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewAllContact;