import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import { postsReducer } from './reducers/postsReducer';
import authReducer from './reducers/authReducer';
import { tokenReducer } from './reducers/tokenReducer';
import { tabsReducer } from './reducers/tabsReducer';
import { favPostsReducer } from './reducers/favPostsReducer';
import { modalReducer } from './reducers/modalReducer';
import { searchValueReducer } from './reducers/searchValueReducer';
import { likesReducer } from './reducers/likesReducer';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        tokens: tokenReducer,
        tabs: tabsReducer,
        favPosts: favPostsReducer,
        modal: modalReducer,
        searchValue: searchValueReducer,
        likes: likesReducer,

        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;