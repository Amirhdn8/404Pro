import React from "react";
import ProfessorsCard from "./ProfessorsCard";

const ProfessorsList = ({ Data }) => {
  return (
    <>
      {Data.map((data) => {
        return (
          <>
            <div
              className="col-md-3 col-sm-6 col-8 mt-5 d-none d-md-block d-sm-block"
              key={data.id}
            >
              <ProfessorsCard
                image={data.image}
                title={data.title}
                desc={data.desc}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProfessorsList;
