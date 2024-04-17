import React from "react";
import image from "../../assets/Course1.png";

const NewsCard = () => {
  return (
    <div className="card border-none border-0 shadow-lg p-3 mb-5 bg-white rounded">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h6 style={{ fontWeight: "700" }}>خبر</h6>
        <p className="card-text mt-3 d-block" style={{ fontSize: "12px" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
