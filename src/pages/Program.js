import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import '../index.css'; // Assuming styles are imported here
import work1 from '../images/workshop1.png'
import work2 from '../images/workshop2.png'
import work3 from '../images/workshop3.jpg'
import Footer from '../Reusable/footer';

const cardData = [
    {
        img: work1, // Replace with actual image paths
        title: 'Animated Programs',
        text: 'The educational initiatives across various locations include teachers seminars in 20 schools, student workshops in 30 schools...,',
        bulletPoints: [
            'Engaging and interactive activities.',
            'Designed for skill enhancement.',
            'Encourages team building and creativity.',
            ' Teachers Seminars in 20 Schools',
            'Student workshops in 30 Schools: Chennai, Puducherry, Guwahati, Shillong,',
            ' Youth Retreat: Kodambakkam, Kelambakam',
            'Couples Guidance ',
            'Parents Seminar',
            'Family animation',
            'Religious retreats, and seminars: Bangalore, Nagaon'

        ]
    },
    {
        img: work2,
        title: 'One-day Workshop',
        text: 'The program encompasses essential life skills such as mindfulness and stress management, effective parenting, and creative.....,',
        bulletPoints: [
            'Focused learning sessions.',
            'Experienced facilitators.',
            'Comprehensive materials provided.',
            'Mindfulness & Stress Management',
            'Family Interaction & Management',
            'Effective Parenting',
            'Creative Thinking',
            'Empathy',
            'Effective Communication',
            'Coping with Emotions',
            'Interpersonal Relationship',
            'Problem- Solving',
            'Self - Awareness',

        ]
    },
    {
        img: work3,
        title: 'Two-day Workshop',
        text: 'The program focuses on capacity building and classroom management, alongside essential skills like leadership, life...,',
        bulletPoints: [
            'In-depth coverage of topics.',
            'Group discussions and activities.',
            'Networking opportunities.',
            'Capacity Building & Classroom Management',
            'Leadership Skills',
            'Life Coaching',
            'Professional Ethics',

            'Healthy and Constructive Media Habits: A workshop that will transform a student’s life',
            'Memory and Focusing Skills',
            ' Life Skills for Empowered Living!',
            'Gender Equality and Psycho- Sexual Integration',
            'Overcoming Various Addictions'

        ]
    }
];

const animationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};
const Program = () => {
    const [expandedCard, setExpandedCard] = useState(null); // State to track expanded card

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index); // Toggle card expansion
    };

    return (
        <div className="card-page">
            {/* Hero Section */}
            <div className="hero-section" style={{ backgroundColor: '#487D49', height: '250px', display: 'flex', alignItems: 'center' }}>
                <h1 className="text-center text-white w-100" style={{ paddingTop: '50px', fontSize: '2.5rem', fontWeight: 'bold' }}>
                    Programs
                </h1>
            </div>

            <Container className="d-flex justify-content-center my-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {cardData.map((card, index) => (
                        <Col key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="h-100 shadow-sm rounded">
                                    <Card.Img
                                        variant="top"
                                        src={card.img}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title
                                            className="text-center"
                                            style={{ fontWeight: '700', color: '#487D49' }}
                                        >
                                            {card.title}
                                        </Card.Title>
                                        <Card.Text className="text-center">{card.text}</Card.Text>
                                        <Button
                                            onClick={() => toggleExpand(index)}
                                            className="mt-auto align-self-center"
                                            style={{ backgroundColor: '#487D49', border: 'none' }}
                                        >
                                            {expandedCard === index ? 'Show Less' : 'Read More'}
                                            <FaArrowRight className="ms-1 mb-1" />
                                        </Button>
                                        {expandedCard === index && (
                                            <motion.ul
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="mt-3"
                                            >
                                                {card.bulletPoints.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Program;
