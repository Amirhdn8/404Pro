import React from "react";
import Style from "./professorsCard.module.css";

const ProfessorsCard = ({ title, image, desc }) => {
  return (
    <>
      <div className="card shadow border-0 p-3 mb-5 bg-white rounded">
        <img
          src={image}
          className={`card-img-top p-5 ${Style.cardImg}`}
          alt="..."
        />
        <div className={`card-body ${Style.cardTxt}`}>
          <h6 style={{ fontWeight: "700" }}> {title} </h6>
          <p className="card-text d-bock mt-3" style={{ fontSize: "13px" }}>
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfessorsCard;
