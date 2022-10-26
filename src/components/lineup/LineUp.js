import React from "react";
import { motion } from "framer-motion";
import Artists from "./Artists";
import { useSelector } from "react-redux";

import { ReactComponent as LineUpHeader } from "../../assets/lineup/lineup.svg";

const LineUp =()=> {
  const language = useSelector((state) => state.language.language);

  return (
    <motion.div className="relative">
      <div className="separatorTop  "></div>
      <div className="lineup  pb-10 flex justify-center items-center relative">
        <div className="w-full flex flex-col justify-center items-center gap-7 xl:gap-16">
          {language === "ar" ? (
            <h1
              className="font-black font-mono text-5xl text-white drop-shadow-2xl"
              style={{ textShadow: "-2px 3px #000" , fontFamily: "Cairo"}}
            >
              الفنانين
            </h1>
          ) : (
            <LineUpHeader className=" w-5/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 " />
          )}
          <Artists />
        </div>
      </div>
      <div className="separatorBottom  "></div>
    </motion.div>
  );
}

export default LineUp