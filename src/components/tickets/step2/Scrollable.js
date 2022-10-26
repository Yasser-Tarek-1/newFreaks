import React from "react";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";

const Scrollable =()=> {
  const tickets = useSelector((state) => state.ticket.tickets);
  return (
    <div
      id="scrollableDiv"
      className=" min-h-[450px] flex flex-col max-h-[60vh] scrollbar-thin  scrollbar-track-gray-700  hover:scrollbar-thumb-pink scrollbar-thumb-yellow rounded w-full overflow-y-auto "
      style={{ startPosition: "0" }}
    >
      {tickets.map((ticket, index) => (
        <Ticket
          key={index}
          color={ticket.name === "regular" ? "pink" : "orange"}
          price={ticket.price}
          day={ticket.day}
          daysCount={ticket.daysCount}
          type={ticket.name}
          index={index}
          ticket={ticket}
        />
      ))}
    </div>
  );
}

export default Scrollable