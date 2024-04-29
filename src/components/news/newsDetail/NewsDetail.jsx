import React from "react";
import NewsDesc from "./NewsDesc";
import NewsLeftSide from "./NewsLeftSide";
import NewsComments from "./NewsComments";
import image1 from "../../../assets/news1.jpg";
import image2 from "../../../assets/news2.jpg";
import image3 from "../../../assets/news3.jpg";
import image4 from "../../../assets/news4.jpg";
import image5 from "../../../assets/news5.jpg";
import image6 from "../../../assets/news6.jpg";
import NewsSlider from "./NewsSlider";
import NewsResponsiveSlider from "./NewsResponsiveSlider";

const NewsDetail = () => {
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
      <div className="container">
        <div className="row d-flex justify-content-center  mt-5">
          <div className="col-md-9 col-sm-10 col-10 shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-md-12">
              <h5 className="title"> اخبار سایت </h5>
              <NewsDesc />
            </div>
            <div className="col-md-12 mt-5">
              <h5 className="title"> نظرات </h5>
              <NewsComments />
            </div>
          </div>
          <div className="col-md-3 col-sm-10 col-10">
            <NewsLeftSide />
          </div>

          <div className="slider col-md-12 mt-5 text-center">
            <h5 className="title">اخبار مرتبط</h5>
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 d-none d-md-block mt-5">
                <NewsSlider Data={Data} />
              </div>
              <div className="col-sm-10 col-10 d-md-none d-sm-block">
                <NewsResponsiveSlider Data={Data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
