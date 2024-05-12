import React from "react";
import HeroSection from "../components/landing/heroSection/HeroSection";
import Services from "../components/landing/services/Services";
import Categories from "../components/landing/categories/Categories";
import Course from "../components/landing/courses/Course";
import News from "../components/landing/news/News";
import Professors from "../components/landing/professors/Professors";
import Offers from "../components/landing/offers/Offers";

const LandingPage = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Services />
        <Categories />
        <Course />
        <News />
        <Professors />
        <Offers />
      </div>
    </>
  );
};

export default LandingPage;
