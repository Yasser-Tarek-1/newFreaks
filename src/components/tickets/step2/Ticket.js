import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import { ReactComponent as Male } from "../../../assets/tickets/input/male.svg";
import { ReactComponent as Female } from "../../../assets/tickets/input/female.svg";
import {
  setTicketAttendee,
  removeTicket,
  cancelTicket,
} from "../../../redux/slices/ticketSlice";

import { ReactComponent as Phone } from "../../../assets/tickets/input/phone.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Ticket = (props) => {
  const mainBuyer = useSelector((state) => state.mainBuyer);
  let { color, type, index, price, day, daysCount, ticket } = props;


  const reduxAttendee = useSelector(
    (state) => state.ticket.tickets[index].attendee
  );

  const { t } = useTranslation();
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const [attendee, setAttendee] = useState({
    full_name: "",
    invited_by: "",
    gender: "",
    email: "",
    // instagram_handle: "",
    phone: "",
  });
  const [sameAsMainBuyer, setSameAsMainBuyer] = useState(false);
  const handleAttendee = (changeItem, e) => {
    //debugger;
    if (changeItem === "full_name") {
      setAttendee({ ...attendee, full_name: e.target.value });
    }
    if (changeItem === "invited_by") {
      setAttendee({ ...attendee, invited_by: e.target.value });
    }
    if (changeItem === "gender") {
      setAttendee({ ...attendee, gender: e.target.value });
    }
    if (changeItem === "email") {
      setAttendee({ ...attendee, email: e.target.value });
    }
    // if (changeItem === "instagram_handle") {
    //   setAttendee({ ...attendee, instagram_handle: e.target.value });
    // }
    if (changeItem === "phone") {
      setAttendee({ ...attendee, phone: e });
    }
    dispatch(setTicketAttendee({ attendee, index }));
  };
  const SetAttendeeToMainBuyer = () => {
    //debugger;
    setSameAsMainBuyer(!sameAsMainBuyer);
    setAttendee({ ...attendee, ...mainBuyer });
  };

  useEffect(
    () => {
      dispatch(setTicketAttendee({ attendee, index }));
    },
    [attendee, sameAsMainBuyer]
  );
  useEffect(
    () => {
      if (ticket.attendee) {
        setAttendee(ticket.attendee);
      } else {
        setAttendee({
          full_name: "",
          invited_by: "",
          gender: "",
          email: "",
          // instagram_handle: "",
          phone: "",
        });
      }
    },
    [ticket.reduxID]
  );

  return (
    <div
      id={`ticket${index}`}
      className={`bigTicket bigTicket${color}${language} relative flex flex-col lg:flex-row flex-nowrap items-center  justify-center lg:justify-between  m-5 lg:py-9 py-5 mx-5 ${language ===
        "ar" || index === 0
        ? "lg:mx-2"
        : "lg:mx-0"}  `}
    >
      <button
        onClick={() => dispatch(cancelTicket(ticket))}
        className="flex flex-row gap-2 cursor-pointer absolute top-2 md:top-5 start-3 md:start-10"
      >
        {/* <span className="lowercase text-sm">{t("sidebar.remove")}</span>{" "} */}
        <p className=" text-white font-semibold text-xs  text-center   rounded-full bg-red-800 p-1 w-6 ">
          X
        </p>
      </button>
      <div className="flex flex-col items-center justify-center lg:w-4/12 pb-3 ">
        <div className="flex flex-col  items-center justify-center gap-x-1">
          <h1
            style={{
              fontFamily:
                language === "ar" ? "Cairo" : " PP , pure joy , poppins ",
            }}
            className="text-2xl lg:text-3xl xl:text-4xl px-2"
          >
            <p>
              {t("step2.personalization.ticket")} {index + 1}
            </p>
          </h1>
          <div className="flex  gap-2 flex-col sm:flex-row lg:flex-col">
            <p className="font-semibold">{type}</p>
            <p>{day} </p>
            <p>{daysCount} </p>
          </div>
        </div>
      </div>
      <form className="w-[65%] flex flex-col gap-5">
        <div className={`flex flex-row items-center gap-2 `}>
          <input
            type="checkbox"
            id={`autoFill${index}`}
            name="autoFill"
            value="autoFill"
            onChange={SetAttendeeToMainBuyer}
          />
          <label
            htmlFor={`autoFill${index}`}
            className="flex flex-row items-center gap-1"
          >
            {t("step2.personalization.autoFill")}
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-10  ">
          <div className="lg:w-[90%]">
            <TextInput
              type={"text"}
              placeHolder={t("step2.mainBuyer.name")}
              iconType={"name"}
              handlechange={(e) => handleAttendee("full_name", e)}
              value={attendee.full_name}
            />
          </div>
          {/* <div className="lg:w-5/12">
            <TextInput
              type={"text"}
              placeHolder={t("step2.mainBuyer.instagram")}
              iconType={"instagram"}
              handlechange={(e) => handleAttendee("instagram_handle", e)}
              value={attendee.instagram_handle}
            />
          </div> */}
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              id={`malePersonalize${index}`}
              name="genderPersonalize"
              value="male"
              checked={attendee.gender === "male"}
              onChange={(e) => handleAttendee("gender", e)}
            />

            <label
              htmlFor={`malePersonalize${index}`}
              className="flex flex-row items-center gap-1"
            >
              {t("step2.mainBuyer.male")} <Male className="w-3" />
            </label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              id={`femalePersonalize${index}`}
              name="genderPersonalize"
              value="female"
              checked={attendee.gender === "female"}
              onChange={(e) => handleAttendee("gender", e)}
            />
            <label
              htmlFor={`femalePersonalize${index}`}
              className="flex flex-row items-center gap-1"
            >
              {t("step2.mainBuyer.female")}
              <Female className="w-3" />
            </label>
          </div>
        </div>

        <div className="lg:w-[90%]">
          <TextInput
            type={"email"}
            placeHolder={t("step2.mainBuyer.email")}
            iconType={"email"}
            value={attendee.email}
            handlechange={(e) => handleAttendee("email", e)}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="lg:w-[90%]">
            <div className="w-full flex flex-row bg-white rounded-lg text-purple  items-center py-0.5">
              <PhoneInput
                country={"sa"}
                containerClass="rounded-xl outline-none border-0 phoneInput ps-2  "
                buttonClass=""
                inputClass="text-purple py-1 w-full  ms-10"
                inputStyle={{
                  border: "0",
                  outline: "none",
                  width: "90%",
                  borderRadius: ".75rem",
                }}
                buttonStyle={{
                  border: "0",
                  outline: "none",
                  backgroundColor: "#fff",
                  borderRadius: ".75rem",
                }}
                value={attendee.phone}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                onChange={(phone) => handleAttendee("phone", phone)}
              />
              <Phone className="w-5 mx-2" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Ticket