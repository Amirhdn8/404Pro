import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CourseMainPage from "./components/pages/CourseMainPage";
import NewsMain from "./components/newsMain/NewsMain";
import LoginRegister from "./components/pages/LoginRegister";
import Register from "./components/loginRegister/register/Register";
 

function App() {
  const MainLayout = () => {
    return (
      <>
        <div>
          <Header />
          <Outlet />
        </div>
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/corsemain" element={<CourseMainPage />} />
            <Route path="/newsmain" element={<NewsMain />} />
            <Route path="/auth/login" element={<LoginRegister />} />
            <Route path="/auth/register" element={ <Register /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
