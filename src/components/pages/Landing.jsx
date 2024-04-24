import React from "react";
import HeroSection from "../heroSection/HeroSection";
import Services from "../services/Services";
import Categories from "../categories/Categories";
import Course from "../courses/Course";
import News from "../news/News";
import Professors from "../professors/Professors";
import Offers from "../offers/Offers";
import Footer from "../footer/Footer";

const Landing = () => {
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

export default Landing;
