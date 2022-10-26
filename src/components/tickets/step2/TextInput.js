import React from "react";
import { ReactComponent as FavoriteDJ } from "../../../assets/tickets/input/favoriteDJ.svg";
import { ReactComponent as Name } from "../../../assets/tickets/input/name.svg";
import { ReactComponent as InvitedBy } from "../../../assets/tickets/input/invitedBy.svg";
import { ReactComponent as More } from "../../../assets/tickets/input/more.svg";
import { ReactComponent as Instagram } from "../../../assets/tickets/input/instagram.svg";
import { ReactComponent as Email } from "../../../assets/tickets/input/email.svg";
import { ReactComponent as Phone } from "../../../assets/tickets/input/phone.svg";

const TextInput = (props) => {
  const { type, placeHolder, iconType, handlechange, tailwindClasses, value } = props;
  const renderSVG = () => {
    // using if else
    if (iconType === "favoriteDJ") {
      return <FavoriteDJ className="w-5 mx-2" />;
    }
    if (iconType === "name") {
      return <Name className="w-5 mx-2" />;
    }
    if (iconType === "invitedBy") {
      return <InvitedBy className="w-5 mx-2" />;
    }
    if (iconType === "more") {
      return <More className="w-5 mx-2" />;
    }
    if (iconType === "instagram") {
      return <Instagram className="w-5 mx-2" />;
    }
    if (iconType === "email") {
      return <Email className="w-5 mx-2" />;
    }
    if (iconType === "phone") {
      return <Phone className="w-5 mx-2" />;
    }
  };

  return (
    <div className={tailwindClasses}>
      <div className="w-full flex flex-row bg-white rounded-xl text-purple  items-center">
        <input
          className={`w-full rounded-lg border-0  placeholder:text-purple `}
          type={type}
          onChange={handlechange}
          placeholder={placeHolder}
          value={value}
        />
        {renderSVG()}
      </div>
    </div>
  );
}

export default TextInput