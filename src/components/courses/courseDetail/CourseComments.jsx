import React, { useState } from "react";
import Style from "./courseDetail.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const CourseComments = () => {
  const [comment, setComment] = useState([
    {
      name: "امیرحسین",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      name: "حمید",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      name: "فاطمه",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ]);
  const onSubmit = (values) => {
    console.log("Form submited!!!", values);
    setComment([...comment, values]);
  };

  const validation = () =>
    yup.object().shape({
      name: yup
        .string()
        .required("پر کردن این بخش ضروریست")
        .min(3, "کوتاه است!"),
      desc: yup
        .string()
        .required("پر کردن این بخش ضروریست")
        .min(3, "کوتاه است!")
        .max(50 , "بیش از حد مجاز"),
    });

  return (
    <>
      <div className="row d-flex justify-content-center">
        {comment.map((data, index) => {
          return (
            <div
              className={`col-md-9 text-end mt-3 ${Style.comment}`}
              key={index}
            >
              <div className="name">
                <span>
                  <FaRegUserCircle className={`${Style.userIcon}`} size={27} />
                </span>
                <span className={`me-2 ${Style.courseDetail}`}>
                  {" "}
                  {data.name}{" "}
                </span>
              </div>
              <div className="coment mt-3 mb-2">
                <span style={{ fontSize: "13px" }}>{data.desc}</span>
              </div>
            </div>
          );
        })}

        <div className="col-md-9 add-comment my-5">
          <h5>ثبت نظر</h5>
          <Formik
            initialValues={{ name: "", desc: "" }}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validation}
          >
            <Form className="mt-4">
              <div className="mt-3">
                <label className={`mb-2 ${Style.formLabel}`}>
                  نام و نام خانوادگی
                </label>
                <Field
                  className={`form-control ${Style.formInput}`}
                  name="name"
                  placeholder="وارد کنید ..."
                />
                <ErrorMessage
                  component={"p"}
                  name="name"
                  className="text-danger mt-2"
                />
              </div>
              <div className="mt-3">
                <label className={`mb-2 ${Style.formLabel}`}>
                  {" "}
                  نظر خود را بنویسید
                </label>
                <Field
                  className={`form-control ${Style.formInput}`}
                  as="textarea"
                  rows="3"
                  name="desc"
                  placeholder="وارد کنید ..."
                />
                <ErrorMessage
                  component={"p"}
                  name="desc"
                  className="text-danger mt-2"
                />
              </div>
              <button className={`btn mt-3 ${Style.formBtn}`} type="submit">
                ثبت
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CourseComments;
