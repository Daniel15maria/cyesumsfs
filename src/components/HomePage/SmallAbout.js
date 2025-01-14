import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../App.css';
import { Link } from 'react-router-dom';
import im1 from '../../images/image17.jpg'
import im2 from '../../images/image20.jpg'
import im3 from '../../images/image8.jpg'

const SmallAboutSection = () => {
  return (
    <section>
      <Container className="mt-4 align-items-start justify-content-center">
        {/* Section 1 */}
        <Row className="justify-content-start mt-4">
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
              Our Story
            </h2>
          </Col>
        </Row>
        <div className="my-4">
          <h1 className='mb-4'>Empowering Lives Through Guidance, Compassion, and Transformation</h1>
          <p className='mb-4'>
            We help you navigate personal, professional, and spiritual challenges
            through workshops, retreats, and one-on-one sessions. Let us support
            your journey to resilience and success. Together, we can unlock your
            full potential.
          </p>
        </div>

        {/* Section 2 - Row with columns */}
        <Row className='mb-4'>
          {/* First column */}
          <Col xs={12} md={6} lg={6} className="d-flex justify-content-center">
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${im1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
              }}
            />
          </Col>

          {/* Second column */}
          <Col xs={12} md={6} lg={6}>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${im2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: "5px",
                borderRadius: '8px',
              }}
            />
            <div
              style={{
                width: "100%",
                height: "100px",
                backgroundImage: `url(${im3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
              }}
            />
          </Col>
        </Row>

        {/* Section 3 */}
        <Row>
          <Col className="d-flex justify-content-center">
            <Link to="/program" className="btn btn-primary fw-bold">
              Read More →
            </Link>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        /* Media Queries for Responsive Design */
        @media (max-width: 767px) {
          /* On small screens (phones), make sure images take full width */
          .section-image {
            width: 100% !important;
            height: auto !important;
          }
        }

        @media (max-width: 992px) {
          /* On medium screens (tablets), adjust the height of the images */
          .section-image {
            width: 100% !important;
            height: 250px !important;
          }
        }

        @media (min-width: 1200px) {
          /* On large screens (desktops), keep the default sizes */
          .section-image {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default SmallAboutSection
