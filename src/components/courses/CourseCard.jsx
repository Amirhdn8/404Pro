import React from "react";
import Style from "./courseCard.module.css";
import { FaRegPlayCircle } from "react-icons/fa";
import StarRating from "../starRate/StarRate";
import { FaChevronLeft } from "react-icons/fa";

const CourseCard = ({ image, title, price, desc, number }) => {
  return (
    <>
      <div className="card border-0 shadow-lg mb-5 bg-body-tertiary rounded">
        <img src={image} className="card-img-top p-3" alt="..." />
        <div className="card-body">
          <div className="row justify-content-center align-items-center">
            <div className={`col-md-6 col-sm-6 col-6 text-center`}>
              <span
                className={`d-block text-white p-1 rounded-pill ${Style.title}`}
              >
                {title}
              </span>
            </div>

            <div className="col-md-6 col-sm-6 col-6 text-start">
              <span className={`${Style.price}`}>{price}</span>
            </div>
          </div>

          <div className={`text-end mt-3 ${Style.desc}`}>{desc}</div>

          <div className="mt-2">
            <span className={`d-block text-end ${Style.txt}`}>
              {" "}
              <FaRegPlayCircle className={`${Style.icon}`} /> {number}
            </span>
          </div>

          <hr className={`${Style.line}`} />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-8 col-8">
              <StarRating size={17} />
            </div>
            <div className="col-md-6 col-sm-4 col-4 text-white text-start">
              <span className={`${Style.btn}`}>
                {" "}
                <FaChevronLeft size={15} />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
