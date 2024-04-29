import React from "react";
import CourseDesc from "./CourseDesc";
import CourseVideo from "./CourseVideo";
import CourseLeftSide from "./CourseLeftSide";
import img1 from "../../../assets/Course1.png";
import img2 from "../../../assets/Course2.png";
import img3 from "../../../assets/Course3.png";
import img4 from "../../../assets/Course4.png";
import CourseResponsiveSlider from "./CourseResponsiveSlider";
import CourseSlider from "./CourseSlider";
import CourseComments from "./CourseComments";

const CourseDetail = () => {
  const Data = [
    {
      id: 1,
      image: img1,
      title: "React",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 2,
      image: img2,
      title: "html/css",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 3,
      image: img3,
      title: "javascript",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 4,
      image: img4,
      title: "C#",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 5,
      image: img1,
      title: "React",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 6,
      image: img2,
      title: "html/css",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 7,
      image: img3,
      title: "javascript",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 8,
      image: img4,
      title: "C#",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
  ];

  return (
    <div className="container">
      <div className="row d-flex justify-content-center  mt-5">
        <div className="col-md-8 col-sm-12 col-11 shadow-sm p-3 mb-5 bg-white rounded">
          <div className="col-md-12">
            <h5 className="title"> دوره پیشرفته هک و امنیت </h5>
            <CourseDesc />
            <CourseVideo />
          </div>
          <div className="col-md-12  mt-5">
            <h5 className="title"> نظرات </h5>
            <CourseComments />
          </div>
        </div>
        <div className="col-md-4 col-sm-10 col-10">
          <CourseLeftSide />
        </div>

        <div className="slider col-md-12 mt-5 text-center">
          <h5 className="title"> دوره های مرتبط </h5>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 d-none d-md-block mt-5">
              <CourseSlider Data={Data} />
            </div>
            <div className="col-sm-10 col-10 d-md-none d-sm-block">
              <CourseResponsiveSlider Data={Data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
