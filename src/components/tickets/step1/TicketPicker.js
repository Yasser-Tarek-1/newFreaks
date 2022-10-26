import React from "react";
import { useTranslation } from "react-i18next";
import "./test.css"

const TicketPicker=(props)=> {
  const { t } = useTranslation();
  const {
    ticketType,
    title,
    day,
    price,
    handleChange,
    ticketCount,
    expired,
    qtyLeft,
    available
  } = props;

  return (
    <div className="flex flex-row flex-nowrap gap-10 items-center">
      <div
        className={`counter flex flex-col gap-1 items-center ${(expired ||
          qtyLeft === 0) &&
          "invisible"} `}
      >
        <button onClick={() => handleChange("increment")} className="p-3 -mb-3">
          <svg className=" w-4" viewBox="0 0 26 15" fill="none">
            <path d="M2 13L13 3L24 13" stroke="#FB5607" strokeWidth="4" />
          </svg>
        </button>
        <span
          onClick={() => handleChange("increment")}
          className="text-2xl cursor-pointer"
        >
          {ticketCount}x
        </span>
        <button onClick={() => handleChange("decrement")} className="p-3 -mt-3">
          <svg className=" w-4" viewBox="0 0 26 15" fill="none">
            <path d="M24 2L13 12L2 2" stroke="#FB5607" strokeWidth="4" />
          </svg>
        </button>
      </div>
      <div
        dir="ltr"
        className={ `test ${ticketType === "earlyBird"
          ? "orangeTicket "
          : "pinkTicket "} ${expired || qtyLeft === 0
          ? "soldout"
          : ""} ticket flex flex-row flex-nowrap justify-between text-xs py-7 4xl:py-10 px-4 rounded w-8/12 drop-shadow-xl `}
      >
        <div className="flex flex-col gap-0 ms-2 sm:ms-2 md:ms-6">
          <h3 className="tracking-wider text-sm font-semibold">{ title }</h3>
          <h4 className="text-white">{day}</h4>
        </div>
        <div className="flex flex-col items-center -mr-2  sm:me-2 md:me-10 lg:me-4 4xl:me-8">
          <h3 className="text-xs sm:text-md md:text-base">
            {expired ? (
              "Timed Out"
            ) : qtyLeft === 0 ? (
              "Sold Out"
            ) : (
              `${price} SAR`
            )}
          </h3>
          <h4 className="text-2xs font-extralight">
            {expired || qtyLeft === 0 ? "" : t("step1.ticketingFee")}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TicketPicker