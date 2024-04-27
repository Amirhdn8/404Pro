import React from "react";
import Timer from "./Timer";
import image from "../../assets/ostad1.png";
import Style from "./courseDetail.module.css";

const CourseLeftSide = () => {
  return (
    <>
      <div className="col-md-12 shadow p-3 mb-5 bg-white rounded text-center">
        <h6 className={`${Style.courseDetail}`}>فرصت باقی مانده تخفیف</h6>
        <div className="mt-3">
          <Timer duration={2 * 24 * 60 * 60 * 1000} />
        </div>
      </div>
      <div className=" col-md-12 shadow p-3 mb-5 bg-white rounded courseDetail text-center">
        <h5>اطلاعات دوره</h5>
        <div className={`text-center mt-3 ${Style.courseDetailTxt}`}>
          <span className={`ms-4 ${Style.courseDetail}`}>مدت زمان : </span>
          <span>3ساعت و 25 دقیقه</span>
        </div>
        <div className={`text-center mt-3 ${Style.courseDetailTxt}`}>
          <span className={`ms-4 ${Style.courseDetail}`}>هزینه آموزش :</span>
          <span> 500,000 تومان </span>
        </div>
        <div className={`text-center mt-3 ${Style.courseDetailTxt}`}>
          <span className={`ms-4 ${Style.courseDetail}`}> سطح دوره : </span>
          <span> پیشرفته </span>
        </div>
        <div className={`text-center mt-3 ${Style.courseDetailTxt}`}>
          <span className={`ms-4 ${Style.courseDetail}`}>
            {" "}
            تاریخ اخرین بروزرسانی :{" "}
          </span>
          <span> 1400/05/24 </span>
        </div>
        <div className={`text-center mt-3 ${Style.courseDetailTxt}`}>
          <span className={`ms-4 ${Style.courseDetail}`}>
            {" "}
            تعداد ویدیو ها :{" "}
          </span>
          <span> 26ویدیو </span>
        </div>
        <button className={`btn mt-3 ${Style.CourseDetailBtn}`}>
          خرید دوره
        </button>
      </div>

      <div className="col-md-12  shadow p-3 mb-5 bg-white rounded text-center">
        <h6 className={`${Style.courseDetail}`}> مدرس دوره </h6>
        <div className="text-center mt-4">
          <img src={image} className={`image-fluid ${Style.proffesorImg}`} />
          <span className="me-2"> استاد مهدی</span>
        </div>
      </div>
    </>
  );
};

export default CourseLeftSide;
