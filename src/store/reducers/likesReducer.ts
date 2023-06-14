import { AnyAction } from "redux";

const initialState: any = {
    allLikes: {},
    dislikes: {},
}

const LIKE = "LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";
const DISLIKE = "DISLIKE";
const REMOVE_DISLIKE = "REMOVE_DISLIKE";

export const likesReducer = (state = initialState, action: AnyAction) => {
    const postId = action.payload;

    switch (action.type) {
        case LIKE: return {
            ...state,
            allLikes: {
                ...state.allLikes,
                [postId]: {
                    postLikes: (state.allLikes[postId]?.postLikes || 0) + 1 //чтобы не было undefined мы ставим  || 0 по умолчанию
                }
            },
            dislikes: state.dislikes ? state.dislikes - 1 : { ...state.dislikes }
        }

        case REMOVE_LIKE: return {
            ...state,
            allLikes: {
                ...state.allLikes,
                [postId]: {
                    postLikes: (state.allLikes[postId]?.postLikes || 0) - 1
                }
            },
            dislikes: { ...state.dislikes }
        }

        case DISLIKE: return {
            ...state,
            dislikes: {
                ...state.dislikes,
                [postId]: {
                    postDislikes: (state.dislikes[postId]?.postDislikes || 0) + 1
                }
            },
            allLikes: {
                ...state.allLikes,
                [postId]: {
                    postLikes: state.postLikes ? (state.allLikes[postId]?.postLikes || 0) - 1 : undefined
                }
            },


        }

        case REMOVE_DISLIKE: return {
            ...state,
            dislikes: {
                ...state.dislikes,
                [postId]: {
                    postDislikes: (state.dislikes[postId]?.postDislikes || 0) - 1
                }
            },
        }

        default: return state;
    }

}

export const likeAction = (postId: any) => {
    return ({
        type: LIKE,
        payload: postId,
    })
}

export const removeLikeAction = (postId: any) => {
    return ({
        type: REMOVE_LIKE,
        payload: postId,
    })
}

export const dislikeAction = (postId: any) => {
    return ({
        type: DISLIKE,
        payload: postId,
    })
}

export const removeDislikeAction = (postId: any) => {
    return ({
        type: REMOVE_DISLIKE,
        payload: postId,
    })
}

