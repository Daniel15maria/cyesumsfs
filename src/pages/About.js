import React from 'react';
import story from '../images/goodone.jpg';
import image1 from '../images/image11.jpg';
import image2 from '../images/image14.jpg';
import image3 from '../images/image16.jpg';
import image4 from '../images/image6.jpg';
import HistoryComp from '../components/AboutPage/history';
import Footer from '../Reusable/footer';
import { color } from 'framer-motion';

const About = () => {
    const styles = {
        aboutContainer: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        curveSection: {
            background: '#629584',
            textAlign: 'center',
            padding: '100px 20px',
            borderBottomLeftRadius: '50% 200%',
            borderBottomRightRadius: '50% 200%',
        },
        title: {
            fontSize: '40px',
            fontWeight: 'bold',
            color: "white",
            margin: 0,
        },
        subtitle: {
            fontSize: '20px',
            margin: '10px 0 0',
            color: '#555',
        },
        contentSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        textSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center',
        },
        textColumns: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
        },
        textColumn: {
            flex: '1 1 300px',
            fontSize: '20px',
            lineHeight: '1.5',
        },
        profileImage: {
            width: '300px',
            height: '300px',
            borderRadius: '10%',
            objectFit: 'cover',
            marginTop: '20px',
        },
        scrollSection: {
            background: '#f6f9f8',
            padding: '50px 20px',
        },
        scrollContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        imageGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            width: '100%',
        },
        gridImage: {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '10px',
        },
        bioSection: {
            marginTop: '30px',
            textAlign: 'center',
        },
        bioTitle: {
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        bioText: {
            fontSize: '18px',
            lineHeight: '1.5',
        },
    };

    return (
        <div style={styles.aboutContainer}>
            {/* Curved Section */}
            <div style={styles.curveSection}>
                <h1 style={styles.title}>My story</h1>
            </div>

            {/* Content Section */}
            <div style={styles.contentSection}>
                <div style={styles.textSection}>
                    <h2>Empowering Journey to Success, Every Step of the Way.</h2>
                    <div style={styles.textColumns}>
                        <div style={styles.textColumn}>
                            We are deeply committed to guiding our clients toward success by identifying and sharing common trends and proven strategies. Through personalized approaches, I aim to empower individuals in their personal and professional growth, helping them overcome challenges and reach their full potential. Our philosophy revolves around understanding each client's unique needs and crafting solutions that foster long-term success.
                        </div>
                        <div style={styles.textColumn}>
                            With a strong foundation in counseling psychology, I specialize in marriage and family therapy, as well as addiction and rehabilitation. My research on the 'Psychological Impact of Social Networking Sites on Youth' underscores my dedication to addressing the complexities of contemporary issues. This combination of expertise and insight allows me to provide tailored guidance, ensuring meaningful and transformative progress for those I serve.
                        </div>
                    </div>
                </div>
                <img
                    src={story}
                    alt="Profile"
                    style={styles.profileImage}
                />
            </div>

            {/* Scrollable Section */}
            <div style={styles.scrollSection}>
                <div style={styles.scrollContent}>
                    <div style={styles.imageGrid}>
                        <img src={image1} alt="Image 1" style={styles.gridImage} />
                        <img src={image2} alt="Image 2" style={styles.gridImage} />
                        <img src={image3} alt="Image 3" style={styles.gridImage} />
                        <img src={image4} alt="Image 4" style={styles.gridImage} />
                    </div>
                    <div style={styles.bioSection}>
                        <h2 style={styles.bioTitle}>Short Biography</h2>
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
            <Footer />
        </div>
    );
};

export default About;
