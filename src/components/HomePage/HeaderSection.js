import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from '../../images/image1.png';

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
        p: {
            fontSize: "18px",
            lineHeight: "1.6",
        },
        connectButton: {
            backgroundColor: "#4CAF50",
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
        <Container className="py-5 d-flex align-items-center justify-content-center" >
            <Row className="align-items-center justify-content-center">
                <Col md={6}>
                    <h4 style={styles.h4}>
                        MOTIVATING - STRENGTHENING - FOSTERING - SUPPORTING
                    </h4>
                    <br />
                    <h1 style={styles.h1}>Rev. Fr. A. Chinnasamy Yesuraj, MSFS</h1>
                    <br />
                    <p style={styles.p}>
                        A Counsellor, A Trainer, with expertise in motivating change,
                        fostering growth, and supporting well-being for personal and
                        professional development.
                    </p>
                    <button style={styles.connectButton}>Connect Now</button>
                </Col>
                <Col md={6} className="text-center">
                    <img
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
