import { combineReducers } from "@reduxjs/toolkit";
import rickReducer from "./rickReducer";

const rootReducer = combineReducers({
  rick: rickReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>