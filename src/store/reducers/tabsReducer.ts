import { AnyAction } from "redux"

const initialState = {
    all: true,
    favorites: false,
    myPosts: false,
}

const ALL = "ALL";
const FAVORITES = "FAVORITES";
const MY_POSTS = "MY_POSTS";

export const tabsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ALL: return {
            ...state,
            all: !!action.payload,
            favorites: false,
            myPosts: false,
        }
        case FAVORITES: return {
            ...state,
            all: false,
            favorites: !!action.payload,
            myPosts: false,
        }
        case MY_POSTS: return {
            ...state,
            all: false,
            favorites: false,
            myPosts: !!action.payload,
        }
        default: return state;
    }
}

export const tabsAction = (tab: string) => {
    return ({
        type: tab,
        payload: tab,
    })
};