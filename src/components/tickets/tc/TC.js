import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const TC = (props) => {
  const { absolute } = props;
  const { t } = useTranslation()

  // modal
  const isOpen = useSelector((state) => state.step4.isTermsOpen);
  const [showModal, setShowModal] = useState(isOpen);
  return (
    <div>
      <p
        className={
          absolute
            ? "text-black text-xs absolute bottom-1 text-center"
            : "text-black text-xs  mt-5"
        }
      >
        {t("step3.fyi")}
        <span className="px-1">
          <Modal isOpen={isOpen} showModal={showModal} setShowModal={setShowModal} />
        </span>
      </p>
    </div>
  );
}

export default TC