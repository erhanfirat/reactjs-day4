import { useRef, useEffect, useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const greetingsStyle = {
    backgroundColor: "#3691de",
    color: "#ffffff",
    padding: "15px"
};

const GreetingsFunction = (props) => {
    const inputRef = useRef();
    const [name, setName] = useState("Anonim");
    const [greetingStyle, setGreetingStyle] = useState(
        {
            backgroundColor: "#3691de",
            color: "#ffffff",
            padding: "15px"
        }
    );
    useEffect(() => {
        inputRef.current.focus();
    });

    const students = useSelector(state => state.students);

    return <div style={greetingsStyle}>
        <div className='row'>
            <div className='col-8'>
                <h1>Merhaba {name}</h1>
            </div>
            <div className='col-4'>
                <label htmlFor='userNameInput'>Your name: </label>
                <input id="userNameInput" type="text" ref={inputRef} />
            </div>
        </div>
        <div className="row">
            <Navbar bg="primary" variant='dark' expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/counter">Counter</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    </div>
}

export default GreetingsFunction;