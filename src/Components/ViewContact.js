import React, { useEffect, useState } from "react";
import "./Contact.css"
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { ContactService } from "../Services/ContactService";
import Spinner from "../Spinners/Spinner";

const ViewContact = () => {

    const { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
        group:{}
    });

    useEffect(async () => {

        try {
            setState({ ...state, loading: true })
            let response = await ContactService.getSingleContact(contactId);
            let groupResponse = await ContactService.getSingleGroup(response.data); 
            // console.log(response.data);
            setState({
                ...state,
                loading: false,
                contact: response.data,
                group: groupResponse.data
            })
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errorMessage: error.message
            });
        }

    }, [contactId]);

    const { loading, contact, errorMessage,group } = state;


    return (
        <>
            {/* <h2>{contactId}</h2> */}
            {
                loading ? <Spinner /> : <>
                    <section>
                        <div className="container my-4">
                            <div className="h5 text-center">
                                <p><span className="text-danger"><i className="fa fa-phone fw-bold"></i> VIEW CONTACT DETAILS</span></p>
                            </div><hr />
                            <div className="view-contact">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row align-item-center d-flex justify-content-around me-2">
                                            <div className="col-md-4 text-center justify-content-end ">
                                                <img src={contact.photo} alt="user" className="contact-view-img" />
                                            </div>
                                            <div className="col-md-8">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-action">
                                                        Name: {errorMessage} <span className="fw-bold">{contact.name}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Mobile No : <span className="fw-bold">{contact.mobile}</span>
                                                    </li>
                                                    {/* <li className="list-group-item list-group-item-action">
                                            Profile Url : <span className="fw-bold">https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png</span>
                                        </li> */}
                                                    <li className="list-group-item list-group-item-action">
                                                        Email ID : <span className="fw-bold">{contact.email}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Title : <span className="fw-bold">{contact.title}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Your Group : <span className="fw-bold">{group.name}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Address : <span className="fw-bold">{contact.address}</span>
                                                    </li>
                                                </ul>
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
                    </section>
                </>
            }
        </>
    )
}
export default ViewContact;