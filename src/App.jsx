import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Services from "./components/services/Services";
import Categories from "./components/categories/Categories";
import Course from "./components/courses/Course";
import StarRate from "./components/starRate/StarRate";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <HeroSection />
        <Services />
        <Categories />
        <Course />
        
      </div>
    </>
  );
}

export default App;
