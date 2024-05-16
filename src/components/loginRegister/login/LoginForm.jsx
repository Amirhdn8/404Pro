import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/api/authApi";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const validation = (values) =>
    yup.object().shape({
      email: yup
        .string()
        .email("درست وارد کنید")
        .required("پر کردن این بخش ضروریست"),
      password: yup
        .number()
        .min(8, "رمز عبور کوتاه است")
        .required("پر کردن این بخش ضروریست"),
    });

  const onSubmit = async (data) => {
    try {
      const res = await loginUser({
        phoneOrGmail: data.email,
        password: data.password,
      });
      if (res.success) {
        navigate("/");
        toast.success("ورود موفقیت آمیز بود!");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="mb-4">
            <label className="mb-3">ایمیل</label>
            <Field
              className={`form-control ${Style.formInput}`}
              name="email"
              placeholder="وارد کنید..."
            />
            <ErrorMessage
              component={"p"}
              name="email"
              className="text-danger mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-3">رمز عبور</label>
            <Field
              className={`form-control ${Style.formInput}`}
              name="password"
              placeholder="وارد کنید..."
            />
            <ErrorMessage
              component={"p"}
              name="password"
              className="text-danger mt-2"
            />
            <Link to={"/auth/register"} className="d-block mt-3">
              آیا در سایت حساب کاربری ندارید؟
            </Link>

            <button className={`btn mt-4 ${Style.formBtn}`} type="submit">
              ورود
            </button>
            <button type="button" className={`btn mt-4 mx-2 ${Style.formBtn2}`}>
              <Link
                className="text-decoration-none text-white"
                to={"/auth/register"}
              >
                {" "}
                ثبت نام
              </Link>
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
