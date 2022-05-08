import { createReducer } from '@reduxjs/toolkit';
import { projectCreate } from '../actions/project-action';
import { projectSendError } from '../actions/project-action';

const initialState = {
    error: false
}

const projectReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(projectCreate.type, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
    .addCase(projectSendError.type, (state, action) => {
        return {
            ...state,
            error: true
        };
    })
    .addDefaultCase((state) => {
        return state;
    });
})

// to : store.js
export default projectReducer;