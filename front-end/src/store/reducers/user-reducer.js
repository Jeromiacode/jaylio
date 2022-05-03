import { createReducer } from '@reduxjs/toolkit';
import { userLogout, userToken} from '../actions/user_action';

const initialState = {
    token: null,
    expire: null,
    pseudo: null,
    isAdmin: null,
    error: false
}

const userReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(userToken.type, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
    .addCase(userLogout.type, (state, action) => {
        return {
            ...initialState
        };
    })
})

// to : store.js
export default userReducer;