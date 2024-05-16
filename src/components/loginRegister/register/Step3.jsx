import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { signUpUser } from "../../../services/api/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const Step3 = ({ phoneNumber }) => {
  // const [isPending, setIsPeinding] = useState(false);
  const navigate = useNavigate();

  const validation = (values) =>
    yup.object().shape({
      gmail: yup
        .string()
        .email("درست وارد کنید!")
        .required("پر کردن این بخش ضروریست!"),
      password: yup
        .number()
        .min(8, "رمز عبور کوتاه است")
        .required("پر کردن این بخش ضروریست"),
    });

  const onSubmit = async (data) => {
    try {
      // setIsPeinding(true);
      const res = await signUpUser({
        password,
        gmail,
        phoneNumber,
      });
      if (res.status) {
        navigate("/auth/login");
        toast.success("موفقیت آمیز بود");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ gmail: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-8 mb-4 text-end">
              <label className="d-block mb-3">ایمیل</label>
              <Field
                name="gmail"
                className={`form-control ${Style.formInput}`}
                placeholder="وارد کنید..."
              />
              <ErrorMessage
                component={"p"}
                name="gmail"
                className="text-danger mt-2"
              />
            </div>
            <div className="col-md-8 mb-4 text-end">
              <label className="d-block mb-3">رمزعبور</label>
              <Field
                name="password"
                className={`form-control ${Style.formInput} `}
                placeholder="وارد کنید..."
              />
              <ErrorMessage
                component={"p"}
                name="password"
                className="text-danger mt-2"
              />
              <button
                className={`btn mb-4 mt-4 ms-3 ${Style.formBtn}`}
                type="submit"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Step3;
