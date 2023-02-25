import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/App";
import store from "./store";

const AppWrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppWrapper>
        <Router>
            <App />
        </Router>
    </AppWrapper>
);
