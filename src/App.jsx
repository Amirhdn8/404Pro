import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
