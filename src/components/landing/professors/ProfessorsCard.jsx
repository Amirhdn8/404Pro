import React from "react";
import Style from "./professorsCard.module.css";

const ProfessorsCard = ({ title, image }) => {
  return (
    <>
      <div className="card shadow border-0 p-3 mb-5 bg-white rounded">
        <img
          src={image}
          className={`card-img-top p-5 ${Style.cardImg}`}
          
        />
        <div className={`card-body ${Style.cardTxt}`}>
          <h6 style={{ fontWeight: "700" }}> {title} </h6>

        </div>
      </div>
    </>
  );
};

export default ProfessorsCard;
