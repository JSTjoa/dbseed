import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
export const middleware = [thunk];

const store = configureStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
