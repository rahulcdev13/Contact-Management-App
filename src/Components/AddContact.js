import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../Services/ContactService";

const AddContact = () => {
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
    })

    const updateInpute = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        })
    }
    useEffect(async () => {
        try {
            setState({ ...state, loading: true })
            let response = await ContactService.getGroups();
            console.log(response.data);
            setState({
                ...state,
                loading: false,
                groups: response.data,
            })
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errorMessage: error.message
            });
        }
    }, []);
    const { loading, contact, errorMessage, groups } = state;

    //addContactForm

    const addContactForm = async (e) => {
        e.preventDefault();
        try {
            let response = await ContactService.createContacts(state.contact);
            if (response) {
                Navigate(`/contact/list`, { replace: true });
            }
        } catch (error) {
            setState({ ...state, errorMessage: error.message });
            Navigate(`/contact/add`, { replace: true });

        }

    }

    return (
        <>
            <section className="contact-search">
                <div className="container">
                    <div className="add-contact">
                        <div className="h5">
                            <p><span className="text-success"><i className="fa fa-phone fw-bold"></i> </span> CREATE NEW CONTACT</p>
                        </div><hr />
                        <Form onSubmit={addContactForm}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
                                <FormControl className="me-4"
                                    name="name"
                                    value={contact.name}
                                    onChange={updateInpute}
                                    required={true}
                                    placeholder="Contact Name..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text>Mobile Number</InputGroup.Text>
                                <FormControl aria-describedby="basic-addon3" type="number"
                                    placeholder=" 📞 Mobile Number..."
                                    name="mobile"
                                    value={contact.mobile}
                                    onChange={updateInpute}
                                    required={true}
                                />
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text>Photo-Url</InputGroup.Text>
                                <FormControl aria-describedby="basic-addon3"
                                    placeholder="Enter Photo url..."
                                    name="photo"
                                    value={contact.photo}
                                    onChange={updateInpute}
                                    required={true}
                                />
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
                                <FormControl id="basic-url" aria-describedby="basic-addon3"
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
                                <FormControl as="textarea" aria-label="With textarea"
                                    name="address"
                                    value={contact.address}
                                    onChange={updateInpute}
                                    required={true}
                                />
                            </InputGroup>
                            <br />
                            <div className="text-center">
                                <Button variant="success" type="submit" className="me-4" value="Create">
                                    Submit
                                </Button>
                                <Link to={`/`}>
                                    <Button variant="danger" type="submit">
                                        Cancel
                                    </Button>
                                </Link>
                            </div> <br />
                            <div className="alert alert-success" role="alert">
                                New Contact Created Successfully.
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddContact;