import React from "react";
import Style from "./dashbord.module.css";

const LastCourseCard = ({ course }) => {
  return (
    <div className="row shadow p-2 mt-2 mb-2 bg-white rounded ">
      <div className="col-md-4 col-sm-4 col-4 text-end">
        <img
          src={course.image}
          className="img-fluid"
          style={{ height: "70px" }}
        />
      </div>
      <div className="col-md-8 col-sm-8 col-8 text-end">
        <h6 className={`${Style.cardTitle}`}>{course.title}</h6>
        <div className="row mt-4">
          <div className="col-md-6 col-sm-6 col-6 text-end">
            <span className={`${Style.cardProffesor}`}>{course.professor}</span>
          </div>
          <div className="col-md-6 col-sm-6 col-6 text-start">
            <span className={`${Style.cardPrice}`}>{course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCourseCard;
