import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./offersForm.module.css";
import Button from "../../common/button/Button";

const OffersForm = () => {
  const validation = (values) =>
    yup.object().shape({
      firstName: yup
        .string()
        .min(3, "کوتاه است")
        .max(30)
        .required("پر کردن این قسمت ضروریست!"),
      email: yup
        .string()
        .email("درست وارد کنید")
        .required("پر کردن این قسمت ضروریست!"),
      description: yup.string().required("پر کردن این قسمت ضروریست!"),
    });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          description: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-4">
            <Field
              className={`form-control ${Style.formInput}`}
              name="firstName"
              placeholder="نام و نام خانوادگی"
            />
            <ErrorMessage
              component={"p"}
              name="firstName"
              className="text-danger mt-2"
            />
          </div>

          <div className="mb-4">
            <Field
              className={`form-control ${Style.formInput}`}
              name="email"
              placeholder="ایمیل"
            />
            <ErrorMessage
              component={"p"}
              name="email"
              className="text-danger mt-2"
            />
          </div>

          <div className="mb-3">
            <textarea
              className={`form-control ${Style.formInput}`}
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="متن..."
              name="description"
            ></textarea>
            <ErrorMessage
              component={"p"}
              name="description"
              className="text-danger mt-2"
            />
          </div>

          <Button text="ثبت" />
        </Form>
      </Formik>
    </>
  );
};

export default OffersForm;
