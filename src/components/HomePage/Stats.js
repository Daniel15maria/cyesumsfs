import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ScrollTriggeredStats() {
    const stats = [
        { endNumber: 1000000, label: 'Customers visit every month to get their service done.' },
        { endNumber: 92, label: 'Satisfaction rate comes from our awesome customers.' },
        { endNumber: 4.9, label: 'Average customer ratings we have got all over internet.' },
    ];

    const [animationRunning, setAnimationRunning] = useState(false);
    const [numbers, setNumbers] = useState(stats.map(() => 0)); // Initialize numbers array with zeros
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const component = document.getElementById('scrollStats');
            const componentPosition = component.getBoundingClientRect().top + window.scrollY;
            const scrollTriggerPosition = window.innerHeight * 0.75;

            if (!animationTriggered && componentPosition < window.scrollY + window.innerHeight - scrollTriggerPosition) {
                setAnimationTriggered(true);
                increaseNumberAnimation(stats.map(stat => stat.endNumber));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animationTriggered, stats]);

    const increaseNumberAnimation = (endNumbers, duration = 2000) => {
        setAnimationRunning(true);
        const startTime = performance.now();

        const animate = (timestamp) => {
            const elapsedTime = timestamp - startTime;

            const updatedNumbers = endNumbers.map((end, i) => {
                const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is capped at 1
                return numbers[i] + progress * (end - numbers[i]);
            });

            setNumbers(updatedNumbers);

            if (elapsedTime < duration) {
                requestAnimationFrame(animate);
            } else {
                setAnimationRunning(false);
                setNumbers(endNumbers); // Ensure final numbers are exactly the target
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div id="scrollStats">
            <Container
                fluid
                className="p-4 justify-content-between"
                style={{ backgroundColor: '#E1F1E7' }}
            >
                <Row className="text-center justify-content-between">
                    <Col lg={1} sm={0}></Col>
                    {stats.map((stat, index) => (
                        <Col className="py-3" lg={2} sm={12} key={index}>
                            <p className="h1">
                                {index === 0
                                    ? `${(numbers[index] / 1000000).toFixed(1)}M+`
                                    : index === 2
                                        ? `${numbers[index].toFixed(1)}/5.0`
                                        : `${Math.round(numbers[index])}%`}
                            </p>
                            {stat.label}
                        </Col>
                    ))}
                    <Col lg={1} sm={0}></Col>
                </Row>
            </Container>

            <style jsx>{`
                /* Media Queries for Responsive Design */
                @media (max-width: 767px) {
                    /* On small screens (phones), display statistics in a single column */
                    .h1 {
                        font-size: 2rem; /* Smaller text for mobile */
                    }
                    .py-3 {
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                    }
                }

                @media (max-width: 992px) {
                    /* On medium screens (tablets), adjust the layout */
                    .h1 {
                        font-size: 2.5rem; /* Slightly bigger text for tablets */
                    }
                    .py-3 {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                    .container-fluid {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }

                @media (min-width: 1200px) {
                    /* On large screens (desktops), maintain larger text */
                    .h1 {
                        font-size: 3rem; /* Bigger text for larger screens */
                    }
                    .py-3 {
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default ScrollTriggeredStats;
