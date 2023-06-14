import { AnyAction } from "redux";

const initialState = {
    isOpen: false,
}

const OPEN = "OPEN";
const CLOSE = "CLOSE";

export const modalReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case OPEN: return {
            ...state,
            isOpen: true,
        }
        case CLOSE: return {
            ...state,
            isOpen: false,
        }
        default: return state;
    }
}

export const openModalAction = () => {
    return ({
        type: OPEN,
    })
}

export const closeModalAction = () => {
    return ({
        type: CLOSE,
    })
}