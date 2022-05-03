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

export const userLogout = createAction('user/logout');
export const userSendError = createAction('user/sendError');
export const userClearError = createAction('user/clearError');

export const userLogin = ({ pseudo, password }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/user/login', { pseudo, password })
        .then(({data}) => {
            dispatch(userToken(data));
        })
        .catch((err) => {
            dispatch(userSendError(err));
        })
    };
};

// export const userRegister = ({ pseudo, email, password }) => {
//     return (dispatch) => {
//         axios.post('http://localhost:8080/api/user/register', { pseudo, email, password })
//         .then(({ data }) => {
//             dispatch(userToken(data));
//         })
//         .catch(() => {
//             dispatch(userSendError());
//         })
//     };
// };

// to : user-reducer (reducers)
export default userLogin;