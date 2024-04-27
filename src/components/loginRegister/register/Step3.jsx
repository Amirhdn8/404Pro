import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { WiDirectionDown } from "react-icons/wi";

const Step3 = ({ setFormValue, formValue }) => {
  const validation = (values) =>
    yup.object().shape({
      email: yup
        .string()
        .email("درست وارد کنید!")
        .required("پر کردن این بخش ضروریست!"),
      password: yup
        .number()
        .min(8, "رمز عبور کوتاه است")
        .required("پر کردن این بخش ضروریست"),
    });

  const onSubmit = (data) => {
    console.log(data);
    setFormValue(data);
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-8 mb-4 text-end">
              <label className="d-block mb-3">ایمیل</label>
              <Field
                name="email"
                className={`form-control ${Style.formInput} `}
                placeholder="وارد کنید..."
              />
              <ErrorMessage
                component={"p"}
                name="email"
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
