import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CourseMainPage from "./components/pages/CourseMainPage";
import NewsMain from "./components/newsMain/NewsMain";
import Wizard from "./Wizard";

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
            {/* <Route path="/auth/login" element={ <Wizard /> } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
