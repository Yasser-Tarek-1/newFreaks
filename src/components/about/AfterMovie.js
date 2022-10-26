import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Hand from "./Hand";

//import AllAftermovie from "../../assets/video/e2-video.mp4"
//import AllAftermovieImg from "../../assets/AllAftermovieImg.svg"
//import { ReactComponent as AboutFONHeader } from "../../assets/about/aboutFON.svg";

const AfterMovie = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div
      className="h-auto lg:h-screen 4xl:h-auto flex flex-col mt-20  items-center md:gap-7 w-[75%]"
      dir="ltr"
    >
      <div className="flex justify-center mb-10">
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-7">
        <motion.div
          dir="ltr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 300 },
          }}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.2}
          className="w-full relative flex"
        >
          <Hand className=" z-20 " style={{ zIndex: 55 }} />
          <video
            // poster={AllAftermovieImg}
            playsInline
            loop
            style={{ zIndex: 0 }}
            id="FONVideo"
            dir="ltr"
            className="rounded-2xl xs:rounded-5xl sm:rounded-3xl lg:rounded-5xl absolute w-[63%] right-6   sm:right-10 md:right-12 lg:right-10 xl:right-12 2xl:right-12 4xl:right-20 top-5    lg:top-4 xl:top-9 2xl:top-10 border-4 2xl:border-8 border-black "
          >
            <source src={'https://media.freaksofnature.me/video/e2-video.mp4'} type="video/mp4" className="w-full" />
          </video>
        </motion.div>
      </div>
    </div>
  );
}

export default AfterMovie