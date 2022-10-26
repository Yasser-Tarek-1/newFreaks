import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { reduxLanguage } from "../../redux/slices/languageSlice";
import { setTermsOpen } from "../../redux/slices/step4Slice";

import homeSvg from "../../assets/icons/home.svg";
import eventSvg from "../../assets/icons/event.svg";
import aboutSvg from "../../assets/icons/about.svg";
import partnerSvg from "../../assets/icons/partner.svg";
import sandwichIco from "../../assets/icons/sandwash-01.svg";
import closeIco from "../../assets/icons/close-01.svg";
import blogSvg from "../../assets/icons/blog.svg";
import appSvg from "../../assets/icons/app.svg";
import sponserSvg from "../../assets/icons/sponser.svg";
import reliveSvg from "../../assets/icons/relive.svg";

import "./side-bar.css";

const SideBarComponent = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => {
    return state.language.language;
  });
  const [bodyDir, setBodyDir] = useState(document.body.dir);
  const { i18n } = useTranslation();

  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const switchRTLAndLTR = () => {
    if (bodyDir === "rtl") {
      dispatch(reduxLanguage("en"));
      document.body.dir = "ltr";
      changeLanguage("en");
      setBodyDir("ltr");
    } else {
      //give the body a class of overflow-x-hidden
      dispatch(reduxLanguage("ar"));
      document.body.classList.add("overflow-x-hidden");
      changeLanguage("ar");
      document.body.dir = "rtl";
      setBodyDir("rtl");
    }
  };

  return (
    <div className="nav">
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        style={{
          right: bodyDir === "ltr" ? "41px" : "auto",
          left: bodyDir === "ltr" ? "auto" : "41px",
        }}
      >
        <div>
          <img src={sandwichIco} width="35px" />
        </div>
      </div>
      {bodyDir === "ltr" ? (
        <div
          className={
            openMenu
              ? "side-bar-component right-0  transition-all ease-out duration-500"
              : "side-bar-component right-[-100%] transition-all ease-out duration-500"
          }
        >
          {/* Close */}
          <div className="menu-toggle_close" onClick={toggleMenu}>
            <div>
              <img src={closeIco} width="35px" />
            </div>
          </div>
          <div className="sidebar_m">
            <ul>
              <Link to={"/"}>
                <li className="active">
                  <span className="nav-icon ">
                    <img src={homeSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الرئيسية" : "Home"}
                  </div>
                </li>
              </Link>

              <Link to={"/#events"}>
                <li>
                  <span className="nav-icon">
                    <img src={eventSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الإحداث" : "Events"}
                  </div>
                </li>
              </Link>

              <Link to={"/relive"}>
                <li>
                  <span className="nav-icon">
                    <img src={reliveSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الاسترجاع" : "Relive"}
                  </div>
                </li>
              </Link>

              <Link to={"/about"}>
                <li>
                  <span className="nav-icon">
                    <img src={aboutSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "عننا" : "About"}
                  </div>
                </li>
              </Link>

              <Link to={"/partner"}>
                <li>
                  <span className="nav-icon">
                    <img src={partnerSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "شريك" : "Partner"}
                  </div>
                </li>
              </Link>

              <Link to={"/blog"}>
                <li>
                  <span className="nav-icon">
                    <img src={blogSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "مدونة" : "Blog"}
                  </div>
                </li>
              </Link>

              <Link to={"/app"}>
                <li>
                  <span className="nav-icon">
                    <img src={appSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "التطبيق" : "App"}
                  </div>
                </li>
              </Link>

              {/* <Link to={"/sponsors"}>
                <li>
                  <span className="nav-icon">
                    <img src={sponserSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الرعاة" : "Sponsers"}
                  </div>
                </li>
              </Link> */}

              <li className="lang">
                <button
                  onClick={switchRTLAndLTR}
                  className="  bg-orange px-2 py-1 rounded  flex items-center justify-around gap-2 scale-75 sm:scale-100 "
                >
                  <span className="text-sm uppercase text-white">
                    {bodyDir === "ltr" ? "EN" : "AR"}
                  </span>
                  <div>
                    {bodyDir === "ltr" ? (
                      <img
                        src="https://img.icons8.com/doodle/48/000000/great-britain.png"
                        alt=""
                        className="w-6"
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                        alt=""
                        className="w-6"
                      />
                    )}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // ar
        <div
          className={
            openMenu
              ? "side-bar-component left-0 transition-all ease-out duration-500"
              : "side-bar-component left-[-100%] transition-all ease-out duration-500"
          }
        >
          {/* Close */}
          <div className="menu-toggle_close" onClick={toggleMenu}>
            <div>
              <img src={closeIco} width="35px" />
            </div>
          </div>
          <div className="sidebar_m">
            <ul>
              <Link to={"/"}>
                <li className="active">
                  <span className="nav-icon ">
                    <img src={homeSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الرئيسية" : "Home"}
                  </div>
                </li>
              </Link>

              <Link to={"/#events"}>
                <li>
                  <span className="nav-icon">
                    <img src={eventSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الإحداث" : "Events"}
                  </div>
                </li>
              </Link>

              <Link to={"/relive"}>
                <li>
                  <span className="nav-icon">
                    <img src={reliveSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الاسترجاع" : "Relive"}
                  </div>
                </li>
              </Link>

              <Link to={"/about"}>
                <li>
                  <span className="nav-icon">
                    <img src={aboutSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "عننا" : "About"}
                  </div>
                </li>
              </Link>

              <Link to={"/partner"}>
                <li>
                  <span className="nav-icon">
                    <img src={partnerSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "شريك" : "Partner"}
                  </div>
                </li>
              </Link>

              <Link to={"/blog"}>
                <li>
                  <span className="nav-icon">
                    <img src={blogSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "مدونة" : "Blog"}
                  </div>
                </li>
              </Link>

              <Link to={"/app"}>
                <li>
                  <span className="nav-icon">
                    <img src={appSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "التطبيق" : "App"}
                  </div>
                </li>
              </Link>

              {/* <Link to={"/sponsors"}>
                <li>
                  <span className="nav-icon">
                    <img src={sponserSvg} />
                  </span>
                  <div className="nav-title">
                    {language === "ar" ? "الرعاة" : "Sponsers"}
                  </div>
                </li>
              </Link> */}

              <li className="lang">
                <button
                  onClick={switchRTLAndLTR}
                  className="  bg-orange px-2 py-1 rounded  flex items-center justify-around gap-2 scale-75 sm:scale-100 "
                >
                  <span className="text-sm uppercase text-white">
                    {bodyDir === "ltr" ? "EN" : "AR"}
                  </span>
                  <div>
                    {bodyDir === "ltr" ? (
                      <img
                        src="https://img.icons8.com/doodle/48/000000/great-britain.png"
                        alt=""
                        className="w-6"
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                        alt=""
                        className="w-6"
                      />
                    )}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBarComponent;
