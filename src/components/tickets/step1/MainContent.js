import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import EarlyBird from "./EarlyBird";
import Regular from "./Regular";
import AddOnes from "./AddOnes";

import "./here.css";

const MainContent = () => {
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 w-full h-full pt-10 px-5 ">
      {/* <h1
        className="text-xl sm:text-3xl md:text-4xl xl:text-5xl text-center tracking-wider"
        style={{
          fontFamily: language === "ar" ? "Cairo" : " PP , pure joy , poppins ",
        }}
      >
        {t("step1.title")}
      </h1> */}
      <div className="mb--40">
        <h2 className="font-semibold text-lg text-white text--uppercase font--2/5rem font--weight--700">
          {t("step1.earlyBird.title")}
        </h2>
        <h3
          style={{ color: "#333" }}
          className="mt--10  basic--font--family-light font--weight--700 font--1/2rem"
        >
          {t("step1.earlyBird.openUntil")}
        </h3>
      </div>
      <div className="flex here">
        <EarlyBird />
        <div className="here_text">
          <Regular />
        </div>
      </div>

      <div className="mb--40 mt--50">
        <h2 className="font-semibold text-lg text-white text--uppercase font--2rem font--weight--700">
          Regular Pricing
        </h2>
      </div>
      <div className="flex mb-20 here">
        <EarlyBird isRegular={true} />
        <div className="here_text">
          <Regular isRegular={true} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
