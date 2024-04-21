import React from "react";
import Style from "./newsMain.module.css";
import { IoSearch } from "react-icons/io5";
import image1 from "../../assets/news1.jpg";
import image2 from "../../assets/news2.jpg";
import image3 from "../../assets/news3.jpg";
import image4 from "../../assets/news4.jpg";
import image5 from "../../assets/news5.jpg";
import image6 from "../../assets/news6.jpg";
import NewsCard from "../news/NewsCard";

const NewsMain = () => {
  const Data = [
    {
      id: 1,
      image: image1,
      title: "خبر1",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 2,
      image: image2,
      title: "خبر2",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 3,
      image: image3,
      title: "خبر3",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 4,
      image: image4,
      title: "خبر4",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 5,
      image: image5,
      title: "خبر5",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 6,
      image: image6,
      title: "خبر6",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 7,
      image: image1,
      title: "خبر1",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 8,
      image: image2,
      title: "خبر2",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 9,
      image: image3,
      title: "خبر3",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 10,
      image: image4,
      title: "خبر4",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 11,
      image: image5,
      title: "خبر5",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 12,
      image: image6,
      title: "خبر6",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ];
  return (
    <div className="container text-center">
      <h2 className="mt-5">همه اخبار و مقالات</h2>
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
        {Data?.map((data) => {
          return (
            <>
              <div className="col-md-3 col-sm-6 col-8" key={data.id}>
                <NewsCard
                  image={data.image}
                  title={data.title}
                  desc={data.desc}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewsMain;
