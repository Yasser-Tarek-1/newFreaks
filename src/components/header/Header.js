import React, { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { reduxLanguage } from "../../redux/slices/languageSlice";
import { setTermsOpen } from "../../redux/slices/step4Slice";
import Sidebar from "../tickets/sidebar/Sidebar";
import Bulk from "./Bulk";

import { ReactComponent as Riyad } from "../../assets/header/riyad.svg";


const Header =()=> {
  const [bodyDir, setBodyDir] = useState(document.body.dir);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const step = useSelector((state) => state.ticket.step);
  const [openErrorBar, closeErrorBar] = useSnackbar(ErrorBarOptions);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const switchRTLAndLTR = () => {
    if (bodyDir === "rtl") {
      dispatch(reduxLanguage("en"));
      document.body.dir = "ltr";
      changeLanguage("en");
      setBodyDir("ltr");
    } else {
      //give the body a class of overflow-x-hidden
      dispatch(reduxLanguage("ar"));
      document.body.classList.add("overflow-x-hidden");
      changeLanguage("ar");
      document.body.dir = "rtl";
      setBodyDir("rtl");
    }
  };
  const getParameter = (parameterName) => {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
  };
  useEffect(() => {
    let stepMother = document.getElementById("stepMother");
    if (step === 4 && stepMother) {
      stepMother?.scrollIntoView({ behavior: "smooth" });
    }
    if (getParameter("p") === "terms") {
      dispatch(setTermsOpen());

      stepMother?.scrollIntoView({ behavior: "smooth" });
    }
    if (getParameter("msg") === "page_not_found") {
      openErrorBar("Error 404: Page not found");
    }
    if (getParameter("msg") === "invalid_payment_token") {
      openErrorBar("It looks like your payment time frame has expired. Please apply for new tickets.");
    }
  }, []);
  useEffect(() => {
    let stepMother = document.getElementById("stepMother");
    if (step > 1 && stepMother) {
      stepMother.scrollIntoView({ behavior: "smooth" });
    }
  }, [step]);
  useEffect(() => {
    let scrollableDiv = document.getElementById("scrollableDiv");
    if (scrollableDiv) {
      scrollableDiv.scrollTo(0, 0);
    }
  },[step]);
  
  return (
    <>
      <header className="flex justify-between flex-row-reverse">
        {/* <div className="">
         <Riyad className="w-14 md:w-20 lg:w-24 xl:w-28 h-auto" />
        </div> */}
        {/* TODO: add language flipper */}
        {/* <div className="sm:ps-1 sm:pt-1 md:ps-3 md:pt-2 lg:ps-5 lg:pt-2 xl:pt-3 ">
          <button
            onClick={switchRTLAndLTR}
            className="  bg-orange px-2 py-1 rounded  flex items-center justify-around gap-2 scale-75 sm:scale-100 "
          >
            <span className="text-sm uppercase text-white">
              {bodyDir === "ltr" ? "EN" : "AR"}
            </span>
            <div>
              {bodyDir === "ltr" ? (
                <img
                  src="https://img.icons8.com/doodle/48/000000/great-britain.png"
                  alt=""
                  className="w-6"
                />
              ) : (
                <img
                  src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                  alt=""
                  className="w-6"
                />
              )}
            </div>
          </button>
        </div> */}
      </header>
      <Bulk />
    </>
  );
}
const ErrorBarOptions = {
  position: "top-center",
  style: {
    backgroundColor: "#ff006e",
    color: "white",
    fontFamily: "poppins",
    border: "2px solid white",
    fontSize: "20px",
    textAlign: "left",
  },
  closeStyle: {
    color: "white",
    fontSize: "16px",
  },
};

export default Header