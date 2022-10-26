import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  setCouponPercentage,
  setCoupon,
  reset,
} from "../../../redux/slices/ticketSlice";
import { useDispatch } from "react-redux";
import { validateCoupon } from "../../dataAccess/DataAccess";
import { useSnackbar } from "react-simple-snackbar";

const Summary=()=> {
  const [ coupon, setCouponState ] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.ticketsWithQTY);
  const addones = useSelector((state) => state.ticket.addonesWithQTY);

  const [ openSuccessBar, closeSuccessBar ] = useSnackbar(SuccessBarOptions);
  const [ openErrorBar, closeErrorBar ] = useSnackbar(ErrorBarOptions);

  const couponPercentage = useSelector(
    (state) => state.ticket.couponPercentage
  );
  const getCouponPercentage = () => {
    return validateCoupon(coupon)
      .then((res) => {
        //debugger;
        if (res.discount_percentage > 0 && res.valid ) {
          dispatch(setCouponPercentage(res.discount_percentage));
          dispatch(setCoupon(coupon));
        } else {
          dispatch(setCouponPercentage(0));
          dispatch(setCoupon(""));
        }
        setCouponState("");
         res.valid
          ? openSuccessBar("Coupon added successfully")
          : openErrorBar("invalid coupon");
      })
      .catch((err) => {
        console.log(err);
        openErrorBar(t("server error - try again later"));
      });
  };
  const handleCouponChange = (e) => {
    setCouponState(e.target.value);
    dispatch(setCoupon(e.target.value));
  };

  return (
    <div className={` w-full  xl:w-full self-start capitalize  `}>
      <div
        className={`w-full flex justify-end   gap-2 mb-2 ${!(
          tickets.length || addones.length
        ) && "hidden"}`}
      >
        <button
          onClick={() => dispatch(reset())}
          className="flex flex-row gap-2 cursor-pointer"
        >
          <span className="lowercase text-sm">{t("sidebar.clear")}</span>{" "}
          <p className=" text-white font-semibold text-xs  text-center   rounded-full bg-red-400 p-1 w-6 ">
            X
          </p>
        </button>
      </div>
      {tickets.map((ticket, index) => (
        <div key={index} className="flex flex-row justify-between gap-5">
          <div className="flex sm:gap-2 flex-col 1xs:flex-row">
            <p>
              (x{ticket.qty}) {ticket.name}
            </p>
            <p className="ps-2 sm:ps-0"> {ticket.daysCount}</p>
          </div>

          <p> {ticket.qty * ticket.price} SAR</p>
        </div>
      ))}
      {addones.map((addone, index) => (
        <div key={index} className="flex flex-row justify-between">
          <div className="flex gap-2">
            <p>
              {" "}
              (x{addone.qty}) {addone.name}
            </p>
          </div>
          <p> {addone.qty * addone.price} SAR</p>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-2 mt-10 justify-center">
        <input
          type="text"
          placeholder={t("sidebar.enterCouponCode")}
          className="text-center placeholder:text-black bg-yellow border border-black "
          value={coupon}
          onChange={handleCouponChange}
        />
        <button
          className="bg-orange px-10  capitalize text-white "
          onClick={getCouponPercentage}
        >
          {t("sidebar.apply")}
        </button>
      </div>
    </div>
  );
}
const SuccessBarOptions = {
  position: "bottom-right",
  style: {
    backgroundColor: "#069c49",
    color: "white",
    fontFamily: "poppins",
    fontSize: "20px",
    textAlign: "center",
  },
  closeStyle: {
    color: "white",
    fontSize: "16px",
  },
};
const ErrorBarOptions = {
  position: "bottom-right",
  style: {
    backgroundColor: "#ff006e",
    color: "white",
    fontFamily: "poppins",
    border: "2px solid white",
    fontSize: "20px",
    textAlign: "center",
  },
  closeStyle: {
    color: "white",
    fontSize: "16px",
  },
};

export default Summary