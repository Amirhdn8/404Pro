import React from "react";
import business2 from "../../assets/business2.png";
import business3 from "../../assets/business3.png";
import business4 from "../../assets/business4.png";
import business5 from "../../assets/business5.png";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const Data = [
    {
      id: 1,
      image: business2,
      title: "فرصت های شغلی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    },
    {
      id: 2,
      image: business3,
      title: "مدرک معتبر",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    },
    {
      id: 3,
      image: business4,
      title: "مشاوره",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    },
    {
      id: 4,
      image: business5,
      title: "امتحان",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    },
  ];
  return (
    <div className="container overflow-hidden text-center my-5">
      <h2>خدمات ما</h2>
      <span>لورم ایپسوم متن ساختگی با تولید سادگی</span>

      <div className="row d-flex justify-content-center align-items-center">
        {Data?.map((data) => {
          return (
            <div className="col-md-2 col-sm-6 col-6" key={data.id}>
              <ServicesCard
                title={data.title}
                desc={data.desc}
                image={data.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
