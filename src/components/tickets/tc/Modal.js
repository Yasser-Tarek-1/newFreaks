import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from 'react-icons/ai';

import { reduxLanguage } from "../../../redux/slices/languageSlice";


const Modal=({isOpen,showModal,setShowModal})=> {
  const { t } = useTranslation();
  const [bodyDir, setBodyDir] = useState(document.body.dir);
  const language = useSelector((state) => state.language.language);

  const dispatch = useDispatch();
  const { i18n } = useTranslation();

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
  const renderTerms = () => {
    // render 9 terms such as each term is a <li>{t(`tc.l${i + 1}`)}</li>
    let terms = [];
    for (let i = 0; i < 10; i++) {
      terms.push(<li key={i}>{t(`tc.l${i + 1}`)}</li>);
    }
    return terms;
  };
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  return (
    <>
      <button
        className="text-orange capitalize"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("step3.here")}
      </button>
      {showModal ? (
        <>
          <div
            id="TC"
            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-end"
          >
            <div className="z-[10010] relative w-[80%] overflow-auto h-[500px] sm:h-auto sm:w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-yellow outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 border-b border-solid  rounded-t items-center justify-between">
                  <h3 className="text-sm sm:text-3xl font-semibold">{t("tc.title")}</h3>
                  <button
                    onClick={switchRTLAndLTR}
                    className=" mx-6 bg-orange px-2 py-1 rounded  flex items-center justify-around gap-2 scale-75 sm:scale-100 "
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

                  <button
                    className="cursor-pointer text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   <AiFillCloseCircle className="w-8 h-8" style={{cursor:"pointer"}}/>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-black text-1.5xs leading-relaxed">
                    <ul className="list-disc text-start">{renderTerms()}</ul>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  Permit number 2209260808 
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t("tc.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default Modal