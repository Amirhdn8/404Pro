import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ title, image, desc }) => {
  return (
    <div className="card border-none border-0 shadow-lg p-3 mb-5 bg-white rounded">
      <img src={image} className="card-img-top" style={{ height: "130px" }} />
      <div className="card-body text-center">
        <h6 style={{ fontWeight: "700" }}>{title}</h6>
        <p className="card-text mt-3 d-block" style={{ fontSize: "12px" }}>
          {desc}
        </p>
        <button
          className="btn text-white"
          style={{ background: "#6666FF", fontSize: "13px", cursor: "pointer" }}
        >
          <Link className="text-white text-decoration-none" to="/newsDetail">بیشتر...</Link>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
