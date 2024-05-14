import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { getVerifyCode } from "../../../services/api/authApi";
import toast from "react-hot-toast";
import { useState } from "react";

const Step1 = ({ setFormValue, next, phoneNumberValue }) => {
  const [isPending, setIsPeinding] = useState(false);

  const initialValues = {
    phoneNumber: "" || phoneNumberValue,
  };
  const validation = yup.object().shape({
    phoneNumber: yup
      .number()
      .required("پر کردن این بخش ضروریست!")
      .min(7, "کوتاه است"),
  });

  const onSubmit = async (data) => {
    try {
      setIsPeinding(true);
      const res = await getVerifyCode(data.phoneNumber);
      if (res.status) {
        next();
        setFormValue(data.phoneNumber);
        toast.success(res.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsPeinding(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 text-end">
              <label className="d-block mb-3">
                شماره تلفن خود را وارد کنید
              </label>
              <Field
                className={`form-control ${Style.formInput} `}
                name="phoneNumber"
                placeholder="وارد کنید..."
              />
              <ErrorMessage
                component={"p"}
                name="phoneNumber"
                className="text-danger mt-2"
              />
            </div>
          </div>
          <button
            disabled={isPending}
            className={`btn mt-4 mb-4 ${Style.formBtn}`}
            type="submit"
          >
            {isPending ? "منتظر بمانید" : "دریافت کد تایید"}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Step1;
