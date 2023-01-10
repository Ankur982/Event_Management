import { ERROR, GET_EVENTS, LOADING } from "./actionType"


const initState = {
    loading: false,
    error: false,
    events: [],
}

export const eventReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }


        case GET_EVENTS: {
            return {
                ...state,
                loading: false,
                error: false,
                events: payload
            }
        }
        

        default: return state
    }
}