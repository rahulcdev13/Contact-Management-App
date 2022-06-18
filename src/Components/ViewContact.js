import React from "react";
import "./Contact.css"

import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const ViewContact = () => {
    return (
        <>
            <div className="container"><br />
            <div className="h5 text-center">
                        <p><span className="text-danger"><i className="fa fa-phone fw-bold"></i> VIEW CONTACT DETAILS</span></p>
                    </div><hr />
                <div className="view-contact">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row align-item-center d-flex justify-content-around me-2"> 
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span className="fw-bold">Samat Chavan</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile No : <span className="fw-bold">8806440725</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Profile Url : <span className="fw-bold">https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email ID : <span className="fw-bold">SamatChavan@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Compnay Name : <span className="fw-bold">Skylex technology</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Your Group : <span className="fw-bold">Father</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Address : <span className="fw-bold">BLOCK-B, 415 ,Fourth Floor and Seventh floor, above Mc Donalds, South Block, Wanwadi, Pune, Maharashtra 411040</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 text-center justify-content-end ">
                                    <img src="https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png" alt="user" className="contact-allview-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                    <div className="text-center"> 
                        <Link to={`/`}>
                        <Button variant="warning" type="submit">
                            Back To Home
                        </Button>
                        </Link>
                    </div>
            </div>
        </>
    )
}
export default ViewContact;