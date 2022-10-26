import React from "react";
import { useTranslation } from "react-i18next";
import PT from "../../assets/footer/pt.png";

const BuiltBy = () => {
  const { t } = useTranslation();
  return (
    <div dir="ltr" className="flex justify-center pb-[130px]  sm:py-10">
      <p className="text-sm flex flex-row gap-2 items-center">
        {t("description.developedBy")}
        <a
          href="https://ptit.com.sa/"
          target="_blank"
          className="underline flex flex-row-reverse gap-2 items-center "
          rel="noreferrer"
        >
          {t("description.perfectTouch")}
          <img src={PT} alt="" className="w-6" />
        </a>
      </p>
    </div>
  );
}
export default BuiltBy