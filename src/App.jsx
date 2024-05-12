import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseMainPage from "./components/courses/courseMain/CourseMain";
import Footer from "./components/landing/footer/Footer";
import Header from "./components/landing/header/Header";
import Register from "./components/loginRegister/register/Register";
import NewsMain from "./components/news/newsMain/NewsMain";
import CourseDetailPage from "./components/pages/CourseDetailPage";
import Dashboard from "./components/pages/Dashboard";
import EditProfilePage from "./components/pages/EditProfilePage";
import LandingPage from "./components/pages/LandingPage";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import MyCoursePanel from "./components/pages/MyCoursePanel";
import NewsDetailPage from "./components/pages/NewsDetailPage";
import UserDashbord from "./components/panel/Dashbord/UserDashbord";
import RightSide from "./components/panel/rightSide/AsidePanel";

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

  const PanelLayout = () => {
    return (
      <>
        <div
          className="container overflow-hidden text-center"
          style={{ margin: "120px auto" }}
        >
          <div className="row grid">
            <div className="col-md-3">
              <RightSide />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
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
            <Route path="/newsDetail" element={<NewsDetailPage />} />
            <Route path="/auth/login" element={<LoginRegisterPage />} />
            <Route path="/auth/register" element={<Register />} />
            <Route element={<Dashboard />}>
              <Route path="/dashboard" element={<UserDashbord />} />
              <Route path="dashboard/editProfile" element={<EditProfilePage />} />
              <Route path="/dashboard/myCourses" element={<MyCoursePanel />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
