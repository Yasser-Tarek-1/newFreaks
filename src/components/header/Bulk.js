import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SideBarComponent from "../side-bar/side-bar";
import CounterDownComponent from "../counter-down/counter-down";
import Paragraph from "./Paragraph";
import FreaksOfNature from "./FreaksOfNature";

import palmSvg from "../../assets/palms-bg.svg";
import e3Svg from "../../assets/e3.svg";
import { ReactComponent as Fon } from "../../assets/header/fonlogo.png";
import { ReactComponent as ComingSoon } from "../../assets/header/comingsoon.svg";
import { ReactComponent as FreakFest } from "../../assets/header/freakfest.svg";

const Bulk = () => {
  const language = useSelector((state) => {
    return state.language.language;
  });
  return (
    <section
      initial="hidden"
      whileinview="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 300 },
      }}
      className=" flex items-center justify-center  motion-section  min-h-screen"
      style={{
        position: "relative",
        background: `url(${palmSvg})`,
        backgroundSize: "cover",
        height: "120vh",
        backgroundPosition: "50% 50%",
      }}
    >
      <SideBarComponent />
      {/* <div className="flex flex-col items-center gap-10 xl:gap-0 xl:mt-20 4xl:mt-0 4xl:scale-150">
        <div className="flex flex-col items-center gap-1">
          <FreaksOfNature className="w-56  sm:w-7/12 md:w-8/12 2xl:w-full h-auto" />
          <FreakFest className="w-52 sm:w-7/12  md:w-8/12 h-auto" />
        </div>
        <Paragraph />
      </div> */}
      {/* <div style={{width:'100%' , zIndex:'1' , height:'100%'}}>
        <img src={palmSvg} />
      </div> */}
      <div
        className="header-content"
        style={{ zIndex: "5", position: "absolute", top: "20%", left: "12%" }}
      >
        <div className="row" style={{ display: "flex" }}>
          <div className="col-md-6">
            <div className="paragraph">
              <h3 className="bigger">
                {language === "ar" ? "3 مراحل" : "3 STAGES"}{" "}
              </h3>
              <h3 className="outline-text">
                {language === "ar"
                  ? " 10 فنانين عالميين"
                  : "10 International Artists"}
              </h3>
              <h3>
                {language === "ar" ? "أكثر من 35 فنانًا" : "35+ Artists"}{" "}
              </h3>
              <CounterDownComponent />

              <div className="btns">
                <Link to="/e3">
                  <button className="btn btn-outline-light">
                    {language === "ar" ? "المزيد" : "More"}
                  </button>
                </Link>
                <Link to={"/e3#tickets"}>
                  <button className="btn btn-light">
                    {language === "ar" ? "اشتري تذاكر" : " Buy Tickets"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="logo">
              <span>
                <img src={e3Svg} width="400" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bulk