import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    username: "",
    id: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = "";
            state.username = "";
            state.id = "";
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;

export default authSlice.reducer;