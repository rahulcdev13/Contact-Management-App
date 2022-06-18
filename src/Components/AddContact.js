import React from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddContact = () => {
    return (
        <>
        <section className="contact-search"> 
            <div className="container">
                <div className="add-contact">
                    <div className="h5">
                        <p><span className="text-success"><i className="fa fa-phone fw-bold"></i> </span> CREATE NEW CONTACT</p>
                    </div><hr />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
                        <FormControl className="me-4"
                            placeholder="Contact Name..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text>Mobile Number</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon3" type="number" placeholder=" 📞 Mobile Number..." />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Photo-Url</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon3" placeholder="Enter Photo url..." />
                    </InputGroup><br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                        <FormControl className="me-4"
                            placeholder="Recipient's Email id"
                            aria-label="Recipient's Email id"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Company Name</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>

                    <Form.Select aria-label="Default select example">
                        <option>--- Select A Group 👨‍👩‍👧‍👧 ---</option>
                        <option value="1">Girlfriend🧡</option>
                        <option value="2">Brother</option>
                        <option value="3">Father</option>
                        <option value="4">Friend</option>
                        <option value="5">Mother</option> 
                    </Form.Select><br />
                    <InputGroup>
                        <InputGroup.Text>Address</InputGroup.Text>
                        <FormControl as="textarea" aria-label="With textarea" />
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
                </div>
            </div> 
        </section>
        </>
    )
}
export default AddContact;