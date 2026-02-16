import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import weightReducer from "./weightSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    weights: weightReducer,
  },
});

export default store;
