import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from '../../images/slected1.jpg';
import { Link } from 'react-router-dom';

const HomeHeaderSection = () => {
    const styles = {
        h4: {
            fontSize: "24px",
            fontWeight: "bold",
        },
        h1: {
            fontSize: "36px",
            fontWeight: "bold",
            margin: "10px 0",
        },
        education: {
            fontSize: "18px",  // Smaller font size for the education
            fontWeight: "bold", // Normal font weight for the education
            marginTop: "5px", // Adds some space between name and education
        },
        p: {
            fontSize: "18px",
            lineHeight: "1.6",
        },
        connectButton: {
            backgroundColor: "#629584",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
        },
        profileImage: {
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
    };

    return (
        <section className="d-flex align-items-center justify-content-center">
            <Container className="py-5 d-flex align-items-center justify-content-center">
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <h4 style={styles.h4}>
                            MOTIVATING - STRENGTHENING - FOSTERING - SUPPORTING
                        </h4>
                        <br />
                        <h1 style={styles.h1}>
                            Rev. Fr. A. Chinnasamy Yesuraj, MSFS
                        </h1>
                        <h5 style={styles.education}>
                            M. Sc (Counselling Psychology)
                        </h5>
                        <br />
                        <p style={styles.p}>
                            A Counsellor, A Trainer, with expertise in motivating change,
                            fostering growth, and supporting well-being for personal and
                            professional development.
                        </p>
                        <Link to="/contact">
                            <button style={styles.connectButton}>Connect Now</button>
                        </Link>
                    </Col>
                    <Col md={6} className="text-center">
                        <Image
                            fluid
                            src={image1}
                            alt="Rev. Fr. A. Chinnasamy Yesuraj"
                            style={styles.profileImage}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeHeaderSection;
