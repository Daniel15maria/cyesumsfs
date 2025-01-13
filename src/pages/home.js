import React from "react";
import CarouselHeader from "../pages/carosal"; // Adjust the path based on your folder structure
import image1 from '../images/image1.png'
const Homepage = () => {
    const styles = {
        heroSection: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
            backgroundColor: "#f4f4f4",
            height: "90vh",
            boxSizing: "border-box",
            flexDirection: "row",
        },
        profileContainer: {
            maxWidth: "50%",
        },
        profileImageContainer: {
            maxWidth: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        profileImage: {
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
        connectButton: {
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
        },
        h4: {
            fontSize: "24px",
            fontWeight: "bold",
        },
        h1: {
            fontSize: "36px",
            fontWeight: "bold",
            margin: "10px 0",
        },
        p: {
            fontSize: "18px",
            lineHeight: "1.6",
        },
    };

    return (
        <div>


            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.profileContainer}>
                    <h4 style={styles.h4}>
                        MOTIVATING - STRENGTHENING - FOSTERING - SUPPORTING
                    </h4>
                    <br />
                    <h1 style={styles.h1}>Rev. Fr. A. Chinnasamy Yesuraj, MSFS</h1>
                    <br />
                    <p style={styles.p}>
                        A Counsellor, A Trainer, with expertise in motivating change,
                        fostering growth, and supporting well-being for personal and
                        professional development.
                    </p>
                    <button style={styles.connectButton}>Connect Now</button>
                </div>
                <div style={styles.profileImageContainer}>
                    <img
                        src={image1}
                        alt="Rev. Fr. A. Chinnasamy Yesuraj"
                        style={styles.profileImage}
                    />
                </div>
            </section>
            {/* Carousel Section */}
            <CarouselHeader />
        </div>
    );
};

export default Homepage;
