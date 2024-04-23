import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { WiDirectionDown } from "react-icons/wi";

const Step2 = ({ setFormValue, next, Back }) => {
  const validation = (values) =>
    yup.object().shape({
      verifyCode: yup
        .number()
        .required("پر کردن این بخش ضروریست!")
        .min(4, "کوتاه است"),
    });
  const onSubmit = (data) => {
    console.log(data);
    setFormValue(data);
    next();
  };
  return (
    <>
      <Formik
        initialValues={{ verifyCode: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <span className="d-block mb-4">
                کد فعال سازی <WiDirectionDown size={45} />{" "}
              </span>
              <Field
                name="verifyCode"
                className={`form-control ${Style.formInput} `}
                placeholder="وارد کنید..."
              />
              <ErrorMessage
                component={"p"}
                name="verifyCode"
                className="text-danger mt-2"
              />
              <button
                className={`btn mb-4 mt-4 ms-3 ${Style.formBtn}`}
                type="submit"
              >
                ثبت
              </button>
              <button
                className={`btn mb-4 mt-4 ${Style.formBtnBck}`}
                onClick={Back}
                type="button"
              >
                بازگشت
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Step2;
