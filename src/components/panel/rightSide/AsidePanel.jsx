import React from "react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import Style from "./rightSide.module.css";
import MobileDropDownMenu from "./MobileDropDownMenu";

const AsidePanel = () => {
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
  const { pathname } = useLocation();
  return (
    <>
      <div className={`col-md-12 ${Style.rightSide}`}>
        <div className="p-3">
          <div className={`text-end ${Style.link}`}>
            <div className={`col-md-12  ${Style.link}`}>
              {links.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <NavLink
                    className={`${
                      isActive ? "sidebarPanel" : ""
                    } text-white text-decoration-none d-block p-2`}
                    to={link.route}
                  >
                    <span> {link.icon} </span>
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsidePanel;
