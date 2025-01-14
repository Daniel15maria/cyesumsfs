import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import '../../App.css';
import { Link } from 'react-router-dom';
import im1 from '../../images/image17.jpg'

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
        <Row>
          <Link to="/program" className="text-primary fw-bold">
            Read More →
          </Link>
        </Row>

        {/* <Row>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A1</td>
          <td colSpan={2}>A2 and A3 merged</td>
        </tr>
        <tr>
          <td>B1</td>
          <td colSpan={2}>B2 and B3 merged</td>
        </tr>
        <tr>
          <td colSpan={3}>C1+D1+E1 merged</td>
        </tr>
        <tr>
          <td colSpan={3}></td>
          <td colSpan={2}>C2+D2 merged</td>
          <td>D3</td>
        </tr>
        <tr>
          <td colSpan={3}>C1+D1+E1 merged</td>
          <td colSpan={2}>E2+E3 merged</td>
        </tr>
      </tbody>
    </Table>
      </Row> */}
      </Container>

    </section>


  )
}

export default SmallAboutSection