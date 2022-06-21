import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { ContactService } from "../Services/ContactService";
import Spinner from "../Spinners/Spinner";
import { useNavigate } from "react-router-dom";


const EditContact = () => {
    const { contactId } = useParams();
    const Navigate = useNavigate();
    const [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            mobile: '',
            photo: '',
            email: '',
            title: '',
            groupId: '',
            address: ''
        },
        groups: {
            name: ''
        },
        errorMessage: ''

    });

    useEffect(async () => {

        try {
            setState({ ...state, loading: true })
            let response = await ContactService.getSingleContact(contactId);
            let groupResponse = await ContactService.getGroups();
            // console.log(response.data);
            setState({
                ...state,
                loading: false, 
                contact: response.data,
                groups: groupResponse.data,
            })
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errorMessage: error.message
            });
        }

    }, [contactId]);

    const updateInpute = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        })
    }

      //addContactForm

      const updateContactForm = async (e) => {
        e.preventDefault();
        try {
            let response = await ContactService.updateContact(state.contact,contactId);
            if (response) {
                Navigate(`/contact/list`, { replace: true });
            }
        } catch (error) {
            setState({ ...state, errorMessage: error.message });
            Navigate(`/contact/edit/${contactId}`, { replace: true });

        }

    }

    const { loading, contact, errorMessage, groups } = state;

    return (
        <>
            <pre>{JSON.stringify(contact)}</pre>
            <div className="container">
                <div className="add-contact">
                    <div className="h5">
                        <p><span className="text-primary"><i className="fa fa-phone fw-bold"> </i></span> EDIT CONTACT DETAILS</p>
                    </div><hr />
                    <Form onSubmit={updateContactForm}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
                        <FormControl className="me-4"
                            placeholder="Contact Name..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="name"
                            value={contact.name}
                            onChange={updateInpute}
                            required={true}
                        />
                        <InputGroup.Text>Mobile Number</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon3" type="number" placeholder=" 📞 Mobile Number..."
                            name="mobile"
                            value={contact.mobile}
                            onChange={updateInpute}
                            required={true} />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Photo-Url</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon3"
                            name="photo"
                            value={contact.photo}
                            onChange={updateInpute}
                            required={true}
                            placeholder="Enter Photo url..." />
                    </InputGroup><br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                        <FormControl className="me-4"
                            placeholder="Recipient's Email id"
                            aria-label="Recipient's Email id"
                            aria-describedby="basic-addon2"
                            name="email"
                            value={contact.email}
                            onChange={updateInpute}
                            required={true}
                        />
                        <InputGroup.Text id="basic-addon2">Title</InputGroup.Text>
                        <FormControl id="basic-url"
                            aria-describedby="basic-addon3"
                            name="title"
                            value={contact.title}
                            onChange={updateInpute}
                            required={true}
                        />
                    </InputGroup>

                    <Form.Select aria-label="Default select example"
                        name="groupId"
                        value={contact.groupId}
                        onChange={updateInpute}
                        required={true}
                    >
                        <option>--- Select A Group 👨‍👩‍👧‍👧 ---</option>
                        {
                            groups.length > 0 &&
                            groups.map((group) => {
                                return (
                                    <option key={group.id} value={group.id}>{group.name}</option>
                                )
                            })
                        }

                    </Form.Select><br />
                    <InputGroup>
                        <InputGroup.Text>Address</InputGroup.Text>
                        <FormControl as="textarea"
                            aria-label="With textarea"
                            name="address"
                            value={contact.address}
                            onChange={updateInpute}
                            required={true} />
                    </InputGroup>
                    <br />
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="me-4" value="Update">
                            Update
                        </Button>
                        <Link to={`/`}>
                            <Button variant="danger" type="submit">
                                Cancel
                            </Button>
                        </Link>
                    </div> <br />
                    <div className="alert alert-primary" role="alert">
                        Contact Updated Successfully.
                    </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default EditContact;