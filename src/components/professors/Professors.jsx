import React from "react";
import ProfessorsCard from "./ProfessorsCard";
import image1 from "../../assets/ostad1.png";
import image2 from "../../assets/ostad2.png";
import image3 from "../../assets/ostad3.png";
import ProfessorsList from "./ProfessorsList";
import ProfessorsSlider from "./ProfessorsSlider";

const Professors = () => {
  const Data = [
    {
      id: 1,
      image: image1,
      title: "استاد بحر",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
      id: 2,
      image: image2,
      title: "استاد مهدی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
      id: 3,
      image: image3,
      title: "استاد محسن",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
  ];
  return (
    <>
      <div className="container text-center my-5">
        <h2>اساتید برتر</h2>
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <ProfessorsList Data={Data} />

          <ProfessorsSlider Data={Data} />
        </div>
      </div>
    </>
  );
};

export default Professors;
