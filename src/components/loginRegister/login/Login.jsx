import React from "react";
import image from "../../../assets/login.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-6 col-sm-10 col-10 d-none d-md-block text-end">
            <h2 className="mb-5">ورود به حساب کاربری</h2>
            <div className="col-md-10">
              <LoginForm />
            </div>
          </div>
          <div className="col-sm-10 col-10 d-md-none d-sm-block shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className="mb-5">ورود به حساب کاربری</h2>
            <div className="text-end">
              <LoginForm />
            </div>
          </div>
          <div className="col-md-6 text-center d-none d-md-block">
            <img
              src={image}
              className="img-fluid"
              style={{ height: "450px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
