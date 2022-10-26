import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Paragraph = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-center  text-gray-900">
          <Trans i18nKey="description.header">
            A boutique invite only festival
          </Trans>
        </h1>
        <p className="text-center lg:text-xl  w-11/12 lg:w-7/12 text-gray-900">
          <Trans i18nKey="description.body">
            Experience electronic music in ALL its subgenres like never before
            in Saudi with the freakiest local and international artists
          </Trans>
        </p>
        <p className="font-semibold md:text-2xl tracking-wider w-9/12 text-center">{t("description.perks")}</p>
      </div>
    </>
  );
}

export default Paragraph