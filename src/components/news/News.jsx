import React from "react";
import Slider from "./Slider";
import ResponsiveSlider from "./ResponsiveSlider";

const News = () => {
  return (
    <>
      <div className="container text-center my-5">
        <h2>مقالات</h2>
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-md-12 d-none  d-md-block">
            <Slider />
          </div>
          <div className=" col-sm-10 col-10 d-sm-block d-md-none">
            <ResponsiveSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
