import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import ticketReducer from "./slices/ticketSlice";
import mainBuyerReducer from "./slices/mainBuyerSlice";
import step4Reducer from "./slices/step4Slice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    ticket: ticketReducer,
    mainBuyer: mainBuyerReducer,
    step4: step4Reducer,
  },
});
