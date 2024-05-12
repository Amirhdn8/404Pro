import React from "react";
import { userInfo } from "../../../data/index.js";
import Button from "../../common/button/Button.jsx";

const EditProfile = () => {
  return (
    <div className="container">
      <form
        className="d-flex flex-wrap align-items-center justify-content-center"
        style={{ gap: "15px" }}
      >
        {userInfo.map((info) => (
          <div
            className="d-flex flex-column"
            style={{ gap: "5px", width: "45%" }}
          >
            <label> {info.title} </label>
            <input
              className="form-control"
              type="text"
              defaultValue={info.value}
            />
          </div>
        ))}

        <div className="col-md-12 text-center mt-3">
          <Button text="ذخیره" type={"submit"} />
          <Button text="لغو" type={"button"} otherClasses={"me-2"} />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
