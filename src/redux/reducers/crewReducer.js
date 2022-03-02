import { GET_CREW_DATA } from "../actionTypes/ActionTypes";

export const crewReducer = (state = { crew: [] }, action) => {
    switch (action.type) {
        case GET_CREW_DATA:
            return { crew: action.payload };
        default:
            return state;
    }
};
