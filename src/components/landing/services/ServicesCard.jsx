import React from "react";

const ServicesCard = ({ title, image, desc }) => {
  return (
    <>
      <div className="text-center mt-5 ">
        <img src={image} className="img-fluid" style={{ height: "80px"}} />

        <span className="d-block mt-3"> {title} </span>
        <span className="d-block mt-3" style={{fontSize:"12px"}}> {desc} </span>
      </div>
    </>
  );
};

export default ServicesCard;
