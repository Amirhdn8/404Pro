import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Style from "./register.module.css";
import image from "../../../assets/login.png";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    verifyCode: "",
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="container text-center">
        <h2 className="my-5">ایجاد حساب کاربری</h2>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-6 col-sm-10 col-10 shadow-lg p-3 mb-5 bg-white rounded">
            <div
              className={`${Style.numbers} d-flex justify-content-center my-5`}
            >
              <div
                className={`ms-5 ${currentStep >= 3 ? `${Style.active}` : ""}`}
              >
                3
              </div>
              <div
                className={`ms-5 ${currentStep >= 2 ? `${Style.active}` : ""}`}
              >
                2
              </div>
              <div className={`${currentStep >= 1 ? `${Style.active}` : ""}`}>
                1
              </div>
            </div>
            <div>
              {currentStep === 1 && (
                <Step1
                  setFormValue={(formValue) =>
                    setFormData({ ...formData, phoneNumber: formValue })
                  }
                  next={nextStep}
                  phoneNumberValue={formData.phoneNumber}
                />
              )}

              {currentStep === 2 && (
                <Step2
                  next={nextStep}
                  Back={prevStep}
                  phoneNumber={formData.phoneNumber}
                />
              )}

              {currentStep === 3 && (
                <Step3 phoneNumber={formData.phoneNumber} />
              )}
            </div>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <img
              src={image}
              className="img-fluid"
              style={{ height: "450px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
