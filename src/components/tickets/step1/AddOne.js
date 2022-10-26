import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Parking } from "../../../assets/tickets/parking.svg";
import { ReactComponent as Camping2 } from "../../../assets/tickets/camping2.svg";
import { ReactComponent as Camping4 } from "../../../assets/tickets/camping4.svg";

const AddOne=(props)=> {
  const { t } = useTranslation();
  const { type, perks, price, handleChange, count, qtyLeft } = props;
  const soldout = qtyLeft == 0;
  const renderTypeSVG = () => {
    if (type === "parking") {
      return <Parking className="w-2/12 1xs:w-12" />;
    } else if (type === "camping2") {
      return <Camping2 className="w-5/12 1xs:w-16 4xl:w-12 " />;
    } else if (type === "camping4") {
      return <Camping4 className="w-5/12  1xs:w-16 4xl:w-12" />;
    }
  };
  return (
    <div className="flex flex-row flex-nowrap gap-5 sm:gap-10 items-center lg:w-6/12">
      <div
        className={`counter flex flex-col gap-1 items-center ${soldout &&
          "invisible"} `}
      >
        <button onClick={() => handleChange("increment", type)}>
          <svg className=" w-4" viewBox="0 0 26 15" fill="none">
            <path d="M2 13L13 3L24 13" stroke="#FB5607" strokeWidth="4" />
          </svg>
        </button>
        <span className="text-2xl">{count}x</span>
        <button onClick={() => handleChange("decrement", type)}>
          <svg className=" w-4" viewBox="0 0 26 15" fill="none">
            <path d="M24 2L13 12L2 2" stroke="#FB5607" strokeWidth="4" />
          </svg>
        </button>
      </div>
      <div className="flex flex-row  items-center">
        {renderTypeSVG()}
        <div className="flex flex-col gap-1 items-start ps-3 text-black ">
          {type === "parking" ? (
            <p className=" font-semibold ">{perks}</p>
          ) : (
            <p className="text-1.5xs w-full sm:w-10/12">{perks}</p>
          )}
          {soldout ? (
            <p className=" font-bold text-lg"> -SOLD OUT- </p>
          ) : (
            <p className="">{price} SAR</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddOne