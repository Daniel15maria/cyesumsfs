import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../../App.css';
import why1 from '../../images/whyme1.png';
import why2 from '../../images/whyme2.png';
import why3 from '../../images/whyme3.png';
import why4 from '../../images/whyme4.png';
import { Link } from 'react-router-dom';

function WhyMeSections() {
  return (
    <section style={{ color: "#E1F1E7" }}>
      <Container>
        {/* First Row: Title */}
        <Row className="justify-content-center mt-2">
          <Col xs="auto">
            <h2
              style={{
                color: "#397478",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "1.397px",
                textTransform: "uppercase",
              }}
            >
              Why choose us
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center my-2">
          <Col xs="auto">
            <p
              style={{
                color: "#161C2D",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "30.957px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "41.276px", // 133.333%
                letterSpacing: "-1.032px",
                width: "448.022px",
              }}
            >
              People choose me because I serve the best for everyone
            </p>
          </Col>
        </Row>

        {/* Third Row: Cards */}
        <Row className="justify-content-center">
          <Col lg={1} md={0}></Col>

          {/* First Column */}
          <Col lg={5} md={6} sm={12} className="mb-4">
            {/* Card 1 */}
            <Card className="d-flex flex-row border-0">
              <Card.Img
                variant="left"
                src={why1}
                alt="Variant 1"
                style={{ width: "150px", height: "100%" }}
              />
              <Card.Body>
                <Card.Title>Dedicated counsellor, trainer</Card.Title>
                <Card.Text>
                  Empowering growth through dedicated counselling and transformative training sessions.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Card 2 */}
            <Card className="d-flex flex-row border-0">
              <Card.Img
                variant="left"
                src={why2}
                alt="Variant 2"
                style={{ width: "150px", height: "100%" }}
              />
              <Card.Body>
                <Card.Title>Organized tasks</Card.Title>
                <Card.Text>
                  Streamlining your journey through organized tasks for effective personal growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Column */}
          <Col lg={5} md={6} sm={12} className="mb-4">
            {/* Card 3 */}
            <Card className="d-flex flex-row border-0">
              <Card.Img
                variant="left"
                src={why3}
                alt="Variant 3"
                style={{ width: "150px", height: "100%" }}
              />
              <Card.Body>
                <Card.Title>Easy feedback sharing</Card.Title>
                <Card.Text>
                  Encouraging seamless feedback sharing to enhance customer learning and development.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Card 4 */}
            <Card className="d-flex flex-row border-0">
              <Card.Img
                variant="left"
                src={why4}
                alt="Variant 4"
                style={{ width: "150px", height: "100%" }}
              />
              <Card.Body>
                <Card.Title>Never miss deadline</Card.Title>
                <Card.Text>
                  Always helps you to meet your deadlines with effective planning and organization strategies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={1} md={0}></Col>
        </Row>
      </Container>

      {/* Call-to-action Section */}
      <Container fluid>
        <Row className="concelt123 py-4 px-5">
          <Col lg={9} className="concelt_row">
            <div className="concelt_text">
              <strong>Are You Ready to Transform Your Vision into Reality?</strong>
            </div>
            <div className="concelt_text1">
              With personalized guidance and expert insights, you can cultivate growth and well-being—no prior experience needed.
            </div>
          </Col>
          <Col lg={3}>
            <br />
            <Link to="/contact">
              <button className="concelt_button px-5">Get Started</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyMeSections;
