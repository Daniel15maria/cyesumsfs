import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo2.png'; // Replace with the actual path to your logo file

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleClose = () => setExpanded(false);

    const handleNavClick = (href) => {
        setExpanded(false); // Close the navbar
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
        if (href) {
            window.location.href = href; // Navigate to the desired section
        }
    };

    return (
        <>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                className="py-3 fixed-top"
                expanded={expanded}
            >
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
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={handleToggle}
                    />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => handleNavClick('#home')}>Home</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('#about')}>About</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('#program')}>Training Programs</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('#experience')}>Experience</Nav.Link>
                            <Nav.Link onClick={() => handleNavClick('#gallery')}>Gallery</Nav.Link>

                            <Button
                                variant="light"
                                className="ms-3"
                                onClick={() => handleNavClick('#contact')}
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
