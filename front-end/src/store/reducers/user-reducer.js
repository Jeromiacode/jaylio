import { nanoid } from 'nanoid';
import userAction from '../actions/user_action'
const { createReducer } = require('@reduxjs/toolkit');

const initialState = {
    id: nanoid(),
    pseudo: 'Jeromia',
    data: ''
}

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(userAction.type, (state, action) => {
        return {
            data: state.pseudo + action.payload
    }
})
})

// to : store.js
export default userReducer;