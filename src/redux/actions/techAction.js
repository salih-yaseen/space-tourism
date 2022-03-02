import data from "../../data/data.json";
import { GET_TECH_DATA } from "../actionTypes/ActionTypes";

export const getTechData = () => (dispatch, getState) => {
    const { technology } = data;

    dispatch({
        type: GET_TECH_DATA,
        payload: technology,
    });
};
