import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/landing/header/Header";
import Footer from "./components/landing/footer/Footer";
import LandingPage from "./components/pages/LandingPage";
import CourseDetailPage from "./components/pages/CourseDetailPage";
import CourseMainPage from "./components/courses/courseMain/CourseMain";
import NewsMain from "./components/news/newsMain/NewsMain";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import Register from "./components/loginRegister/register/Register";

function App() {
  const MainLayout = () => {
    return (
      <>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courseMain" element={<CourseMainPage />} />
            <Route path="/courseDetail" element={<CourseDetailPage />} />
            <Route path="/newsMain" element={<NewsMain />} />
            <Route path="/auth/login" element={<LoginRegisterPage />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
