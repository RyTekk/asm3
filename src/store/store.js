import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { cartMiddleware, reHydrateStore } from "./cartReducer";
import loginReducer from "./loginReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
