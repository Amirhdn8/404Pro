import React from "react";
import Style from "./courseCard.module.css";
import { FaRegPlayCircle } from "react-icons/fa";
import StarRating from "../../common/starRate/StarRate";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../../assets/Course3.png";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BiLayer } from "react-icons/bi";
import { TiGroupOutline } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const CourseCard = ({ data }) => {
  return (
    <>
      {/* <div className="card border-0 shadow-lg mb-5 bg-body-tertiary rounded">
        <img src={data.tumbImageAddress} className="card-img-top p-3" alt="..." style={{height:"150px"}} />
        <div className="card-body">
          <div className="row justify-content-center align-items-center">
            <div className={`col-md-7 col-sm-6 col-6 text-center`}>
              <span
                className={`d-block text-white p-1 rounded-pill ${Style.title}`}
              >
                {data.title}
              </span>
            </div>

            <div className="col-md-5 col-sm-6 col-6 text-start">
              <span className={`${Style.price}`}>{data.cost}</span>
            </div>
          </div>

          <div className={`text-end mt-3 ${Style.desc}`}>{data.describe}</div>

          <div className="mt-2">
            <span className={`d-block text-end ${Style.txt}`}>
              {" "}
              <FaRegPlayCircle className={`${Style.icon}`} /> 
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
                <Link
                  className="text-decoration-none text-white"
                  to="/courseDetail"
                >
                  <FaChevronLeft size={15} />{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div class="card shadow-lg p-2 mb-5 bg-white rounded">
          <div className="p-2">
            <img src={image} class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <div className="text-end">
              <h6 style={{color:"#6666FF" , fontWeight:"800"}}>دوره فرانت اند</h6>
            </div>

            <div
              className="d-flex justify-content-around"
              style={{ gap: "5px" }}
            >
              <div className="text-end">
                <span className="ms-1">
                  <BiLayer size={13} />
                </span>
                <span style={{ fontSize: "10px" }}>پیشرفته</span>
              </div>
              <div>
                <span className="ms-1">
                  <CiClock2 size={13} />
                </span>
                <span style={{ fontSize: "10px" }}>درحال بارگذاری</span>
              </div>
              <div>
                <span className="ms-1">
                  <SlCalender size={12} />
                </span>
                <span style={{ fontSize: "10px" }}>1401/3/5</span>
              </div>
            </div>

            <div
              className="d-flex justify-content-around mt-3 align-items-center"
              style={{ gap: "5px" }}
            >
              <div>
                <span className="ms-1">
                  <TiGroupOutline size={15} />
                </span>
                <span style={{ fontSize: "11px" }}>مهدی اصغری</span>
              </div>
              <div
                style={{ background: "#6666FF", borderRadius: "5px" }}
                className="p-1"
              >
                <span>
                  <BiLike className="text-white" size={20} />
                </span>
              </div>
              <div
                style={{ background: "#6666FF", borderRadius: "5px" }}
                className="p-1"
              >
                <span>
                  <BiDislike className="text-white" size={20} />
                </span>
              </div>
            </div>

            <hr style={{ border: "2px solid gray" }} />

            <div className="d-flex justify-content-between mt-3">
              <div>
                <StarRating size={17} />
              </div>
              <div>
                <span style={{fontSize:"13px"}}>55 هزار تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
