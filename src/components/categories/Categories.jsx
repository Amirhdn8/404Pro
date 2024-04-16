import React from "react";
import Categories1 from "../../assets/Categories1.png";
import Categories2 from "../../assets/Categories2.png";
import Categories3 from "../../assets/Categories3.png";
import Categories4 from "../../assets/Categories4.png";
import Categories5 from "../../assets/Categories5.png";
import CategoriesCard from "./CategoriesCard";
import Style from "./Categories.module.css"

const Categories = () => {
  const Data = [
    { id: 1, image: Categories1, title: "طراحی رابط کاربری" },
    { id: 2, image: Categories2, title: "داده کاوی" },
    { id: 3, image: Categories3, title: "هوش مصنوعی" },
    { id: 4, image: Categories4, title: "هک و امنیت" },
    { id: 5, image: Categories5, title: "وب" },
  ];
  return (
    <>
      <div className="container overflow-hidden text-center my-5">
        <h2>دسته بندی ها</h2>

        <div className="row d-flex justify-content-center align-items-center mt-5">
          {Data?.map((data) => {
            return (
              <div className={`col-md-2 col-sm-3 col-4 mx-2 shadow-lg  mb-5 bg-body-tertiary rounded ${Style.card}`}key={data.id}>
                <CategoriesCard image={data.image} title={data.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
