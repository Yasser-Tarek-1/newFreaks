import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Hand from "./Hand";
import Paragraph from "./Paragraph";

import { ReactComponent as AboutFONHeader } from "../../assets/about/aboutFON.svg";
import Poster from "../../assets/about/poster.svg";
//mport Video from "../../assets/video/video.mp4";

const AboutFON=()=> {
  const language = useSelector((state) => state.language.language);

  return (
    <div
      className="h-auto lg:h-screen 4xl:h-auto flex flex-col mt-20  items-center md:gap-7"
      dir="ltr"
    >
      <div className="flex justify-center mb-10">
        {language === "ar" ? (
          <h1
            className="font-black font-mono text-2xl sm:text-3xl md:text-5xl  text-white drop-shadow-2xl"
            style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
          >
            معلومات عن الحدث
          </h1>
        ) : (
          <AboutFONHeader className="w-9/12 sm:w-7/12 md:w-5/12 lg:w-6/12 xl:w-6/12 " />
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-7">
        <motion.div
          dir="ltr"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 300 },
          }}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.2}
          className="w-11/12 md:w-6/12 self-start relative flex"
        >
          <Hand className=" z-20 " style={{ zIndex: 55 }} />
          <video
            playsInline
            loop
            style={{ zIndex: 0 }}
            id="FONVideo"
            dir="ltr"
            poster={Poster}
            className="rounded-2xl xs:rounded-5xl sm:rounded-3xl lg:rounded-5xl absolute w-[63%] right-6   sm:right-10 md:right-12 lg:right-10 xl:right-12 2xl:right-12 4xl:right-20 top-5    lg:top-4 xl:top-9 2xl:top-10 border-4 2xl:border-8 border-black "
          >
            <source src="https://media.freaksofnature.me/video/video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="md:w-6/12  px-10  md:self-start md:pt-10 4xl:pt-20 ">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

export default AboutFON