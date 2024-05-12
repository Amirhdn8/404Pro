import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";

const Step1 = ({ setFormValue, next, phoneNumberValue }) => {
  const initialValues = {
    phoneNumber: "" || phoneNumberValue,
  };
  const validation = yup.object().shape({
    phoneNumber: yup
      .number()
      .required("پر کردن این بخش ضروریست!")
      .min(7, "کوتاه است"),
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormValue({
      phoneNumber: data.phoneNumber,
    });
    next();
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
          <button className={`btn mt-4 mb-4 ${Style.formBtn}`} type="submit">
            دریافت کد تایید
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Step1;
