import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CourseMainPage from "./pages/CourseMainPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import NewsMainPage from "./pages/NewsMainPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import UserDashbord from "./components/panel/Dashbord/UserDashbord";
import EditProfilePage from "./pages/EditProfilePage";
import MyCoursePanel from "./pages/MyCoursePanel";
import Header from "./components/landing/header/Header";
import Footer from "./components/landing/footer/Footer";

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
            <Route path="/newsMain" element={<NewsMainPage />} />
            <Route path="/newsDetail" element={<NewsDetailPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route element={<Dashboard />}>
              <Route path="/dashboard" element={<UserDashbord />} />
              <Route
                path="dashboard/editProfile"
                element={<EditProfilePage />}
              />
              <Route path="/dashboard/myCourses" element={<MyCoursePanel />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
