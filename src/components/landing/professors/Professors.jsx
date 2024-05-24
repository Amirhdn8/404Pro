import React, { useEffect, useState } from "react";
import ProfessorsList from "./ProfessorsList";
import ProfessorsSlider from "./ProfessorsSlider";
import { getAllTeachers } from "../../../services/api/profossorsApi";

const Professors = () => {

  const [professorsData, setProfessorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchProfessorsData = async () => {
    try {
      setIsLoading(true);
      const res = await getAllTeachers();
      setProfessorsData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfessorsData();
  }, []);

  return (
    <>
      <div className="container text-center">
        <h2>اساتید </h2>
        <div className="row mt-3 d-flex justify-content-center align-items-center">
          <ProfessorsList professorsData={professorsData} />

          <div className="col-12">
            <ProfessorsSlider professorsData={professorsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Professors;
