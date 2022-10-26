import React from "react";
import { useSelector } from "react-redux";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";

import { ReactComponent as ApplyHeader } from "../../assets/tickets/apply.svg";
import './main-tickets.css';

const MainTickets=()=> {
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
    <div className="main-tickets" id="tickets">
      <div className="content">
        {language === "ar" ? (
          <h3
           className="title"
            
          >
            احجز تذكرتك من هنا
          </h3>
        ) : (
          <h3 className="title">Tickets</h3>
        )}
      </div>
      <div className={`steps-container`}>{renderSteps()}</div>
    </div>
  );
}

export default MainTickets