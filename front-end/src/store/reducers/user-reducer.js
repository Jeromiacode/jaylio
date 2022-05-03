import { createReducer } from '@reduxjs/toolkit';
import { userToken, userLogout, userSendError, userClearError} from '../actions/user-action';

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
    .addCase(userSendError.type, (state, action) => {
        return {
            ...state,
            error: true
        };
    })
    .addCase(userClearError.type, (state, action) => {
        return {
            ...state,
            error: false
        };
    })
    .addDefaultCase((state) => {
        return state;
    });
})

// to : store.js
export default userReducer;