import logo from "../../assets/logo.svg";
import { useEffect } from "react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import Fixed from "../Fixed/Fixed";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  });

  // ******************************----------------**********************************

  const location = useLocation();
  console.log("location: ", location);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  console.log("isActiveLink ", isActiveLink);

  return (
    <>
      <div className="head">
        <div className="nav">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} className="logo" alt="" />
            </NavLink>
          </div>

          <div className="navList">
            <NavLink
              to="/forabits"
              className={isActiveLink("/forabits") ? "active-link" : ""}
            >
              Аbитуриентларга
            </NavLink>
            <NavLink
              to="/universts"
              className={isActiveLink("/universts") ? "active-link" : ""}
            >
              Университетлар
            </NavLink>
            <NavLink
              to="/feedbacks"
              className={isActiveLink("/feedbacks") ? "active-link" : ""}
            >
              Шарҳлар
            </NavLink>

            <NavLink
              to="/news"
              className={isActiveLink("/news") ? "active-link" : ""}
            >
              Янгиликлар
            </NavLink>
            <NavLink
              to="/about"
              className={isActiveLink("/about") ? "active-link" : ""}
            >
              Биз ҳақимизда
            </NavLink>

            <NavLink
              to="/stocks"
              className={isActiveLink("/stocks") ? "active-link" : ""}
            >
              Акциялар
            </NavLink>
            <NavLink
              to="/contacts"
              className={isActiveLink("/contacts") ? "active-link" : ""}
            >
              Филиаллар
            </NavLink>
          </div>
          <div className="navLang ">
            <select
              class="form-select d-flex"
              style={{ width: "70px" }}
              onChange={onChangeLang}
            >
              <option value="uz" className="lang">
                Uzb
              </option>
              <option value="en" className="lang">
                Eng
              </option>
            </select>
            <div className="tel">
              <a href="tel:+998555031010">+998 55 503 10 10</a>
            </div>
          </div>
        </div>
      </div>
      <Fixed />
    </>
  );
}

export default Header;
