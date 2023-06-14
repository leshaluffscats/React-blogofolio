import { IPostState } from "../../types";
import { AnyAction } from "@reduxjs/toolkit";
import { IPostItemProps } from "../../types";
import { AppDispatch } from "../store";

const defaultState: IPostState = {
    posts: [],
}

const LOAD_PAGE_POSTS = "LOAD_PAGE_POSTS";

export const postsReducer = (state: IPostState = defaultState, action: AnyAction): IPostState => {
    switch (action.type) {
        case LOAD_PAGE_POSTS: return {
            ...state,
            posts: [...action.payload]
        }
        default: return state;
    }
}

export const loadPagePostsAsyncAction = (postsArr: IPostItemProps[]) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: LOAD_PAGE_POSTS,
            payload: postsArr,
        })
    }
}
