import React from "react";
import image from "../../../assets/offers.png";
import OffersForm from "./OffersForm";

const Offers = () => {
  return (
    <>
      <div className="conntainer overflow-hidden text-center">
        <h2>پیشنهادات و انتقادات</h2>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-4 col-sm-5 col-8 mt-5">
            <OffersForm />
          </div>
          <div className="col-md-6 col-sm-6 col-12 d-md-block d-sm-block d-none">
            <img
              src={image}
              className="img-fluid"
              style={{ height: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
