import React from "react";
import image1 from "../../../assets/Course1.png";
import image2 from "../../../assets/Course2.png";
import image3 from "../../../assets/Course3.png";
import image4 from "../../../assets/Course4.png";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import LastCourseCard from "./LastCourseCard";
import { FaGripLines } from "react-icons/fa";
import {userInfo} from "../../../data/index.js"

const UserDashbord = () => {
  const LastCourseData = [
    {
      id: 1,
      image: image1,
      title: "آموزش دوره React",
      professor: "استاد محسن",
      price: "400,000 تومان",
    },
    {
      id: 2,
      image: image2,
      title: "آموزش دوره CSS",
      professor: "استاد بحر",
      price: "200,000 تومان",
    },
  ];



  return (
    <>
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center pb-1"
          style={{ borderBottom: "2px solid #94a3b8" }}
        >
          <h5>داشبورد</h5>
          <div>
            <IoIosNotifications size={22} className="ms-2" />
            <FaShoppingCart size={22} />
          </div>
        </div>
        <div
          className="d-flex flex-wrap justify-content-start align-items-center mt-4 rounded"
          style={{ border: "2px solid #6666ff", gap: "14px" }}
        >
          {userInfo.map((info) => (
            <div className="d-flex align-items-center p-2">
              <span> {info.title} </span>
              <span> : {info.value}</span>
            </div>
          ))}
        </div>
        <div className="col-md-12 mt-5">
          <div className="row g-5 px-3">
            <div className="col-md-6">
              <span>
                <FaGripLines style={{ color: "#6666ff" }} className="ms-2" />
              </span>
              <span>اخرین دوره ثبت شده</span>
              {LastCourseData.map((course) => (
                <LastCourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="col-md-6">
              <span>
                <FaGripLines style={{ color: "#6666ff" }} className="ms-2" />
              </span>
              <span> دوره های پیشنهادی </span>
              {LastCourseData.map((course) => (
                <LastCourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashbord;
