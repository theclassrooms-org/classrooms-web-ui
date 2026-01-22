import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Create store with the correct types
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // To get the root state type
export type AppDispatch = typeof store.dispatch; // To get dispatch type
export default store;
