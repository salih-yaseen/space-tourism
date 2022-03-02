import { GET_DESTINATIONS_DATA } from "../actionTypes/ActionTypes";

export const destinationsReducer = (state = { desti: [] }, action) => {
    switch (action.type) {
        case GET_DESTINATIONS_DATA:
            return { desti: action.payload };
        default:
            return state;
    }
};
