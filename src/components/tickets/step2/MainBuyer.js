import React, { useEffect, useState } from "react";
import { t } from "i18next";
import TextInput from "./TextInput";
import { ReactComponent as Male } from "../../../assets/tickets/input/male.svg";
import { ReactComponent as Female } from "../../../assets/tickets/input/female.svg";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Phone } from "../../../assets/tickets/input/phone.svg";

import {
  // setFullName,
  // setInvitedBy,
  // setGender,
  // setEmail,
  // setPhoneNumber,
  // setInstagramHandle,
  // setFavoriteDJ,
  // setSpecialConsiderations,
  setAll,
} from "../../../redux/slices/mainBuyerSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MainBuyer = () => {
  const mainBuyerRedux = useSelector((state) => state.mainBuyer);

  const dispatch = useDispatch();
  const [mainBuyer, setMainBuyer] = useState({
    full_name: "",
    // invited_by: "",
    gender: "male" /* male or female*/,
    email: "",
    phone: "",
    // instagram_handle: "",
    favorite_dj: "",
    special_considerations: "",
  });
  const handleFullName = (e) => {
    setMainBuyer({ ...mainBuyer, full_name: e.target.value });
    dispatch(setAll(mainBuyer));
  };
  // const handleInvitedBy = (e) => {
  //   setMainBuyer({ ...mainBuyer, invited_by: e.target.value });
  //   dispatch(setAll(mainBuyer));
  // };
  const handleGender = (e) => {
    setMainBuyer({ ...mainBuyer, gender: e.target.value });
    dispatch(setAll(mainBuyer));
  };
  const handleEmail = (e) => {
    setMainBuyer({ ...mainBuyer, email: e.target.value });
    dispatch(setAll(mainBuyer));
  };
  const handlePhoneNumber = (e) => {
    setMainBuyer({ ...mainBuyer, phone: e });
    dispatch(setAll(mainBuyer));
  };
  // const handleInstagramHandle = (e) => {
  //   setMainBuyer({ ...mainBuyer, instagram_handle: e.target.value });
  //   dispatch(setAll(mainBuyer));
  // };
  const handleFavoriteDJ = (e) => {
    setMainBuyer({ ...mainBuyer, favorite_dj: e.target.value });
    dispatch(setAll(mainBuyer));
  };
  const handleSpecialConsiderations = (e) => {
    setMainBuyer({ ...mainBuyer, special_considerations: e.target.value });
    dispatch(setAll(mainBuyer));
  };

  useEffect(() => {
    dispatch(setAll(mainBuyer));
  }, [mainBuyer]);
  return (
    <form className="w-full flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-10  ">
        <div className="lg:w-full">
          <TextInput
            type={"text"}
            placeHolder={t("step2.mainBuyer.name")}
            iconType={"name"}
            handlechange={handleFullName}
          />
        </div>
        {/* <div className="lg:w-6/12">
          <TextInput
            type={"text"}
            placeHolder={t("step2.mainBuyer.invitedBy")}
            iconType={"invitedBy"}
            handlechange={handleInvitedBy}
          />
        </div> */}
      </div>
      <h3>{t("step2.mainBuyer.gender")}</h3>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => handleGender(e)}
            />

            <label htmlFor="male" className="flex flex-row items-center gap-1">
              {t("step2.mainBuyer.male")} <Male className="w-3" />
            </label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => handleGender(e)}
            />
            <label
              htmlFor="female"
              className="flex flex-row items-center gap-1"
            >
              {t("step2.mainBuyer.female")}
              <Female className="w-3" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="lg:w-6/12">
          <TextInput
            type={"email"}
            placeHolder={t("step2.mainBuyer.email")}
            iconType={"email"}
            handlechange={handleEmail}
          />
        </div>
        <div className="lg:w-6/12">
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
              value={mainBuyer.phone}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              onChange={(phone) => handlePhoneNumber(phone)}
            />
            <Phone className="w-5 mx-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* <div className="lg:w-6/12">
          <TextInput
            type={"text"}
            placeHolder={t("step2.mainBuyer.instagram")}
            iconType={"instagram"}
            handlechange={handleInstagramHandle}
          />
        </div> */}
        {/* <div className="lg:w-full">
          <TextInput
            type={"text"}
            placeHolder={t("step2.mainBuyer.favoriteDJ")}
            iconType={"favoriteDJ"}
            handlechange={handleFavoriteDJ}
          />
        </div> */}
      </div>
      <div className="lg:w-full">
        <TextInput
          type={"text"}
          placeHolder={t("step2.mainBuyer.more")}
          iconType={"more"}
          handlechange={handleSpecialConsiderations}
        />
      </div>
    </form>
  );
}

export default MainBuyer