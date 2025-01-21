import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import carousel1 from '../../images/goodone.jpg';
import carousel2 from '../../images/image4.jpg';
import carousel3 from '../../images/selected2.1.jpg';

function CarouselHeader() {
    const navigate = useNavigate();
    const slides = [
        {
            image: carousel1,
            heading: ['Anger and Stress', 'Management'],
        },
        {
            image: carousel2,
            heading: ['Personal Empowerment', ''],
        },
        {
            image: carousel3,
            heading: ['Depression/ Anxiety', 'Disorder,etc..,'],
        }
    ];

    const carouselStyle = {
        overflow: 'hidden',
        margin: '0 auto',
        maxWidth: '100%',
        borderRadius: '20px', // Added to curve the corners of the carousel container
    };

    const imgStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '60vh',
        borderRadius: '20px', // Added to curve the corners of the images
    };

    const captionStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        width: '80%',
    };

    return (
        <header>
            <div style={carouselStyle}>
                <Carousel interval={3000} pause={false} controls={false}>
                    {slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={imgStyle}
                            />
                            <Carousel.Caption
                                style={{
                                    ...captionStyle,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className="d-flex flex-column align-items-center"
                            >
                                {slide.heading.map((line, i) => (
                                    <h1
                                        key={i}
                                        className="mb-2 text-light text-center"
                                        style={{
                                            fontSize: '1.5rem',
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {line}
                                    </h1>
                                ))}
                                <Button
                                    className="px-4 btn-primary"
                                    style={{
                                        fontSize: '1rem',
                                    }}
                                    onClick={() => navigate('/contact')}
                                >
                                    Let's Connect
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </header>
    );
}

export default CarouselHeader;
