import React from "react";
import Accordion from "react-tiny-accordion";
import { useTranslation } from "react-i18next";

import "./faq.css";

const FAQComponent =()=> {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const onClickAccordion = (index) => {
    if (currentIndex === index) {
      setCurrentIndex(-1);
      return;
    }

    setCurrentIndex(index);
  };
  return (
    <div className="faq-component">
      <div className="title">
        <h3 className="text--uppercase font--weight--700 basic--font--family">
          FAQ
        </h3>
      </div>
      <Accordion className="accordion" transitionDuration={100}>
        <div
          data-header={
            <div
              onClick={(_) => {
                onClickAccordion(0);
              }}
              className="header"
            >
              <span>{currentIndex === 0 ? "-" : "+"}</span>
              <strong>{t("faq.q1")}</strong>
            </div>
          }
        >
          <div className="content-faq">{t("faq.a1")}</div>
        </div>
        <div
          data-header={
            <div
              onClick={(_) => {
                onClickAccordion(1);
              }}
              className="header"
            >
              <span>{currentIndex === 1 ? "-" : "+"}</span>
              <strong> {t("faq.q2")}</strong>
            </div>
          }
        >
          <div className="content-faq">{t("faq.a2")}</div>
        </div>
        <div
          data-header={
            <div
              onClick={(_) => {
                onClickAccordion(2);
              }}
              className="header"
            >
              <span>{currentIndex === 2 ? "-" : "+"}</span>
              <strong> {t("faq.q3")} </strong>
            </div>
          }
        >
          <div className="content-faq">{t("faq.a3")}</div>
        </div>

        <div
          data-header={
            <div
              onClick={(_) => {
                onClickAccordion(3);
              }}
              className="header"
            >
              <span>{currentIndex === 3 ? "-" : "+"}</span>
              <strong> {t("faq.q4")} </strong>
            </div>
          }
        >
          <div className="content-faq">{t("faq.a4")}</div>
        </div>

        <div
          data-header={
            <div
              onClick={(_) => {
                onClickAccordion(4);
              }}
              className="header"
            >
              <span>{currentIndex === 4 ? "-" : "+"}</span>
              <strong> {t("faq.q5")} </strong>
            </div>
          }
        >
          <div className="content-faq">{t("faq.a5")}</div>
        </div>
      </Accordion>
    </div>
  );
}

export default FAQComponent