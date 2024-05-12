import React from "react";
import Style from "./myCourse.module.css";
import Table from "./Table";

const MyCourse = () => {
  const Data = [
    {
      id: 1,
      number: 1,
      course: "React Js",
      professor: "استاد بحر",
      condition: "در حال تدریس",
      date: "1400/6/7",
    },
    {
      id: 2,
      number: 2,
      course: "Javascript",
      professor: "استاد مهدی",
      condition: "تمام شده",
      date: "1402/3/2",
    },
    {
      id: 3,
      number: 3,
      course: "Css",
      condition: "در حال تدریس",
      professor: "استاد بحر",
      date: "1401/1/1",
    },
    {
      id: 4,
      number: 4,
      course: "Html",
      condition: "در حال تدریس",
      professor: "استاد محسن",
      date: "1400/4/6",
    },
  ];
  return (
    <>
      <div className={`container overflow-hidden ${Style.leftSide}`}>
        <div className="row d-flex justify-content-center text-center">
          <h6 className={`mt-3 ${Style.title}`}> دوره های من </h6>
          <div className="mt-4">
            <Table Data={Data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
