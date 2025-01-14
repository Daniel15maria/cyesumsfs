import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import prog1 from '../../images/prog1.png';
import { Link, useNavigate } from 'react-router-dom';

function ProgramsIntro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Ensure the page layout is ready before any interaction happens
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleRedirect = (e) => {
    e.preventDefault();
    // Add a slight delay to ensure page elements are loaded before navigation
    setTimeout(() => {
      navigate('/program');
    }, 300);
  };

  return (
    <section>
      <Container>
        {/* First Row: Title */}
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <h2
              style={{
                color: "#397478",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "1.397px",
                textTransform: "uppercase",
              }}
            >
              Our Training Programs
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center mb-2">
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
              We provide great services for our customers based on needs
            </p>
          </Col>
        </Row>

        {/* Third Row: Cards */}
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={4} sm={12}>
            <Card className="p-5" style={{ backgroundColor: "#397478", color: "#FFFFFF" }}>
              <Card.Img
                variant="top"
                src={prog1}
                alt="Program 1"
              />
              <Card.Body>
                <Card.Title>Animated Programs</Card.Title>
                <Card.Text>
                  We share common trends and strategies for improving you Lorem
                  ipsum dolor sit amet conse
                </Card.Text>
                <Link to="/program" style={{ textDecoration: 'none' }}>
                  <Button variant="light">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="p-5" style={{ backgroundColor: "#161C2D", color: "#FFFFFF" }}>
              <Card.Img
                variant="top"
                src={prog1}
                alt="Program 2"
              />
              <Card.Body>
                <Card.Title>One-day Workshop</Card.Title>
                <Card.Text>
                  We share common trends and strategies for improving you Lorem
                  ipsum dolor sit amet conse
                </Card.Text>
                <Link to="/program" style={{ textDecoration: 'none' }}>
                  <Button variant="light">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={12} className="mb-4">
            <Card className="p-5" style={{ backgroundColor: "#397478", color: "#FFFFFF" }}>
              <Card.Img
                variant="top"
                src={prog1}
                alt="Program 3"
              />
              <Card.Body>
                <Card.Title>Two-day Workshop</Card.Title>
                <Card.Text>
                  We share common trends and strategies for improving you Lorem
                  ipsum dolor sit amet conse
                </Card.Text>
                <Link to="/program" style={{ textDecoration: 'none' }}>
                  <Button variant="light">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProgramsIntro;
