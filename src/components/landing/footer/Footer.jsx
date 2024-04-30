import React from "react";
import Style from "./footer.module.css";
import FooterIcons from "./FooterIcons";
import FooterNews from "./FooterNews";
import FooterLeftSide from "./FooterLeftSide";

const Footer = () => {
  return (
    <div className="container-fluid mt-5" style={{ background: "#ebebfd" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 mb-5 text-center mt-4">
          <h6 style={{ fontWeight: "800" }}> شبکه های اجتماعی </h6>
          <FooterIcons />
        </div>

        <div className="col-md-4 col-sm-6 text-center my-4">
          <h6 style={{ fontWeight: "800" }}>عضویت در خبرنامه</h6>
          <span style={{ fontSize: "13px" }}>
            برای دریافت اخبار سایت عضو شوید...
          </span>
          <div className="row d-flex justify-content-center">
            <FooterNews />
          </div>
        </div>

        <div className="col-md-4 col-sm-6 text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 mt-4">
              <h6 style={{ fontWeight: "800" }}>ارتباط با ما</h6>
              <FooterLeftSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
