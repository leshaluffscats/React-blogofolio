import { AnyAction } from "@reduxjs/toolkit";


const initialState = {
    access: "",
    refresh: "",
}

const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
const REMOVE_ACCESS_TOKEN = "REMOVE_ACCESS_TOKEN";

export const tokenReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN: return {
            ...state,
            access: action.payload,
        }
        case REMOVE_ACCESS_TOKEN: return {
            ...state,
            access: "",
        }

        default: return state;

    }
}

export const setAccessTokenAction = (token: string) => {
    return ({
        type: SET_ACCESS_TOKEN,
        payload: token,
    })
}

export const removeAccessTokenAction = () => {
    return ({
        type: REMOVE_ACCESS_TOKEN,
    })
}