import { GET_DESTINATIONS_DATA } from "../actionTypes/ActionTypes";
import data from "../../data/data.json";

export const getDestiData = () => (dispatch, getState) => {
    const { destinations } = data;

    dispatch({
        type: GET_DESTINATIONS_DATA,
        payload: destinations,
    });
};
