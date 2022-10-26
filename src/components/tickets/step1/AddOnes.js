import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { addAddone, removeAddone } from "../../../redux/slices/ticketSlice";
import AddOne from "./AddOne";

const AddOnes = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addonesMetaData = useSelector((state) => state.ticket.addones_metadata);
  const resetCounter = useSelector((state) => state.ticket.resetCounter);
  const language = useSelector((state) => state.language.language);
  const [parkingCount, setParkingCount] = useState(0);
  const [camping2, setCamping2] = useState(0);
  const [camping4, setCamping4] = useState(0);

  const addones = {
    camping2: {
      id: addonesMetaData[0].id,
      perks:
        language === "en"
          ? addonesMetaData[0].title_en
          : addonesMetaData[0].title_ar,
      price: addonesMetaData[0].price,
      name: "camping 2p",
      qty_left: addonesMetaData[0].qty_left,
    },
    camping4: {
      id: addonesMetaData[1].id,
      perks:
        language === "en"
          ? addonesMetaData[1].title_en
          : addonesMetaData[1].title_ar,
      price: addonesMetaData[1].price,
      name: "camping 4p",
      qty_left: addonesMetaData[1].qty_left,
    },
    parking: {
      id: addonesMetaData[2].id,
      perks:
        language === "en"
          ? addonesMetaData[2].title_en
          : addonesMetaData[2].title_ar,
      price: addonesMetaData[2].price,
      name: "parking",
      qty_left: addonesMetaData[2].qty_left,
    },
  };
  const handleChange = (type, value) => {
    // using if else
    if (type === "increment") {
      if (value === "parking") {
        if (parkingCount < addones.parking.qty_left) {
          setParkingCount(parkingCount + 1);
          dispatch(addAddone(addones.parking));
        }
      } else if (value === "camping2") {
        if (camping2 < addones.camping2.qty_left) {
          setCamping2(camping2 + 1);
          dispatch(addAddone(addones.camping2));
        }
      } else if (value === "camping4") {
        if (camping4 < addones.camping4.qty_left) {
          setCamping4(camping4 + 1);
          dispatch(addAddone(addones.camping4));
        }
      }
    } else if (type === "decrement") {
      if (value === "parking") {
        if (parkingCount > 0) {
          setParkingCount(parkingCount - 1);
          dispatch(removeAddone(addones.parking));
        }
      } else if (value === "camping2") {
        if (camping2 > 0) {
          setCamping2(camping2 - 1);
          dispatch(removeAddone(addones.camping2));
        }
      } else if (value === "camping4") {
        if (camping4 > 0) {
          setCamping4(camping4 - 1);
          dispatch(removeAddone(addones.camping4));
        }
      }
    }
  };
  useEffect(() => {
    if (resetCounter) {
      setParkingCount(0);
      setCamping2(0);
      setCamping4(0);
    }
  }, [resetCounter]);

  return (
    <div className="flex flex-col gap-5 pb-10 mt-10 ">
      <h2 className="text-black font-semibold text-xl ps-10">
        {t("step1.addOnes.title")}
      </h2>
      <div className="flex flex-col lg:flex-row  flex-wrap  justify-start ps-2 gap-y-5">
        <AddOne
          type="camping2"
          perks={addones.camping2.perks}
          price={addones.camping2.price}
          handleChange={handleChange}
          count={camping2}
          qtyLeft={addones.camping2.qty_left}
        />
        <AddOne
          type="camping4"
          perks={addones.camping4.perks}
          price={addones.camping4.price}
          handleChange={handleChange}
          count={camping4}
          qtyLeft={addones.camping4.qty_left}
        />
        <AddOne
          type="parking"
          perks={addones.parking.perks}
          price={addones.parking.price}
          handleChange={handleChange}
          count={parkingCount}
          qtyLeft={addones.parking.qty_left}
        />
      </div>
    </div>
  );
};

export default AddOnes