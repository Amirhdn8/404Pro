import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { topCourses } from "../../../services/api/courseApi";
const Course = () => {
  const [topCourse, setTopCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchTopCourses = async () => {
    try {
      setIsLoading(true);
      const res = await topCourses(4);
      setTopCourse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTopCourses();
  }, []);

  return (
    <div className="container overflow-hidden text-center my-5">
      <h2>دوره ها</h2>

      <div className="row justify-content-center align-items-center mt-5">
        {isLoading && <p>isLoading...!</p>}
        {topCourse.map((data) => (
          <>
            <div className="col-md-3 col-sm-6 col-8">
              <CourseCard data={data} />
            </div>
          </>
        ))}

        <div className="mt-4">
          <Link to="courseMain" className="text-decoration-none text-white">
            <Button text="همه دوره ها" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
