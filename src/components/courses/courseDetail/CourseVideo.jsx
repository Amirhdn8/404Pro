import React from "react";
import image2 from "../../assets/video.png";
import Style from "./courseDetail.module.css";
import { FaDownload } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const CourseVideo = () => {
  return (
    <>
      <div className="video mt-5">
        <h5 className="font-weight-bold">ویدیو ها</h5>
        <div className="image text-center mt-5">
          <img src={image2} className="img-fluid" style={{ height: "250px" }} />
        </div>
        <div className={`row justify-content-between mt-4 ${Style.videoTxt}`}>
          <div className="col-5 text-end mb-2">
            <span className={`px-1 ${Style.videoNumber}`}>1</span>
            <span className={`me-2 ${Style.videoDesc}`}>
              ویدیو اول : آشنایی با ری اکت
            </span>
          </div>
          <div className="col-4 text-start">
            <span className={`ms-3 ${Style.time}`}> 00:13:00 </span>
            <span className={`${Style.videoIcon}`}>
              <FaDownload />
            </span>
          </div>
        </div>

        <div className={`row justify-content-between mt-4 ${Style.videoTxt}`}>
          <div className="col-5 text-end mb-2">
            <span className={`px-1 ${Style.videoNumber}`}>2</span>
            <span className={`me-2 ${Style.videoDesc}`}>
              ویدیو دوم : دانلود و نصب نرم افزار ها
              <FaLock className={`${Style.videoIcon}`} size={15} />
            </span>
          </div>
          <div className="col-4 text-start">
            <span className={`ms-3 ${Style.time}`}> 00:13:00 </span>
            <span className={`${Style.videoIcon}`}>
              <FaDownload />
            </span>
          </div>
        </div>

        <div className={`row justify-content-between mt-4 ${Style.videoTxt}`}>
          <div className="col-5 text-end mb-2">
            <span className={`px-1 ${Style.videoNumber}`}>3</span>
            <span className={`me-2 ${Style.videoDesc}`}>
              ویدیو سوم : ایجاد پروژه
              <FaLock className={`${Style.videoIcon}`} size={15} />
            </span>
          </div>
          <div className="col-4 text-start">
            <span className={`ms-3 ${Style.time}`}> 00:13:00 </span>
            <span className={`${Style.videoIcon}`}>
              <FaDownload />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseVideo;
