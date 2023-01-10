import { ERROR, GET_EVENTS, LOADING,  } from "./actionType";
import axios from "axios";

export const loginUser = (user) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const res = await axios.get("http://localhost:8080/event/event")

        dispatch({
            type: GET_EVENTS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
