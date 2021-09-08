// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

export default store;
