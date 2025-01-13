import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gallerybg from '../images/image7.jpg';

import { motion, useAnimation } from 'framer-motion';

const staggeredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 20
        }
    })
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

    // require('../images/Gallery/67.jpg'),
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
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <div>
            <img alt="Gallery Background Image" src={gallerybg} className="w-100 h-50 " />
            <Container className='px-3'>
                <motion.div initial="hidden" animate={controls} variants={staggeredVariants} className='each-head d-flex justify-content-center my-4'>Gallery</motion.div>
                <Row>
                    {galleryData.map((image, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <GalleryItem
                                img={image}
                                index={index}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
};

const GalleryItem = ({ img, index }) => {
    return (
        <motion.div
            custom={index}
            variants={staggeredVariants}
            className="mb-4"
        >
            <Card style={{ height: "250px" }}>
                <Card.Img variant="top" src={img} style={{ height: "100%", objectFit: "cover" }} />
            </Card>
        </motion.div>
    );
};

export default Gallery;