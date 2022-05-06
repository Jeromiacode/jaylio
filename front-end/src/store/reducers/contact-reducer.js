import { createReducer } from '@reduxjs/toolkit';
import { contactSendError, contactClearError} from '../actions/contact-action';

const initialState = {
    error: false
}

const contactReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(contactSendError.type, (state, action) => {
        return {
            ...state,
            error: true
        };
    })
    .addCase(contactClearError.type, (state, action) => {
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
export default contactReducer;