import React from 'react';
import story from '../images/goodone.jpg';
import image1 from '../images/image11.jpg';
import image2 from '../images/image14.jpg';
import image3 from '../images/image16.jpg';
import image4 from '../images/image6.jpg';
import HistoryComp from './history';

const About = () => {
    const styles = {
        aboutContainer: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        curveSection: {
            background: 'linear-gradient(to bottom, #629584, #ffffff)',
            textAlign: 'center',
            padding: '50px 20px',
            borderBottomLeftRadius: '50% 10%',
            borderBottomRightRadius: '50% 10%',
        },
        title: {
            fontSize: '36px',
            fontWeight: 'bold',
            margin: 0,
        },
        subtitle: {
            fontSize: '18px',
            margin: '10px 0 0',
            color: '#555',
        },
        contentSection: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        textSection: {
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        textColumn: {
            flex: 1,
            paddingRight: '20px',
            fontSize: '16px',
            lineHeight: '1.5',
        },
        profileImage: {
            flex: 1,
            width: '300px',
            height: '300px',
            borderRadius: '10%',
            objectFit: 'cover',
            marginLeft: '20px',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        scrollSection: {
            background: '#f6f9f8',
            padding: '50px 20px',
        },
        scrollContent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        imageGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            flex: 1,
        },
        gridImage: {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '10px',
        },
        bioSection: {
            flex: 1,
            marginLeft: '20px',
        },
        bioTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        bioText: {
            fontSize: '16px',
            lineHeight: '1.5',
        },
    };

    return (
        <div style={styles.aboutContainer}>
            <div style={styles.curveSection}>
                <h1 style={styles.title}>My story</h1>
                <p style={styles.subtitle}>
                    Empowering Lives Through Guidance, Compassion, and Transformation
                </p>
            </div>
            <div style={styles.contentSection}>
                <div style={styles.textSection}>
                    <h2 style={styles.heading}>
                        Empowering Journey to Success, Every Step of the Way.
                    </h2>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={styles.textColumn}>
                            We are deeply committed to guiding our clients toward success by identifying and sharing common trends and proven strategies. Through personalized approaches, I aim to empower individuals in their personal and professional growth, helping them overcome challenges and reach their full potential. Our philosophy revolves around understanding each client's unique needs and crafting solutions that foster long-term success.
                        </div>
                        <div style={styles.textColumn}>
                            With a strong foundation in counseling psychology, I specialize in marriage and family therapy, as well as addiction and rehabilitation. My research on the 'Psychological Impact of Social Networking Sites on Youth' underscores my dedication to addressing the complexities of contemporary issues. This combination of expertise and insight allows me to provide tailored guidance, ensuring meaningful and transformative progress for those I serve.
                        </div>
                    </div>
                </div>
                <img
                    src={story} // Replace with the actual image path
                    alt="Profile"
                    style={styles.profileImage}
                />
            </div>

            {/* Scrollable Section */}
            <div style={styles.scrollSection}>
                <div style={styles.scrollContent}>
                    <div style={styles.imageGrid}>
                        <img
                            src={image1} // Replace with actual image paths
                            alt="Image 1"
                            style={styles.gridImage}
                        />
                        <img
                            src={image2}
                            alt="Image 2"
                            style={styles.gridImage}
                        />
                        <img
                            src={image3}
                            alt="Image 3"
                            style={styles.gridImage}
                        />
                        <img
                            src={image4}
                            alt="Image 4"
                            style={styles.gridImage}
                        />
                    </div>
                    <div style={styles.bioSection}>
                        <h2 style={styles.bioTitle}>Short Bio-graphy</h2>
                        <p style={styles.bioText}>
                            A. Chinnasamy Yesuraj (MSFS), born on 24/08/1989 in Kovilnaru, Tamil Nadu, is a committed priest with a passion for counselling. He completed his education at RC Middle School and St. Paul's Higher Secondary School, laying a strong foundation for his future.
                        </p>
                        <p style={styles.bioText}>
                            After attending the SFS Minor Seminary and Salesianum, he pursued philosophy at Suvidya College and theology at Orients Theological College. Ordained on April 26, 2016, Fr. Yesuraj has dedicated his life to serving the community and fostering spiritual growth.
                        </p>
                    </div>
                </div>
            </div>
            <HistoryComp />
        </div>
    );
};

export default About;
