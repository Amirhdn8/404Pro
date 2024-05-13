import React from "react";
import AsidePanel from "../components/panel/rightSide/AsidePanel";
import { Outlet } from "react-router-dom";
import MobileDropDownMenu from "../components/panel/rightSide/MobileDropDownMenu";

const Dashboard = () => {
  return (
    <div style={{ background: "#94a3b8" }}>
      <div class="container" style={{ paddingTop: "30px" }}>
        <div class="row g-5">
          <div class="d-none d-lg-block col-lg-3 rounded ">
            <AsidePanel />
          </div>
          <div className="col-md-12 d-md-block d-lg-none">
            <MobileDropDownMenu />
          </div>
          <div class="col-12 col-lg-9 rounded p-3 bg-white mb-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
