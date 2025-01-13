import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SmallAboutSection = () => {
  return (
    <section>
         <Container className="mt-4">
      {/* Section 1 */}
      <div className="mb-4">
        <h1>Empowering Lives Through Guidance, Compassion, and Transformation</h1>
        <p>
          We help you navigate personal, professional, and spiritual challenges
          through workshops, retreats, and one-on-one sessions. Let us support
          your journey to resilience and success. Together, we can unlock your
          full potential.
        </p>
        <a href="#" className="text-primary fw-bold">
          Read More →
        </a>
      </div>

      {/* Section 2 - Row with columns */}
      <Row>
        {/* First column */}
        <Col lg={6} className="d-flex align-items-center justify-content-center">
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#ccc",
            }}
          >
            {/* Replace with <img> */}
          </div>
        </Col>

        {/* Second column */}
        <Col lg={6}>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#aaa",
              marginBottom: "5px",
            }}
          >
            {/* Replace with <img> */}
          </div>
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#888",
            }}
          >
            {/* Replace with <img> */}
          </div>
        </Col>
      </Row>
    </Container>
        

    </section>
  )
}

export default SmallAboutSection