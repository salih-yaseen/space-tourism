import { GET_TECH_DATA } from "../actionTypes/ActionTypes";

export const technologyReducer = (state = { tech: [] }, action) => {
    switch (action.type) {
        case GET_TECH_DATA:
            return { tech: action.payload };
        default:
            return state;
    }
};
