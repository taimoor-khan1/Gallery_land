import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import utilitiesReducer from "./slices/utilities";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  utilities: utilitiesReducer,
});

const rootReducer = (state, action) => {
  // console.log('action: ', action);
  if (action.type === "auth/removeAccessToken") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
