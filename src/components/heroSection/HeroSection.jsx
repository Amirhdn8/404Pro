import React from "react";
import Style from "./heroSection.module.css";
import img from "../../assets/developer.png";
import svg from "../../assets/Vector.svg";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className={`col-md-6 col-sm-6 col-12 text-end ${Style.back}`}>
          <h2 className="mb-4">آکادمی بحر</h2>

          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <br /> و
            با استفاده از طراحان گرافیک است. چاپگرها و <br />
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است <br />و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف <br />
            بهبود ابزارهای کاربردی می باشد
          </span>

        </div>
        <div className="col-md-5 col-sm-6 col-12 img-fluid">
          <img src={img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
