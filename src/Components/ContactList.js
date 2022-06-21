import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../Services/ContactService";
import Spinner from "../Spinners/Spinner";
import "./Contact.css"

const ContactList = () => {
    const [query,setQuery]=useState({
        text:''
    })

    const [state, setState] = useState({
        loading: false,
        Contacts: [],
        filterContacts: [],
        errorMessage: ''
    });

    useEffect( async() => {
        
        try {
            setState({ ...state, loading: true })
            const response = await ContactService.getAllContacts(); 
            setState({
                ...state,
                loading: false,
                Contacts: response.data,
                filterContacts:response.data
            })
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errorMessage: error.message
            });
        }
    },[]);

const dltContact= async(contactId)=>{
    try {
        let response = await ContactService.deleteContact(contactId);
        if(response){
            setState({ ...state, loading: true })
            const response = await ContactService.getAllContacts(); 
            setState({
                ...state,
                loading: false,
                Contacts: response.data
            })
        }
        
        
    } catch (error) {
        setState({
            ...state,
            loading: true,
            errorMessage: error.message
        });
    }
};

const searchContact =(event)=>{
    setQuery({
        ...query,text:event.target.value
    });
    let theContacts = state.Contacts.filter(contact=>{
        return contact.name.toLowerCase().includes(event.target.value.toLowerCase()); 
    })
    console.log(theContacts);
    setState({
        ...state,
        filterContacts:theContacts
    })
}
    const { loading, Contacts, errorMessage,filterContacts } = state;

    return (
        <>
            <pre>{query.text}</pre>
            <section className="contact-search">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="h6 mt-5">
                                <p className="font-bold"> In this appliication user can add {errorMessage} a contact, delete, update amd serach a contact. For storing data I have used a JSON server which is connected to the application in React js App</p>
                            </div>
                        </div><br />
                        <div className="row mx-auto">
                            <div className="col-md-8">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" 
                                    placeholder="🔍 Search contact name ..." 
                                    aria-label="Search"
                                    value={query.text}
                                    name="text"
                                    onChange={searchContact} />
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
                                    <Link to={'/contact/allview/:contactId'} className="btn btn-warning ms-2"> <i className="fa fa-eye me-2"></i>All
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br />
            {loading ? <Spinner /> : <>
                <section className="contact-list">
                    <div className="container">
                        <div className="row">

                            {
                                filterContacts.length > 0 &&
                                filterContacts.map((contactVal,id) => {
                                    return (
                                        <>
                                            <div className="col-md-6" key={contactVal.id}>
                                                <div className="card my-2">
                                                    <div className="card-body">
                                                        <div className="row align-item-center d-flex justify-content-around me-2">
                                                            <div className="col-md-4">
                                                                <img src={contactVal.photo} alt="user" className="img-fluid contact-img" />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Name: <span className="fw-bold">{contactVal.name}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Mobile No : <span className="fw-bold">{contactVal.mobile}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Email ID : <span className="fw-bold">{contactVal.email}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Title : <span className="fw-bold">{contactVal.title}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-1 align-item-center">
                                                                <Link className="btn btn-warning my-2" to={`/contact/view/${contactVal.id}`}>
                                                                    <li className="fa fa-eye" />
                                                                </Link>
                                                                <Link className="btn btn-primary my-2" to={`/contact/edit/${contactVal.id}`}>
                                                                    <li className="fa fa-edit " />
                                                                </Link>
                                                                <Link className="btn btn-danger my-2" onClick={()=>dltContact(contactVal.id)} to={`/contact/list`}>
                                                                    <li className="fa fa-trash me-0.5" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </>}

        </>
    )
}
export default ContactList;