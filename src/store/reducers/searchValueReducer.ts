import { AnyAction } from "redux";

const initialState = {
    searchValue: "",
}

const SEARCH = "SEARCH";

export const searchValueReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SEARCH: return {
            ...state,
            searchValue: action.payload,
        }
        default: return state;
    }
}

export const searchValueAction = (value: string) => {
    return ({
        type: SEARCH,
        payload: value,
    })
}