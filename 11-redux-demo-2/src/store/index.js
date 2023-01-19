import authReducer from "./auth";
import counterReducer from "./counter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
