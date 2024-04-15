import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <HeroSection />
        <Services />
      </div>
    </>
  );
}

export default App;
