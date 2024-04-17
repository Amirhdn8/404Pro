import React from "react";
import Style from "./header.module.css";

const Header = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Style.header}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{fontWeight:"800" , color:"#6666FF"}}>
            BAHR ACADEMY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav text-white mb-2 mb-lg-0 ms-auto ${Style.navItem}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  صفحه اصلی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  دوره ها
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  اخبار
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  اساتید
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ارتباط باما
                </a>
              </li>
            </ul>

            <button
              className={`text-white rounded-pill px-4 py-2 ms-5  ${Style.btn}`}
            >
              ورود / ثبت نام
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
