import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import rootReducer from "./reducers";

const preloadedState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState
});

export default store;
