import { configureStore } from "@reduxjs/toolkit";
import bitcoinNetFlowReducer from "./features/bitcoinNetFlow/bitcoinNetFlowSlice";

export const store = configureStore({
  reducer: {
    bitcoinNetFlow: bitcoinNetFlowReducer,
  },
});
