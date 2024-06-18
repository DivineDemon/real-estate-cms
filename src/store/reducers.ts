import apiReducer from "./slices/api";
import globalReducer from "./slices/global";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  global: globalReducer,
  [apiReducer.reducerPath]: apiReducer.reducer,
});

export default rootReducer;
