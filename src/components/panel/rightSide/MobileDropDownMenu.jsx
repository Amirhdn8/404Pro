import React from "react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { Link } from "react-router-dom";

const MobileDropDownMenu = () => {
  const links = [
    {
      route: "/dashboard",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "داشبورد",
    },
    {
      route: "/dashboard/editProfile",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "ویرایش  پروفایل",
    },
    {
      route: "/dashboard/myCourses",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "دوره های من",
    },
    {
      route: "/favoriteCourses",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "دوره های مورد علاقه",
    },
    {
      route: "/favoriteNews",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "اخبار مورد علاقه",
    },
    {
      route: "/reserveCourses",
      icon: <LuLayoutPanelLeft size={25} className="text-white ms-2" />,
      label: "دوره های رزرو",
    },
  ];

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        منو حساب کاربری
      </button>
      <ul className="dropdown-menu">
        {links.map((link) => (
          <Link className="text-decoration-none text-black" to={link.route}>
            <li className="dropdown-item">
              <span> {link.icon} </span>
              <span> {link.label} </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileDropDownMenu;
