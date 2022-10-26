import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import MainBuyer from "./MainBuyer";
import Scrollable from "./Scrollable";

const MainContent = () => {
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-10 w-full h-full pt-10 px-5 ">
      <h1
        className="text-xl sm:text-3xl md:text-4xl xl:text-5xl text-start ms-20 tracking-wide"
        style={{ fontFamily: language === "ar" ? "Cairo" : " PP , pure joy , poppins " }}
      >
        {t("step2.title")}
      </h1>
      <div className="flex flex-col lg:flex-row   ">
        <div className="w-20   relative">
          <h2
            className={`whitespace-nowrap tracking-wider text-4xl lg:-rotate-90  ${language === "ar" ? "lg:mt-5" : "lg:mt-36"
              }`}
            style={{
              fontFamily: language === "ar" ? "Cairo" : " PP , pure joy , poppins ",
            }}
          >
            {t("step2.mainBuyer.title")}
          </h2>
        </div>
        <MainBuyer />
      </div>
      <div className="flex flex-col lg:flex-row  mb-20 ">
        <div className="w-20   relative">
          <h2
            className={`xs:whitespace-nowrap tracking-wider text-xl md:text-4xl lg:-rotate-90 mb-4  ${language === "ar" ? "lg:mt-10" : "lg:mt-[25rem]"
              }`}
            style={{
              fontFamily: language === "ar" ? "Cairo" : " PP , pure joy , poppins ",
            }}
          >
            {t("step2.personalization.title")}
          </h2>
        </div>
        <Scrollable />
      </div>
    </div>
  );
}

export default MainContent