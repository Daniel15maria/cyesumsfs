import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState({
        loading: false,
        showAlert: false,
        alertMessage: '',
        variant: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ ...formStatus, loading: true });

        const templateParams = {
            user_name: formData.name,
            phone: formData.phone,
            user_email: formData.email,
            message: formData.message,
        };

        emailjs
            .send(
                'service_xaf3qe9', // Replace with your EmailJS service ID
                'template_v3pa4a1', // Replace with your EmailJS template ID
                templateParams,
                'ohhO_qVtKL0UgYRoc' // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormStatus({
                        loading: false,
                        showAlert: true,
                        alertMessage: 'Message sent successfully!',
                        variant: 'success',
                    });
                    setFormData({ name: '', phone: '', email: '', message: '' });
                },
                (error) => {
                    console.error(error.text);
                    setFormStatus({
                        loading: false,
                        showAlert: true,
                        alertMessage: `Failed to send message. Error: ${error.text}`,
                        variant: 'danger',
                    });
                }
            );
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center bg-light"
            style={{ minHeight: '100vh', paddingTop: '80px' }} // Adjust paddingTop to match the navbar height
        >
            <div className="container shadow-lg rounded bg-white p-4" style={{ maxWidth: '900px' }}>
                <h2 className="mb-4 text-center">Contact Us</h2>
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-5 bg-primary text-white p-4 rounded">
                        <h4 className="mb-3">CONTACT INFORMATION</h4>
                        <p>
                            <FaUser className="me-2" />
                            Rev. Fr. A. Chinnasamy Yesuraj, MSFS
                        </p>
                        <p>
                            <FaPhone className="me-2" />
                            +91 9080063704 <br />+91 96554822867
                        </p>
                        <p>
                            <FaEnvelope className="me-2" />
                            yesurajmsfs@gmail.com
                        </p>
                        <p>
                            <FaMapMarkerAlt className="me-2" />
                            Thedal Institute of Spirituality,
                            Our Lady of Lourdes Church,
                            <br />
                            Dindigul Dt, Tamilnadu, India
                            <br />
                            Ammayanayakkanur – 624201,
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-7">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <FaUser className="me-2" />
                                    Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <FaPhone className="me-2" />
                                    Phone Number
                                </Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <FaEnvelope className="me-2" />
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary" type="submit" disabled={formStatus.loading}>
                                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </Form>
                        {formStatus.showAlert && (
                            <Alert
                                variant={formStatus.variant}
                                className="mt-3"
                                onClose={() => setFormStatus({ ...formStatus, showAlert: false })}
                                dismissible
                            >
                                {formStatus.alertMessage}
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
