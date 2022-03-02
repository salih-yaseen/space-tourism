import data from "../../data/data.json";
import { GET_CREW_DATA } from "../actionTypes/ActionTypes";

export const getCrewData = () => (dispatch, getState) => {
    const { crew } = data;

    dispatch({
        type: GET_CREW_DATA,
        payload: crew,
    });
};
