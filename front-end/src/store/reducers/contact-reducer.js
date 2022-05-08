import { createReducer } from '@reduxjs/toolkit';
import { contactSendError, contactClearError, contactSendMessage} from '../actions/contact-action';

const initialState = {
    error: false
}

const contactReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(contactSendMessage.type, (state, action) => {
        return {
            ...state,
            ...action.payload
        };
    })
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