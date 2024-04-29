import React from "react";


const CategoriesCard = ({ image, title }) => {
  return (
    <>
      <div className="text-center p-1">
        <img src={image} className="img-fluid" style={{ height: "100px" }} />
        <span className="d-block mt-2" style={{fontSize:"12px"}}> {title} </span>
      </div>
    </>
  );
};

export default CategoriesCard;
