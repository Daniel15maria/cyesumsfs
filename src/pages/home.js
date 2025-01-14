import React from "react";
import CarouselHeader from "../components/HomePage/carosal"; // Adjust path if needed
import HomeHeaderSection from "../components/HomePage/HeaderSection";
import SmallAboutSection from "../components/HomePage/SmallAbout";
import Footer from '../Reusable/footer';
import ScrollTriggeredStats from "../components/HomePage/Stats";
import ProgramsIntro from "../components/HomePage/ProgInto";
import WhyMeSections from "../components/HomePage/WhyMeSection";

const Homepage = () => {
    return (
        <div>
            <HomeHeaderSection />
            <SmallAboutSection />
            
            <ScrollTriggeredStats />
            <ProgramsIntro />
            <WhyMeSections />

            {/* <CarouselHeader /> */}
            <Footer />
        </div>
    );
};

export default Homepage;
