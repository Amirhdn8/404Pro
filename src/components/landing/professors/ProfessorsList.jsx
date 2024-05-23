import React from "react";
import ProfessorsCard from "./ProfessorsCard";

const ProfessorsList = ({ professorsData }) => {
  return (
    <>
      {professorsData.map((data) => {
        return (
          <>
            <div
              className="col-md-3 col-sm-6 col-8 mt-5 d-none d-md-block d-sm-block"
            >
              <ProfessorsCard
                image={data.pictureAddress}
                title={data.fullName}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProfessorsList;
