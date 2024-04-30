import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Style from "./footer.module.css";

const FooterIcons = () => {
  return (
    <>
      <div className={`${Style.icons}`}>
        <span>
          <FaWhatsapp />
        </span>
        <span>
          <GrInstagram />
        </span>
        <span>
          <FaTelegramPlane />
        </span>
        <span>
          <FaGit />
        </span>
        <span>
          <SiGmail />
        </span>
      </div>
    </>
  );
};

export default FooterIcons;
