import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gallerybg from '../images/image7.jpg';
import Footer from '../Reusable/footer';

const staggeredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 20,
        },
    }),
};

const galleryData = [
    require('../images/IMG-20250111-WA0077.jpg'),
    require('../images/IMG-20250111-WA0078.jpg'),
    require('../images/IMG-20250111-WA0079.jpg'),
    require('../images/IMG-20250111-WA0080.jpg'),
    require('../images/IMG-20250111-WA0081.jpg'),
    require('../images/IMG-20250111-WA0082.jpg'),
    require('../images/IMG-20250111-WA0083.jpg'),
    require('../images/IMG-20250111-WA0084.jpg'),
    require('../images/IMG-20250111-WA0085.jpg'),
    require('../images/IMG-20250111-WA0086.jpg'),
    require('../images/IMG-20250111-WA0087.jpg'),
    require('../images/IMG-20250111-WA0088.jpg'),
    require('../images/IMG-20250111-WA0089.jpg'),
    require('../images/IMG-20250111-WA0090.jpg'),
    require('../images/IMG-20250111-WA0091.jpg'),
    require('../images/IMG-20250111-WA0092.jpg'),
    require('../images/goodone.jpg'),
    require('../images/image1.png'),
    require('../images/image11.jpg'),
    require('../images/image12.jpg'),
    require('../images/image13.jpg'),
    require('../images/image14.jpg'),
    require('../images/image15.jpg'),
    require('../images/image16.jpg'),
    require('../images/image17.jpg'),
    require('../images/image18.jpg'),
    require('../images/image19.jpg'),
    require('../images/image2.jpg'),
    require('../images/image20.jpg'),
    require('../images/image21.jpg'),
    require('../images/image3.jpg'),
    require('../images/image4.jpg'),
    require('../images/image5.jpg'),
    require('../images/image6.jpg'),
    require('../images/image7.jpg'),
    require('../images/image8.jpg'),
    require('../images/image9.jpg'),
    require('../images/labwithimage.jpg'),
    require('../images/image18.jpg'),
];

const Gallery = () => {
    return (
        <div>
            {/* Adjusted height of the gallery background image */}
            <img
                alt="Gallery Background Image"
                src={gallerybg}
                className="w-100"
                style={{ height: '550px', objectFit: 'cover' }} // Adjusted height
            />
            <Container className="px-3">
                {/* Divider with text */}
                <div className="position-relative my-4">
                    {/* Colored Divider */}
                    <div
                        style={{
                            backgroundColor: '#487D49', // Change the color as needed
                            height: '20px',
                            width: '100%',
                        }}
                    ></div>

                    {/* Centered Text */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: 'bold',
                            fontSize: '24px', // Adjust size as needed
                            color: '#ffffff', // Change the text color as needed
                            backgroundColor: '#487D49', // Same as the divider color
                            padding: '0 10px', // Add padding for better spacing
                            borderRadius: '5px', // Optional, for rounded edges
                        }}
                    >
                        Gallery
                    </div>
                </div>
                <Row>
                    {galleryData.map((image, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <GalleryItem img={image} index={index} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />

        </div>
    );
};

const GalleryItem = ({ img, index }) => {
    return (

        <div custom={index} variants={staggeredVariants} className="mb-4">
            <Card style={{ height: '250px' }}>
                <Card.Img variant="top" src={img} style={{ height: '100%', objectFit: 'cover' }} />
            </Card>

        </div>


    );
};

export default Gallery;
