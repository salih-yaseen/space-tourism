import {
    CHANGE_ACTIVE_LINK,
    CHANGE_BACKGROUND,
} from "../actionTypes/ActionTypes";

export const navLinkReducer = (state = { activeLink: 1 }, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_LINK:
            return { activeLink: action.payload };
        default:
            return state;
    }
};

export const bgReducer = (state = { bg: "bg-home" }, action) => {
    switch (action.type) {
        case CHANGE_BACKGROUND:
            return { bg: action.payload };
        default:
            return state;
    }
};
