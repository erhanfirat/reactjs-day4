import { useState } from "react";
import { Button, Form, Card } from 'react-bootstrap';

const StudentForm = ({ saveStudent, closeForm }) => {
    const [name, setName] = useState("");
    const [no, setNo] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        saveStudent && saveStudent({ name, no });
        setName("");
        setNo("");
    }

    return <Card >
        <Card.Body>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student No</Form.Label>
                    <Form.Control type="number" placeholder="Enter student no" value={no} onChange={(e) => setNo(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter student name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Button type='submit' disabled={!name || !no} className="me-2">Save</Button>
                <Button type='button' onClick={closeForm} >Cancel</Button>
            </Form>
        </Card.Body>
    </Card>
}

export default StudentForm;