import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  data: [],
};

export const bitcoinNetFlowSlice = createSlice({
  name: "bitcoinNetFlow",
  initialState,
  reducers: {
    initData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updateData: (state, action) => {
      state.data = [...state.data, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initData,updateData, setError } = bitcoinNetFlowSlice.actions;

export default bitcoinNetFlowSlice.reducer;
