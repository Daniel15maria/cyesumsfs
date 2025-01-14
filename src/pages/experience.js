import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../images/goodone.jpg';
import image2 from '../images/image6.jpg';
import image3 from '../images/image12.jpg';
import Footer from '../Reusable/footer';

const Experience = () => {
    const cardData = [
        {
            img: image1,
            title: 'Professional Counsellor',
            text: 'Empowering individuals through expert guidance and personalized counseling strategies.',
        },
        {
            img: image2,
            title: 'Professor at Assam Don Bosco University, Guwahati',
            text: 'Dedicated educator shaping minds at Assam Don Bosco University, Guwahati.',
        },
        {
            img: image3,
            title: 'Visiting Lecturer at St. Clement College, Nagaon',
            text: 'Engaging visiting lecturer at St. Clement College, Nagaon, inspiring students.',
        },
    ];

    return (
        <div >
            <div style={{ backgroundColor: '#629584', fontFamily: 'Arial, sans-serif' }} className='py-5'>
                <h1 className='py-lg-5' style={{ color: '#FFFFFF', fontSize: '48px', marginBottom: '30px', textAlign: 'center' }}>
                    My <span style={{ fontWeight: 'normal' }}>Professional Experience</span>
                </h1>
                <Container>
                    <Row className="justify-content-center">
                        {cardData.map((card, index) => (
                            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={card.img}
                                        alt={card.title}
                                        style={{ borderRadius: '10px', objectFit: 'cover', height: '200px' }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="text-center" style={{ fontWeight: 'bold', color: '#333333' }}>
                                            {card.title}
                                        </Card.Title>
                                        <Card.Text className="text-center" style={{ color: '#555555', fontSize: '14px' }}>
                                            {card.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Experience;
