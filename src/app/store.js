import { configureStore } from "@reduxjs/toolkit";
import authReducers from "features/auth/authSlice";
import { apiSlice } from "../features/Api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducers,
  },
  middleware: (getDefultMiddlewares) =>
    getDefultMiddlewares().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
