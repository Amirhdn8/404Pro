import React from "react";
import Style from "./footer.module.css";

const FooterNews = () => {
  return (
    <>
      <div className={`input-group mt-4 col-md-4 col-sm-12 ${Style.search}`}>
        <button
          className={`btn ${Style.button}`}
          type="button"
          id="button-addon1"
        >
          ثبت
        </button>
        <input
          type="text"
          className={`form-control ${Style.input}`}
          placeholder="دنبال چیزی هستید"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          style={{ border: "1px solid #6666FF" }}
        />
      </div>
    </>
  );
};

export default FooterNews;
