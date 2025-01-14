import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaInstagram, FaPhone } from 'react-icons/fa';
import { Person, Envelope, Telephone, Location, Pin } from 'react-bootstrap-icons';
import logo from '../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='px-2' style={{ backgroundColor: '#161C2D' }}>
            <Container className='py-4'>
                <Row className='d-flex align-items-center justify-content-start'>
                    <Col xs="auto">
                        <div className='d-flex align-items-center justify-content-start'>
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start'>
                            <h1 className='text-white'>Fr.A.Chinnasamy Yesuraj</h1>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5} sm={12}>
                        <div className='text-white'>
                            <p>
                                A Counsellor, A Trainer, with expertise in motivating change, fostering growth, and supporting well-being for personal and professional development.
                            </p>
                            <ul className="social-links list-unstyled">
                                <li><a href="https://www.facebook.com" className="text-white"><FaFacebook className="fb" /></a></li>
                                <li><a href="https://www.instagram.com" className="text-white"><FaInstagram className="ig" /></a></li>
                                <li><a href="https://www.twitter.com" className="text-white"><FaTwitter className="tw" /></a></li>
                                <li><a href="https://www.youtube.com" className="text-white"><FaYoutube className="gl" /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} className='d-none d-sm-block'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <ul className="footer-nav footer-navbutton list-unstyled">
                                <li><Button variant='transparent p-0' onClick={() => navigate('/home')}><div className='footer-nav footer-navbutton text-white'>Home</div></Button></li>
                                <li><Button variant='transparent p-0' onClick={() => navigate('/about')}><div className='footer-nav footer-navbutton text-white'>About</div></Button></li>
                                <li><Button variant='transparent p-0' onClick={() => navigate('/program')}><div className='footer-nav footer-navbutton text-white'>Programs</div></Button></li>
                                <li><Button className="footer-navbutton footer-nav text-white" variant='transparent p-0' onClick={() => navigate('/experience')}><div className='footer-nav footer-navbutton text-white'>Experience</div></Button></li>
                                <li><Button variant='transparent p-0' onClick={() => navigate('/gallery')}><div className='footer-nav footer-navbutton text-white'>Gallery</div></Button></li>
                                <li><Button variant='transparent p-0' onClick={() => navigate('/contact')}><div className='footer-nav footer-navbutton text-white'>Contact Us</div></Button></li>

                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} sm={12} xs={12}>
                        <div className="text-white">
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="me-3" />
                                <span>Fr.A.Chinnasamy Yesuraj</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhone className="me-3" />



                                <span>+91 9080063704 <br />+91 96554822867</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaMapMarkerAlt className="me-3" />
                                <span>
                                    Thedal Institute of Spirituality,
                                    Our Lady of Lourdes Church,
                                    <br />

                                    Dindigul Dt, Tamilnadu, India
                                    <br />
                                    Ammayanayakkanur – 624201,
                                </span>


                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='text-white'>
                    Copyright &copy; 2024 cyesumsfs All Rights Reserved.
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
