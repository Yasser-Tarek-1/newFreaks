import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Paragraph =() =>{
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  let variants;

  return (
    <div
      className=" flex flex-col gap-5  justify-start  "
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <motion.h1
        initial="hidden"
        whileinview="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={variants}
        className="font-pop font-bold  text-xl sm:text-3xl md:text-3xl lg:text-4xl uppercase"
        style={{fontFamily: " cairo , pure joy , poppins "}}
      >
        {t("about.header")}
      </motion.h1>
      <motion.p
        initial="hidden"
        whileinview="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
        variants={variants}
        className="font-semi-bold text-lg "
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {t("about.body")}
      </motion.p>
      <motion.p
        initial="hidden"
        whileinview="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.3 }}
        variants={variants}
        className="font-semi-bold text-lg "
      >
        {t("about.getCreative")}
      </motion.p>
    </div>
  );
}

export default Paragraph