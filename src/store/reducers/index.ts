import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ 
  user: userReducer,
  todo: todoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>