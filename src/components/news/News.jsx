import React from "react";
import Slider from "./Slider";
import ResponsiveSlider from "./ResponsiveSlider";
import image1 from "../../assets/news1.jpg";
import image2 from "../../assets/news2.jpg";
import image3 from "../../assets/news3.jpg";
import image4 from "../../assets/news4.jpg";
import image5 from "../../assets/news5.jpg";
import image6 from "../../assets/news6.jpg";

const News = () => {
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
  ];
  return (
    <>
      <div className="container text-center my-5">
        <h2>اخبار و مقالات</h2>
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-md-12 d-none  d-md-block">
            <Slider Data={Data} />
          </div>
          <div className=" col-sm-10 col-12 d-sm-block d-md-none">
            <ResponsiveSlider Data={Data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
