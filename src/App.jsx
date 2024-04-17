import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Services from "./components/services/Services";
import Categories from "./components/categories/Categories";
import Course from "./components/courses/Course";
import News from "./components/news/News";
import Professors from "./components/professors/Professors";


function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <HeroSection />
        <Services />
        <Categories />
        <Course />
        <News />
        <Professors />
      </div>
    </>
  );
}

export default App;
