import React from "react";
import img1 from "../../../assets/Course1.png";
import img2 from "../../../assets/Course2.png";
import img3 from "../../../assets/Course3.png";
import img4 from "../../../assets/Course4.png";
import CourseCard from "../../landing/courses/CourseCard";
import { IoSearch } from "react-icons/io5";
import Style from "./courseMain.module.css";

const CourseMain = () => {
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
    {
      id: 9,
      image: img1,
      title: "React",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 10,
      image: img2,
      title: "html/css",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 11,
      image: img3,
      title: "javascript",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 12,
      image: img4,
      title: "C#",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
  ];
  return (
    <>
      <div className="container text-center">
        <h2 className="mt-5">همه دوره ها</h2>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-12 d-flex justify-content-center align-items-center mb-5">
            <div className="col-md-6 col-sm-12 col-8">
              <div className={`input-group mt-4 ${Style.search}`}>
                <button
                  className={`btn ${Style.button}`}
                  type="button"
                  id="button-addon1"
                >
                  <IoSearch className="text-white" />
                </button>
                <input
                  type="text"
                  className={`form-control ${Style.input}`}
                  placeholder="دنبال چیزی هستید"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>
          </div>
          {Data.map((data) => {
            return (
              <>
                <div className="col-md-4 col-sm-6 col-8" key={data.id}>
                  <CourseCard
                    image={data.image}
                    title={data.title}
                    price={data.price}
                    desc={data.desc}
                    number={data.number}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseMain;
