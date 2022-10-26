import { t } from "i18next";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import { increaseStep, setIsLoading } from "../../../redux/slices/ticketSlice";
import { submitApplication } from "../../dataAccess/DataAccess";
import TC from "../tc/TC";
import ScrollToTop from "../../../ScrollToTop";

const Total = () => {
  const step = useSelector((state) => state.ticket.step);
  const mainBuyer = useSelector((state) => state.mainBuyer);
  const tickets = useSelector((state) => state.ticket.tickets);
  const summary = useSelector((state) => state.ticket.summary.totals);
  const vatPercentage = useSelector((state) => state.ticket.vatPercentage);
  const direct_checkout = useSelector((state) => state.ticket.direct_checkout);
  const reduxTicket = useSelector((state) => state.ticket);
  const addones = useSelector((state) => state.ticket.addonesWithQTY);
  const dispatch = useDispatch();
  const [openErrorBar] = useSnackbar(ErrorBarOptions);
  const couponPercentage = useSelector(
    (state) => state.ticket.couponPercentage
  );
  // const application = {
  //   date: "",
  //   event: "Freaks of Nature",
  //   buyer: mainBuyer,
  //   data: {
  //     tickets: tickets.map((ticket) => {
  //       return {
  //         id: ticket.id,
  //         name: `${ticket.type}, ${ticket.daysCountToBeSent}, ${ticket.daysToBeSent}`,
  //         attendee: ticket.attendee,
  //       };
  //     }),
  //     addones: addones.map((addone) => {
  //       return {
  //         id: addone.id,
  //         name: addone.name,
  //         qty: addone.qty,
  //       };
  //     }),
  //   },
  //   summary: {
  //     totals: {
  //       total: summary.total,
  //       coupon: summary.coupon,
  //       discount: summary.discount,
  //       ticketing_fees: summary.ticketing_fees,
  //       vat: summary.vat,
  //       total_amount_due: summary.total_amount_due,
  //     },
  //   },
  // };
  const toObject = () => {
    //debugger;

    if (tickets?.length > 0 && tickets.some((x) => x.attendee)) {
      var result = {};
      for (var i = 0; i < tickets.length; ++i)
        result[`${i + 1}- ${tickets[i].daysCount}: `] = [
          { name: "Full name", value: tickets[i].attendee.full_name },
          { name: "Email", value: tickets[i].attendee.email },
          { name: "Phone", value: tickets[i].attendee.phone },
          { name: "Gender", value: tickets[i].attendee.gender },
        ];

      return result;
    }
  };

  const application = {
    buyer: mainBuyer,
    data: {
      cart_items: tickets.map((ticket) => {
        return ticket.id;
      }),
      ordered_tickets_ids: tickets.map((ticket) => {
        return ticket.id;
      }),
      attendee_data: toObject(),
    },
    summary: {
      coupon_code: summary.coupon ? summary.coupon : "",
      grand_total: summary.total_amount_due,
    },
  };
  console.log(application);

  const validateAttendees = () => {
    let valid = true;
    tickets.forEach((ticket, index) => {
      if (
        !ticket.attendee.full_name ||
        !validateEmail(ticket.attendee.email, index) ||
        !validatePhone(ticket.attendee.phone, index)
      ) {
        valid = false;
      }
    });
    return valid;
  };
  const isURL = (url) => {
    if (!url) return false;

    return String(url).match(
      /^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
    );
  };
  const validateEmail = (email, ticketNumber) => {
    //debugger;
    let isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isValid) {
      openErrorBar(
        `invalid email at  ${
          ticketNumber === -1 ? "main buyer" : `ticket ${ticketNumber + 1}`
        }`
      );
    }
    return isValid;
  };
  const validatePhone = (phone, ticketNumber) => {
    //debugger;
    let isValid = String(phone).match(
      ///^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
      ///^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    );
    if (isValid && !phone.startsWith("966")) {
      phone = phone.replace(/^0/, "966");
    }

    if (!isValid) {
      openErrorBar(
        `invalid phone number ${mainBuyer.phone} at  ${
          ticketNumber === -1 ? "main buyer" : `ticket ${ticketNumber + 1}`
        }`
      );
    }
    return isValid;
  };

  const validateInputs = () => {
    dispatch(setIsLoading(true));
    //debugger;
    try {
      if (
        (tickets.length > 0 || addones.length > 0) &&
        !!mainBuyer.full_name &&
        validateEmail(mainBuyer.email, -1) &&
        validatePhone(mainBuyer.phone, -1) &&
        validateAttendees()
      ) {
        submitApplication(application).then((res) => {
          //debugger;
          if (isURL(res)) {
            window.location.href = res;
            dispatch(setIsLoading(false));
          } else if (res == "1") {
            dispatch(increaseStep());
            dispatch(setIsLoading(false));
          } else {
            dispatch(setIsLoading(false));
            openErrorBar(
              "Looks like there is a problem with your data, please try again"
            );
          }
        });
      } else {
        openErrorBar("Data must be correct");
        dispatch(setIsLoading(false));
      }
    } catch (e) {
      dispatch(setIsLoading(false));
      openErrorBar(
        t("Looks like there is a problem with your data, please try again")
      );
      console.log(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleIncrement = () => {
    if (tickets.length > 0 || addones.length > 0) {
      if (step === 2) {
        validateInputs();
        return;
      } else {
        dispatch(increaseStep());
      }
    } else {
      openErrorBar("Select at least one ticket or addone to continue");
    }
  };

  return (
    <div className="capitalize mt-10 ">
      <div className=" flex flex-row justify-between">
        <p>{t("sidebar.total")}</p>
        <p>{Math.round(summary.total * 100) / 100} SAR</p>
      </div>
      {summary.discount > 0 ? (
        <div className=" flex flex-row justify-between">
          <p>
            {t("sidebar.discount")} ( {couponPercentage} % )
          </p>
          <p>{Math.round(summary.discount * 100) / 100} SAR</p>
        </div>
      ) : null}
      <div className=" flex flex-row justify-between">
        <p>{t("sidebar.ticketingFees")} ( 6% )</p>
        <p>{Math.round(summary.ticketing_fees * 100) / 100} SAR</p>
      </div>
      {vatPercentage > 0 ? (
        <div className=" flex flex-row justify-between">
          <p>
            {t("sidebar.vat")} ( {vatPercentage} % )
          </p>
          <p>{Math.round(summary.vat * 100) / 100} SAR</p>
        </div>
      ) : null}
      <div className=" flex flex-row justify-between">
        <p>{t("sidebar.totalAmountDue")}</p>
        <p>{Math.round(summary.total_amount_due * 100) / 100} SAR</p>
      </div>
      <div className="flex flex-col gap-7 w-full">
        <button
          type="button"
          onClick={handleIncrement}
          className=" relative bg-orange hover:bg-red-600 rounded px-10 sm:px-14 py-2 flex items-center    text-white text-sm font-light tracking-wider mt-10 transition"
        >
          {direct_checkout == 1 && step === 2 ? (
            <span>{t(`sidebar.checkout`)}</span>
          ) : (
            <span>{t(`sidebar.step${step + 1}`)}</span>
          )}
          <span className="text-xl font-pop absolute end-3"> {`>`} </span>
        </button>
      </div>
      <TC />
    </div>
  );
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

export default Total;
