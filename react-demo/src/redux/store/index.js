import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../pages/redux-test/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
