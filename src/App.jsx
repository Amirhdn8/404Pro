import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing"
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
  return <>
  
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
     </Routes>
    </BrowserRouter>
  </>;
}

export default App;
