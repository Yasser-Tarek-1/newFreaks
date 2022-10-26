import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ApplyHeader } from "../../assets/tickets/apply.svg";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";

const Tickets=()=> {
  const language = useSelector((state) => {
    return state.language.language;
  });

  const step = useSelector((state) => state.ticket.step);
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };
  return (
    <div className="w-full mt-20 flex flex-col gap-10  items-center ">
      <div className="w-full flex justify-center">
        {language === "ar" ? (
          <h1
            className="font-black font-mono text-2xl sm:text-3xl md:text-5xl  text-white drop-shadow-2xl"
            style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
          >
            احجز تذكرتك من هنا
          </h1>
        ) : (
          <ApplyHeader className=" w-7/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 " />
        )}
      </div>
      <div className={`w-11/12 4xl:w-9/12 `}>{renderSteps()}</div>
    </div>
  );
}

export default Tickets
