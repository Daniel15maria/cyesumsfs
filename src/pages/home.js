import React from "react";
import CarouselHeader from "../components/HomePage/carosal"; // Adjust path if needed
import HomeHeaderSection from "../components/HomePage/HeaderSection";
import SmallAboutSection from "../components/HomePage/SmallAbout";

const Homepage = () => {
    return (
        <div>
          
            <HomeHeaderSection />
            <SmallAboutSection />

            <CarouselHeader />
        </div>
    );
};

export default Homepage;
