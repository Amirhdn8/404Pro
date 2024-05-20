import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import img1 from "../../../assets/Course1.png";
import img2 from "../../../assets/Course2.png";
import img3 from "../../../assets/Course3.png";
import img4 from "../../../assets/Course4.png";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { topCourses } from "../../../services/api/courseApi";
const Course = () => {
  const Data = [
    {
      id: 1,
      image: img1,
      title: "React",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 2,
      image: img2,
      title: "html/css",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 3,
      image: img3,
      title: "javascript",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
    {
      id: 4,
      image: img4,
      title: "C#",
      price: "250,000",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      number: "24درس",
    },
  ];

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
        {/* {Data?.map((data) => {
          return (
            <div className="col-md-3 col-sm-6 col-8 " key={data.id}>
              <CourseCard
                image={data.image}
                title={data.title}
                price={data.price}
                desc={data.desc}
                number={data.number}
              />
            </div>
          );
        })} */}
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
