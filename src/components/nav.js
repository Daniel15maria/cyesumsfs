import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.png'; // Replace with the actual path to your logo file

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            width="40"
                            height="40"
                            className="me-2"
                        />
                        <div>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                Fr. A. Chinnasamy Yesuraj
                            </span>
                            <br />
                            <span style={{ fontSize: '14px' }}>(Counsellor & Trainer)</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#program">Training Programs</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>

                            <Button
                                variant="primary"
                                href="#contact"
                                className="ms-3"
                            >
                                Contact
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
