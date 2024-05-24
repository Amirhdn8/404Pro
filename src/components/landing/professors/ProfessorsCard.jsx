import React from "react";
import Style from "./professorsCard.module.css";

const ProfessorsCard = ({ title, image }) => {
  return (
    <>
      <div className="shadow  p-4 mb-3 bg-white" style={{borderRadius:"50%" , border:"3px dashed #6666FF"}}>
        <img src={image} style={{height:"100px" , borderRadius:"50%"}} />
        <div className="mt-4">
          <h6 style={{ fontWeight: "700" }}> {title} </h6>
        </div>
      </div>
    </>
  );
};

export default ProfessorsCard;
