import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import TicketPicker from "./TicketPicker";
import { addTicket, removeTicket } from "../../../redux/slices/ticketSlice";

const Regular = ({ isRegular }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const ticketsMetadata = useSelector(
    (state) => state.ticket.regular_tickets_metadata
  );
  const language = useSelector((state) => state.language.language);
  const resetCounter = useSelector((state) => state.ticket.resetCounter);
  const [ticket1Count, setTicket1Count] = useState(0);
  const [ticket2Count, setTicket2Count] = useState(0);
  const [ticket3Count, setTicket3Count] = useState(0);
  let ticket1 = {
    id: ticketsMetadata[isRegular ? 3 : 0]?.id,
    name: isRegular ? "Regular Price VIP" : "Early Bird VIP",
    type: ticketsMetadata[isRegular ? 3 : 0]?.category,
    price: ticketsMetadata[isRegular ? 3 : 0]?.price,
    qty_left: ticketsMetadata[isRegular ? 3 : 0]?.quantity,
    expired: Math.floor(new Date().getTime() / 1000) >= ticketsMetadata[isRegular ? 3 : 0]?.sales_end,
    available: Math.floor(new Date().getTime() / 1000) > ticketsMetadata[isRegular ? 3 : 0]?.sales_start,
    daysCount:
      language === "ar"
        ? ticketsMetadata[isRegular ? 3 : 0]?.title_ar
        : ticketsMetadata[isRegular ? 3 : 0]?.title_en,
    day:
      language === "ar" ? ticketsMetadata[isRegular ? 3 : 0]?.day_ar : ticketsMetadata[isRegular ? 3 : 0]?.day_en,
    max_order: ticketsMetadata[isRegular ? 3 : 0]?.max_order_limit,
    daysCountToBeSent: ticketsMetadata[isRegular ? 3 : 0]?.title_en,
    daysToBeSent: ticketsMetadata[isRegular ? 3 : 0]?.day_en,
  };
  let ticket2 = {
    id: ticketsMetadata[isRegular ? 4 : 1]?.id,
    name: isRegular ? "Regular Price VIP" : "Early Bird VIP",
    type: ticketsMetadata[isRegular ? 4 : 1]?.category,
    price: ticketsMetadata[isRegular ? 4 : 1]?.price,
    qty_left: ticketsMetadata[isRegular ? 4 : 1]?.quantity,
    expired: Math.floor(new Date().getTime() / 1000) >= ticketsMetadata[isRegular ? 4 : 1]?.sales_end,
    available: Math.floor(new Date().getTime() / 1000) > ticketsMetadata[isRegular ? 4 : 1]?.sales_start,
    daysCount:
      language === "ar"
        ? ticketsMetadata[isRegular ? 4 : 1]?.title_ar
        : ticketsMetadata[isRegular ? 4 : 1]?.title_en,
    day:
      language === "ar" ? ticketsMetadata[isRegular ? 4 : 1]?.day_ar : ticketsMetadata[isRegular ? 4 : 1]?.day_en,
    max_order: ticketsMetadata[isRegular ? 4 : 1]?.max_order_limit,
    daysCountToBeSent: ticketsMetadata[isRegular ? 4 : 1]?.title_en,
    daysToBeSent: ticketsMetadata[isRegular ? 4 : 1]?.day_en,
  };
  let ticket3 = {
    id: ticketsMetadata[isRegular ? 5 : 2]?.id,
    name: isRegular ? "Regular Price VIP" : "Early Bird VIP",
    type: ticketsMetadata[isRegular ? 5 : 2]?.category,
    price: ticketsMetadata[isRegular ? 5 : 2]?.price,
    qty_left: ticketsMetadata[isRegular ? 5 : 2]?.quantity,
    expired: Math.floor(new Date().getTime() / 1000) >= ticketsMetadata[isRegular ? 5 : 2]?.sales_end,
    available: Math.floor(new Date().getTime() / 1000) > ticketsMetadata[isRegular ? 5 : 2]?.sales_start,
    daysCount:
      language === "ar"
        ? ticketsMetadata[isRegular ? 5 : 2]?.title_ar
        : ticketsMetadata[isRegular ? 5 : 2]?.title_en,
    day:
      language === "ar" ? ticketsMetadata[isRegular ? 5 : 2]?.day_ar : ticketsMetadata[isRegular ? 5 : 2]?.day_en,
    max_order: ticketsMetadata[isRegular ? 5 : 2]?.max_order_limit,
    daysCountToBeSent: ticketsMetadata[isRegular ? 5 : 2]?.title_en,
    daysToBeSent: ticketsMetadata[isRegular ? 5 : 2]?.day_en,
  };

  const updateTicket1Count = (action) => {
    if (
      action === "increment" &&
      (ticket1.qty_left > 0 || ticket1.qty_left === null) &&
      ticket1Count < ticket1.max_order
    ) {
      setTicket1Count(ticket1Count + 1);
      dispatch(addTicket(ticket1));
    } else if (action === "decrement") {
      if (ticket1Count > 0) {
        setTicket1Count(ticket1Count - 1);
        dispatch(removeTicket(ticket1));
      }
    }
  };
  const updateTicket2Count = (action) => {
    if (
      action === "increment" &&
      (ticket2.qty_left > 0 || ticket2.qty_left === null) &&
      ticket2Count < ticket2.max_order
    ) {
      setTicket2Count(ticket2Count + 1);
      dispatch(addTicket(ticket2));
    } else if (action === "decrement") {
      if (ticket2Count > 0) {
        setTicket2Count(ticket2Count - 1);
        dispatch(removeTicket(ticket2));
      }
    }
  };

  const updateTicket3Count = (action) => {
    if (
      action === "increment" &&
      (ticket3.qty_left > 0 || ticket3.qty_left === null) &&
      ticket3Count < ticket3.max_order
    ) {
      setTicket3Count(ticket3Count + 1);
      dispatch(addTicket(ticket3));
    } else if (action === "decrement") {
      if (ticket3Count > 0) {
        setTicket3Count(ticket3Count - 1);
        dispatch(removeTicket(ticket3));
      }
    }
  };
  useEffect(() => {
    if (resetCounter) {
      setTicket1Count(0);
      setTicket2Count(0);
      setTicket3Count(0);
    }
  }, [resetCounter]);
  return (
    <div className="w-full lg:w-full">
      <div className="flex">
        <div className="w-0 sm:w-16"></div>
        <header className="text-black flex flex-col items-start ">

          <div className="text-xs ">
            <div className="ticket-type border-b border-black">
              <h3 className="font--2rem basic--font--family mb--20">
                {isRegular ? 'Regular Price VIP' : 'Early Bird VIP'}
              </h3>
            </div>
            <div className="ticket-brief flex">
              <p className="text-xs mt--10 basic--font--family-light font--weight--700">
                Everything in regular +
                <br />
                Valet Parking
                <br />
                Dedicated Fast entry lane
              </p>
              <p className="text-xs mt--10 mx--20 basic--font--family-light font--weight--700">
                Special VIP Deck
                <br />
                Designated toilets
                <br />
                Special hospitality and complimentary refreshments
              </p>
            </div>
          </div>
        </header>
      </div>
      <div className="w-full flex flex-col gap-10 mt-4">
        <TicketPicker
          ticketType="regular"
          title={ticket1.daysCount}
          day={ticket1.day}
          price={ticket1.price}
          handleChange={updateTicket1Count}
          ticketCount={ticket1Count}
          expired={ticket1.expired}
          qtyLeft={ticket1.qty_left}
          ticket={ticket1}
        />
        <TicketPicker
          ticketType="regular"
          title={ticket2.daysCount}
          day={ticket2.day}
          price={ticket2.price}
          handleChange={updateTicket2Count}
          ticketCount={ticket2Count}
          expired={ticket2.expired}
          qtyLeft={ticket2.qty_left}
          ticket={ticket2}
        />
        <TicketPicker
          ticketType="regular"
          title={ticket3.daysCount}
          day={ticket3.day}
          price={ticket3.price}
          handleChange={updateTicket3Count}
          ticketCount={ticket3Count}
          expired={ticket3.expired}
          qtyLeft={ticket3.qty_left}
          ticket={ticket3}
        />
      </div>
    </div>
  );
}

export default Regular