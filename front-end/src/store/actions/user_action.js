import jwtDecode from 'jwt-decode'
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'

export const userToken = createAction('user/token', ({ token, expire }) => {
    const { pseudo, isAdmin } = jwtDecode(token);
    return {
        payload: {
            token,
            expire,
            pseudo,
            isAdmin
        }
    };
});

export const userSendError = createAction('user/sendError');
export const userLogout = createAction('user/logout');

export const userLogin = ({ pseudo, password }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/login', {pseudo, password})
        .then(({data}) => {
            dispatch(userToken(data));
        })
        .catch((err) => {
            dispatch(userSendError(err))
        })
    }
}

// to : user-reducer
export default userLogin;