import { applyMiddleware, compose, createStore } from "redux";
import { RootReducer } from "./RootReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    navbar: {
        activeLink: localStorage.getItem("space-tourism-link")
            ? JSON.parse(localStorage.getItem("space-tourism-link"))
            : 1,
    },
    bg: {
        bg: localStorage.getItem("space-tourism-bg")
            ? JSON.parse(localStorage.getItem("space-tourism-bg"))
            : "bg-home",
    },
};

export const Store = createStore(
    RootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
