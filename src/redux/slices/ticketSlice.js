import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  step: 1,
  resetCounter: 0,
  event: "freaks of nature",
  date: "",
  checkout_valid_for: "48",
  direct_checkout: 1,
  terms_ar: "",
  terms_en: "",
  cart_items: [],
  ordered_tickets_ids: [],
  tickets_metadata: [
    {
      id: "9",
      qty_left: "20",
      type: "Early Bird",
      price: "550",
      day_ar: "الخميس",
      day_en: "Thursday",
      title_ar: "يوم واحد - GA",
      title_en: "1 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "1",
    },
    {
      id: "10",
      qty_left: "20",
      type: "Early Bird",
      price: "550",
      day_ar: "الجمعة",
      day_en: "Friday",
      title_ar: "يوم واحد - GA",
      title_en: "1 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "1",
    },
    {
      id: "11",
      qty_left: "20",
      type: "Early Bird",
      price: "1000",
      day_ar: "نهاية الاسبوع",
      day_en: "Weekend",
      title_ar: "يومين - GA",
      title_en: "2 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "1",
    },
    {
      id: "12",
      qty_left: "20",
      type: "Regular Tickets",
      price: "700",
      day_ar: "الخميس",
      day_en: "Thursday",
      title_ar: "يوم واحد - GA",
      title_en: "1 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "1",
    },
    {
      id: "13",
      qty_left: "20",
      type: "Regular Tickets",
      price: "700",
      day_ar: "الجمعة",
      day_en: "Friday",
      title_ar: "يوم واحد - GA",
      title_en: "1 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "1",
    },
    {
      id: "14",
      qty_left: "20",
      type: "Regular Tickets",
      price: "1200",
      day_ar: "نهاية الاسبوع",
      day_en: "Weekend",
      title_ar: "يومين - GA",
      title_en: "2 Day- GA",
      min_order: "1",
      max_order: "20",
      expired: "0",
    },
  ],
  earlyBird_tickets_metadata: [
    {
      id: 1,
      type: "early_bird",
      price: "",
      qty_left: "",
      expired: "",
      title_ar: "",
      title_en: "",
      day_ar: "",
      day_en: "",
    },
    {
      id: 2,
      type: "early_bird",
      price: "",
      qty_left: "",
      expired: "",

      title_ar: "",
      title_en: "",
      day_ar: "",
      day_en: "",
    },
    {
      id: 3,
      type: "early_bird",
      price: "",
      qty_left: "",
      expired: "",

      title_ar: "",
      title_en: "",
      day_ar: "",
      day_en: "",
    },
  ],
  regular_tickets_metadata: [
    {
      id: 1,

      type: "regular",
      price: "",
      qty_left: "",
      expired: "",
      title_ar: "",
      title_en: "",
      day_ar: "",
      day_en: "",
    },
    {
      id: 2,

      type: "regular",
      price: "",
      qty_left: "",
      expired: "",
      title_ar: "",

      title_en: "",
      day_ar: "",
      day_en: "",
    },
    {
      id: 3,

      type: "regular",
      price: "",

      qty_left: "",
      expired: "",
      title_ar: "",
      title_en: "",

      day_ar: "",
      day_en: "",
    },
  ],
  addones_metadata: [
    {
      id: "45",
      title_ar:
        "خيمة مُجهزة مسبقًا - نوفرها - وصول ما يصل إلى شخصين إلى منطقة التخييم &quot;Freakville&quot; الحصرية",
      title_en:
        "Pre-Pitched Tent – Supplied by us - up to 2 People Access to the exclusive “Freakville” camping zone",
      price: "600",
    },
    {
      id: "46",
      title_ar:
        "خيمة مُجهزة مسبقًا - نوفرها - وصول ما يصل إلى 4 أشخاص إلى منطقة التخييم &quot;Freakville&quot; الحصرية",
      title_en:
        "Pre-Pitched Tent – Supplied by us - up to 4 People Access to the exclusive “Freakville” camping zone",
      price: "800",
    },
    {
      id: "47",
      title_ar: "مواقف سيارات مميزة",
      title_en: "PREMIUM PARKING",
      price: "100",
    },
  ],

  ticketsWithQTY: [],
  addonesWithQTY: [],
  tickets: [
    // {
    //   id: 0 /* ticket_id*/,
    //   name: "" /* ticket_name*/,
    //   price: 0,
    //   attendee: {
    //     full_name: "",
    //     invited_by: "",
    //     gender: "",
    //     email: "",
    //     instagram_handle: "",
    //     phone_number: "",
    //   },
    // },
  ],
  addones: [
    // {
    //   id: 0,
    //   price: 0,
    //   name: "",
    //   qty :  0
    // },
  ],
  summary: {
    totals: {
      total: 0,
      coupon: "",
      discount: 0 /* discount amt in sar*/,
      ticketing_fees: 0,
      vat: 0,
      total_amount_due: 0,
    },
  },
  couponPercentage: 0,
  vatPercentage: 15,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    increaseStep: (state) => {
      if (state.step < 3) {
        state.step++;
      } else {
        state.step = 1;
      }
    },
    decreaseStep: (state) => {
      if (state.step > 1) {
        state.step--;
      } else {
        state.step = 1;
      }
    },
    setCheckoutValidFor: (state, action) => {
      state.checkout_valid_for = action.payload;
    },

    addTicket: (state, action) => {
      //if ticket wit the same id exists increase qty

      //TODO: create a cart_items array and push the ticket ID to it
      //TODO: create a ordered_tickets_ids and push the ticket ID to it
      const ticket = action.payload;

      //debugger;
      const ticketWithQTY = state.ticketsWithQTY.find(
        (t) => t.id === ticket.id
      );
      if (ticketWithQTY) {
        ticketWithQTY.qty++;
      } else {
        ticket.qty = 1;
        state.ticketsWithQTY.push(ticket);
      }
      state.tickets.push({ ...ticket, reduxID: state.tickets.length });

      ticketSlice.caseReducers.setSummary(state);
    },
    removeTicket: (state, action) => {
      const ticket = action.payload;
      const ticketWithQTY = state.ticketsWithQTY.find(
        (t) => t.id === ticket.id
      );
      if (ticketWithQTY) {
        ticketWithQTY.qty--;
        if (ticketWithQTY.qty === 0) {
          state.ticketsWithQTY = state.ticketsWithQTY.filter(
            (t) => t.id !== ticket.id
          );
        }
      }
      for (let i = 0; i < state.tickets.length; i++) {
        if (state.tickets[i].id === ticket.id) {
          state.tickets.splice(i, 1);
          break;
        }
      }
      if (state.tickets.length === 0) {
        ticketSlice.caseReducers.reset(state);
        state.step = 1;
      }

      ticketSlice.caseReducers.setSummary(state);
    },
    cancelTicket: (state, action) => {
      const ticket = action.payload;
      const ticketWithQTY = state.ticketsWithQTY.find(
        (t) => t.id === ticket.id
      );
      if (ticketWithQTY) {
        ticketWithQTY.qty--;
        if (ticketWithQTY.qty === 0) {
          state.ticketsWithQTY = state.ticketsWithQTY.filter(
            (t) => t.id !== ticket.id
          );
        }
      }
      // remove the ticket that have the same reduxID as the ticket that was cancelled
      for (let i = 0; i < state.tickets.length; i++) {
        if (state.tickets[i].reduxID === ticket.reduxID) {
          state.tickets.splice(i, 1);
          break;
        }
      }

      if (state.tickets.length === 0) {
        ticketSlice.caseReducers.reset(state);
        state.step = 1;
      }
      ticketSlice.caseReducers.setSummary(state);
    },
    addAddone: (state, action) => {
      const addone = action.payload;
      const addoneWithQTY = state.addonesWithQTY.find(
        (t) => t.id === addone.id
      );
      if (addoneWithQTY) {
        addoneWithQTY.qty++;
      } else {
        addone.qty = 1;
        state.addonesWithQTY.push(addone);
      }
      state.addones.push(addone);
      ticketSlice.caseReducers.setSummary(state);
    },
    removeAddone: (state, action) => {
      const addone = action.payload;
      const addoneWithQTY = state.addonesWithQTY.find(
        (t) => t.id === addone.id
      );
      if (addoneWithQTY) {
        addoneWithQTY.qty--;
        if (addoneWithQTY.qty === 0) {
          state.addonesWithQTY = state.addonesWithQTY.filter(
            (t) => t.id !== addone.id
          );
        }
      }
      state.addones = state.addones.filter((t) => t.id !== addone.id);
      ticketSlice.caseReducers.setSummary(state);
    },
    setCouponPercentage: (state, action) => {
      state.couponPercentage = action.payload;
      ticketSlice.caseReducers.setSummary(state);
    },
    setSummary: (state) => {
      const {
        ticketsWithQTY,
        addonesWithQTY,
        couponPercentage,
        vatPercentage,
      } = state;
      const totals = {
        total: 0,
        discount: 0,
        ticketing_fees: 0,
        vat: 0,
        total_amount_due: 0,
      };
      //calculate the total from tickets and addones
      ticketsWithQTY.forEach((t) => {
        totals.total += t.price * t.qty;
      });
      addonesWithQTY.forEach((t) => {
        totals.total += t.price * t.qty;
      });
      //calculate the discount
      if (couponPercentage > 0) {
        totals.discount = (totals.total * couponPercentage) / 100;
      }
      //calculate the ticketing fees
      totals.ticketing_fees = (totals.total - totals.discount) * 0.06;
      //calculate the vat
      totals.vat =
        ((totals.total - totals.discount + totals.ticketing_fees) *
          vatPercentage) /
        100;
      //calculate the total amount due
      totals.total_amount_due = Math.round(
        totals.total - totals.discount + totals.ticketing_fees + totals.vat
      );
      state.summary.totals = totals;
    },
    setTicket: (state, action) => {
      state.tickets[action.payload.index] = action.payload.ticket;
    },
    setAddone: (state, action) => {
      state.addones[action.payload.index] = action.payload.addone;
    },
    setTicketAttendee: (state, action) => {
      state.tickets[action.payload.index].attendee = action.payload.attendee;
    },
    setTicketName: (state, action) => {
      state.tickets[action.payload.index].name = action.payload.name;
    },
    setTicketPrice: (state, action) => {
      state.tickets[action.payload.index].price = action.payload.price;
    },
    setAddoneName: (state, action) => {
      state.addones[action.payload.index].name = action.payload.name;
    },
    setAddonePrice: (state, action) => {
      state.addones[action.payload.index].price = action.payload.price;
    },
    setCoupon: (state, action) => {
      state.summary.totals.coupon = action.payload;
    },
    setVatPercentage: (state, action) => {
      state.vatPercentage = action.payload;
      ticketSlice.caseReducers.setSummary(state);
    },

    setDirectCheckout: (state, action) => {
      state.direct_checkout = action.payload;
    },
    setTermsAr: (state, action) => {
      state.terms_ar = action.payload;
    },
    setTermsEn: (state, action) => {
      state.terms_en = action.payload;
    },
    setTicketsMetaData: (state, action) => {
      state.tickets_metadata = action.payload;
      state.earlyBird_tickets_metadata = [];
      state.regular_tickets_metadata = [];
      //debugger;
      state.tickets_metadata.forEach((t) => {
        if (
          t.category === "Early Bird Ticket" ||
          t.category === "Regular Price Ticket"
        ) {
          state.earlyBird_tickets_metadata.push(t);
        } else {
          state.regular_tickets_metadata.push(t);
        }
      });
    },
    setAddonesMetaData: (state, action) => {
      state.addones_metadata = action.payload;
    },
    go2Step4: (state) => {
      state.step = 4;
    },

    go2Step1: (state) => {
      state.step = 1;
    },
    reset: (state) => {
      state.resetCounter += 1;
      state.step = 1;
      state.tickets = [];
      state.addones = [];
      state.ticketsWithQTY = [];
      state.addonesWithQTY = [];
      state.summary = {
        totals: {
          total: 0,
          discount: 0,
          ticketing_fees: 0,
          vat: 0,
          total_amount_due: 0,
        },
      };
      state.couponPercentage = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  increaseStep,
  decreaseStep,
  setCheckoutValidFor,
  addTicket,
  removeTicket,
  cancelTicket,
  addAddone,
  removeAddone,
  setCouponPercentage,
  setSummary,
  setTicket,
  setTicketAttendee,
  setTicketName,
  setTicketPrice,
  setAddone,
  setAddoneName,
  setAddonePrice,
  setCoupon,
  setVatPercentage,
  setDirectCheckout,
  setTermsAr,
  setTermsEn,
  setTicketsMetaData,
  setAddonesMetaData,
  go2Step4,
  go2Step1,
  reset,
} = ticketSlice.actions;

export default ticketSlice.reducer;
