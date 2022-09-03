import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  Labels: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAccessToken: (state, action) => {
      let accessToken = action.payload;
      state.accessToken = accessToken;
      saveAccessTokenToStorage(accessToken);
    },
    removeAccessToken: (state, action) => {
      state.accessToken = null;
      removeAccessTokenFromStorage();
    },
  },
});

export const {saveAccessToken, removeAccessToken} = authSlice.actions;
export default authSlice.reducer;
