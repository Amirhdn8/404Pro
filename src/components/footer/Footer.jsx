import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Style from "./footer.module.css";

const Footer = () => {
  return (
    <div className="container-fluid mt-5" style={{ background: "#ebebfd" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 mb-5 text-center mt-4">
          <h6 style={{ fontWeight: "800" }}> شبکه های اجتماعی </h6>
          <div className={`${Style.icons}`}>
            <span>
              <FaWhatsapp />
            </span>
            <span>
              <GrInstagram />
            </span>
            <span>
              <FaTelegramPlane />
            </span>
            <span>
              <FaGit />
            </span>
            <span>
              <SiGmail />
            </span>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 text-center my-4">
          <h6 style={{ fontWeight: "800" }}>عضویت در خبرنامه</h6>
          <span style={{ fontSize: "13px" }}>
            برای دریافت اخبار سایت عضو شوید...
          </span>
          <div className="row d-flex justify-content-center">
            <div
              className={`input-group mt-4 col-md-4 col-sm-12 ${Style.search}`}
            >
              <button
                className={`btn ${Style.button}`}
                type="button"
                id="button-addon1"
              >
                ثبت
              </button>
              <input
                type="text"
                className={`form-control ${Style.input}`}
                placeholder="دنبال چیزی هستید"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 mt-4">
              <h6 style={{ fontWeight: "800" }}>ارتباط با ما</h6>
              <div style={{fontSize:"13px"}}>
                <span className="d-block mt-3">
                  آدرس : ساری بلوار آزادی نبش ایزد طلب
                </span>
                <span className="d-block mt-3">تماس با ما : 0933 834 6383</span>
                <span className="d-block mt-3">درباره ما : کارگاه ری اکت</span>
              </div>
            </div>

            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
