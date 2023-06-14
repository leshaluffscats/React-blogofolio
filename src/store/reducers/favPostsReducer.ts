import { AnyAction } from "redux";
import { IFavPosts, IPostContent } from "../../types";



const initialState: IFavPosts = {
    favPosts: [],
}

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const favPostsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: return {
            ...state,
            favPosts: [...state.favPosts, action.payload]
        }
        case REMOVE_FROM_FAVORITES: return {
            ...state,
            favPosts: state.favPosts.filter(el => el.id !== action.payload)
        }

        default: return state;
    }
}

export const addToFavoritesAction = (post: IPostContent) => (
    {
        type: "ADD_TO_FAVORITES",
        payload: post,
    }
)

export const removeFromFavoritesAction = (id: string) => (
    {
        type: "REMOVE_FROM_FAVORITES",
        payload: id,
    }
)