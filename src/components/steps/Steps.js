import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as HowTo } from "../../assets/steps/howTo.svg";

const Steps =()=> {
  const { t } = useTranslation();
  const language = useSelector((state) => state.language.language);
  const checkout_valid_for = useSelector(
    (state) => state.ticket.checkout_valid_for
  );

  const steps = [
    {
      id: 1,
      title: t("steps.step1"),
    },
    {
      id: 2,
      title: t("steps.step2"),
    },
    {
      id: 3,
      title: (
        <Trans i18nKey="steps.step3">
          Once approved, you will then receive a secure payment link valid for{" "}
          {{ checkout_valid_for }} hours.{" "}
        </Trans>
      ),
    },
    {
      id: 4,
      title: t("steps.step4"),
    },
  ];

  const renderSteps = () => {
    return steps.map((step) => {
      return (
        <motion.div
          key={step.id}
          className={`flex flex-col   ${language === "ar" && step.id === 1
            ? "p-24"
            : "p-20"} pt-12 text-center text-white items-center justify-center gap-4 min-w-min max-w-xs  step step${step.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-black text-3xl">{step.id}</h1>
          <p>{step.title}</p>
        </motion.div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-16 items-center mt-20 lg:-mt-32 4xl:-mt-40">
      <div className="flex justify-center">
        {language === "ar" ? (
          <h1
            className="font-black font-mono text-2xl sm:text-3xl md:text-5xl text-white drop-shadow-2xl"
            style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
          >
            كيفية الحصول علي التذاكر
          </h1>
        ) : (
          <HowTo className="w-9/12 sm:w-7/12 md:w-5/12 lg:w-6/12 xl:w-6/12 " />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {renderSteps()}
      </div>
    </div>
  );
}

export default Steps