import React, { useState } from "react";

import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ReactComponent as ContactUsHeader } from "../../assets/footer/contact.svg";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.language.language);

  const [openSendingBar, closeSendingBar] = useSnackbar(SendingBarOptions);
  const [openSuccessBar, closeSuccessBar] = useSnackbar(SuccessBarOptions);
  const [openErrorBar, closeErrorBar] = useSnackbar(ErrorBarOptions);

  const tailwindFormStyle =
    "w-6/12  px-3 bg-transparent border-0 border-b border-gray-200 text-gray-200 placeholder-gray-200 focus:outline-none";

  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleName = (e) => {
    setMessage({ ...message, name: e.target.value });
  };
  const handleEmail = (e) => {
    setMessage({ ...message, email: e.target.value });
  };
  const handlePhoneNumber = (e) => {
    setMessage({ ...message, phone: e.target.value });
  };
  const handleMessage = (e) => {
    setMessage({ ...message, message: e.target.value });
  };
  const sendMessage = async () => {
    const headers = {
      Authorization: "91120531a193b07bdade01d75c129b8d",
    };
    try {
      const res = await axios.post(
        "https://ems.shamilapp.com/home/send_contact_us_email",
        message,
        { headers }
      );
      if (res.data === 1) {
        closeSendingBar();
        setTimeout(() => {
          openSuccessBar("message sent successfully", 9000);
        }, 1000);
      } else {
        closeSendingBar();
        setTimeout(() => {
          openErrorBar("Something went wrong. Try again");
        }, 1000);
      }
    } catch (error) {
      closeSendingBar();
      setTimeout(() => {
        openErrorBar("Something went wrong. Try again");
      }, 1000);
    }
  };

  const clearForm = () => {
    setMessage({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const checkIfMessageIsEmpty = () => {
    if (
      message.name === "" ||
      message.email === "" ||
      message.phone === "" ||
      message.message === ""
    ) {
      openErrorBar("message is empty ❌");
      return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    openSendingBar("sending message... ⏳");
    e.preventDefault();
    checkIfMessageIsEmpty();
    clearForm();
    await sendMessage();
    closeSendingBar();
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-evenly items-center h-fit md:h-[90vh] mb-20">
      <div className=" w-full md:w-6/12 h-full flex items-center justify-center md:justify-end">
        <div className="w-11/12 h-fit mt-32  4xl:w-9/12 flex flex-col items-center gap-10">
          {language === "ar" ? (
            <h1
              className="font-black font-mono text-4xl text-white drop-shadow-2xl"
              style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
            >
              العنوان
            </h1>
          ) : (
            <h1
              className="text-white text-4.5xl md:text-4xl lg:text-5.5xl 4xl:text-7xl"
              style={{
                fontFamily: " PP , pure joy , poppins ",
                textShadow: "3px 7px #000",
              }}
            >
              Venue Location
            </h1>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228987.51186150595!2d46.315573934878664!3d24.760588422840797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2edb05af70b029%3A0xd15dbd5a110439b2!2sMountain%20View%20Resort!5e0!3m2!1sen!2ssa!4v1650333333993!5m2!1sen!2ssa"
            title=" map"
            width="100%"
            height="450"
            className=" rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="  w-full md:w-6/12  flex items-center justify-center pt-24 pb-10 flex-col gap-20">
        {language === "ar" ? (
          <h1
            className="font-black font-mono text-4xl text-white drop-shadow-2xl"
            style={{ textShadow: "-2px 3px #000", fontFamily: "Cairo" }}
          >
            تواصل معنا
          </h1>
        ) : (
          <ContactUsHeader className="w-5/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-5/12" />
        )}
        <form
          className="  w-full flex flex-col gap-6  items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            required
            placeholder={t("description.name")}
            value={message.name}
            onChange={(e) => handleName(e)}
            className={tailwindFormStyle}
          />

          <input
            type="email"
            required
            placeholder={t("description.email")}
            value={message.email}
            onChange={(e) => handleEmail(e)}
            className={tailwindFormStyle}
          />

          <input
            type="tel"
            placeholder={t("description.phone")}
            value={message.phone}
            onChange={(e) => handlePhoneNumber(e)}
            className={tailwindFormStyle}
          />

          <input
            type="text"
            required
            placeholder={t("description.message")}
            value={message.message}
            onChange={(e) => handleMessage(e)}
            className={tailwindFormStyle}
          />
          <button
            type="submit"
            className=" relative bg-orange hover:bg-red-600 rounded px-10 sm:px-14 py-2 flex items-center   text-white text-sm font-light tracking-wider mt-10 transition"
          >
            <span>{t("description.submit")}</span>{" "}
            <span className="text-xl font-pop absolute end-2"> {`>`} </span>
          </button>
        </form>
      </div>
    </div>
  );
};
const SendingBarOptions = {
  position: "bottom-right",
  style: {
    backgroundColor: "#8338ec",
    color: "lightblue",
    fontFamily: "poppins",
    fontSize: "20px",
    textAlign: "center",
  },
  closeStyle: {
    color: "#fb5607",
    fontSize: "16px",
  },
};
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

export default Contact;
