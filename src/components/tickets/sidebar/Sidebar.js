import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Summary from "./Summary";
import Total from "./Total";

const Sidebar =()=> {
  const { t } = useTranslation();
  const language = useSelector((state) => state.language.language);

  return (
    <div className="xl:w-4/12 shadow-xl  bg-blue min-h-full flex flex-col  xl:flex-col  items-center px-5 xl:px-0 py-2 rounded-b-xl xl:rounded-e-xl xl:rounded-bs-none gap-10 xl:gap-20">
      <h1
        className="text-white text-2xl lg:text-3xl 4xl:text-4xl pt-10"
        style={{
          fontFamily: "cairo",
          fontWeight:"700"
          ,
          fontSize:"2.5rem"
        }}
      >
        {t("sidebar.header")}
      </h1>
      <div className="flex justify-between flex-col md:flex-row xl:flex-col w-full flex-1 ">
        <div className="flex flex-col justify-center items-center gap-10 w-full px-3 text-black">
          <Summary />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-full px-3 text-black">
          <Total />
        </div>
      </div>
    </div>
  );
}


export default Sidebar