import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { WiDirectionDown } from "react-icons/wi";

const Step1 = ({ setFormValue, next, phoneNumber }) => {
  const validation = (values) =>
    yup.object().shape({
      phoneNumber: yup
        .number()
        .required("پر کردن این بخش ضروریست!")
        .min(7, "کوتاه است"),
    });

  const onSubmit = (data) => {
    console.log(data);
    setFormValue(data);
    next();
  };

  return (
    <>
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <span className="d-block mb-4">
                شماره تلفن خود را وارد کنید <WiDirectionDown size={45} />
              </span>
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
            {" "}
            ثبت{" "}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Step1;
