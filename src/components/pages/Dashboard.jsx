import React from "react";
import AsidePanel from "../panel/rightSide/AsidePanel";
import { Outlet } from "react-router-dom";
import MobileDropDownMenu from "../panel/rightSide/MobileDropDownMenu";

const Dashboard = () => {
  return (
    <div style={{ background: "#94a3b8", height: "100vh" }}>
      <div class="container" style={{ paddingTop: "30px" }}>
        <div class="row g-5">
          <div class="d-none d-lg-block col-lg-3 rounded ">
            <AsidePanel />
          </div>
          <div className="col-md-12 d-md-block d-lg-none border border-black">
            <MobileDropDownMenu />
          </div>
          <div class="col-12 col-lg-9 rounded p-3 bg-white" >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
