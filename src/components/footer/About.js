import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ReactComponent as AboutUs } from "../../assets/footer/about.svg";
import { ReactComponent as Disrupt } from "../../assets/footer/disrupt.svg";

const About = () => {
  const language = useSelector((state) => state.language.language);

  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-2 mt-10 4xl:px-60 4xl:mt-20 justify-center">
        <div className="px-10 ">
          {language === "ar" ? (
            <h1
              className="font-black font-mono text-3xl text-white drop-shadow-2xl"
              style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
            >
              معلومات عن Disrupt
            </h1>
          ) : (
            <AboutUs className=" w-7/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 " />
          )}
        </div>
        <div className=" w-full flex flex-col xl:flex-row justify-around  items-center  gap-2 lg:gap-16 px-10">
          <div>
            <article className="w-full 4xl:w-11/12">
              {t("description.aboutDisrupt")}
            </article>
          </div>
          <div className="flex items-center justify-center w-8/12">
            <Disrupt />
          </div>
        </div>
      </div>
    </>
  );
}

export default About