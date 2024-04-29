import React from "react";
import HeroSection from "../landing/heroSection/HeroSection";
import Services from "../landing/services/Services";
import Categories from "../landing/categories/Categories";
import Course from "../landing/courses/Course";
import News from "../landing/news/News";
import Professors from "../landing/professors/Professors";
import Offers from "../landing/offers/Offers";

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
