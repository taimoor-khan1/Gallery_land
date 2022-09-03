// utilities

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAppLoading: true,
  isRegisterLandSheetVisible: false,
};

export const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    startAppLoading: (state) => {
      state.isAppLoading = true;
    },
    endAppLoading: (state) => {
      state.isAppLoading = false;
    },
    openRegisterLandSheet: (state, action) => {
      state.isRegisterLandSheetVisible = true;
    },
    closeRegisterLandSheet: (state, action) => {
      state.isRegisterLandSheetVisible = false;
    },
  },
});

export const {
  openRegisterLandSheet,
  closeRegisterLandSheet,
  startAppLoading,
  endAppLoading,
} = utilitiesSlice.actions;
export default utilitiesSlice.reducer;
