import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Style from "./register.module.css";
import { sendVerifyCode } from "../../../services/api/authApi";
import toast from "react-hot-toast";
import { useState } from "react";

const Step2 = ({ setFormValue, next, Back, phoneNumber }) => {
  const [isPending, setIsPeinding] = useState(false);
  const validation = (values) =>
    yup.object().shape({
      verifyCode: yup
        .number()
        .required("پر کردن این بخش ضروریست!")
        .min(4, "کوتاه است"),
    });
  const onSubmit = async (data) => {
    try {
      setIsPeinding(true);
      const res = await sendVerifyCode({
        phoneNumber,
        verifyCode: data.verifyCode,
      });
      if (res.status) {
        next();
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
        initialValues={{ verifyCode: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <label className="d-block mb-3 text-end">کد فعال سازی</label>
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
                disabled={isPending}
              >
                {isPending ? "منتظر بمانید" : "مرحله بعد"}
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
