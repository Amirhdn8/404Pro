import React from "react";
import Style from "./heroSection.module.css";
import img from "../../../assets/developer.png";
import { TypeAnimation } from "react-type-animation";
import { IoSearch } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className={`col-md-6 col-sm-6 col-12 text-end d-md-block`}>
          <h2 className="mb-4">آکادمی بحر</h2>
          <div className="col-md-8">
            <div style={{ height: "fit-content" }}>
              <TypeAnimation
                sequence={[
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،",
                  1000, // Waits 1s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "16px", display: "inline-block" }}
              />
            </div>

            <div className={`input-group mt-4 ${Style.search}`}>
              <button
                className={`btn ${Style.button}`}
                type="button"
                id="button-addon1"
              >
                <IoSearch className="text-white" />
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
        <div className="col-md-5 col-sm-6  d-sm-block d-md-block d-none">
          <img
            src={img}
            alt=""
            className="img-fluid"
            style={{ height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
