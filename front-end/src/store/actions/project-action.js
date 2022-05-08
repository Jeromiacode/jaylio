import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'

export const projectCreate = createAction('project/create');
export const projectSendError = createAction('user/sendError');

export const projectSave = ({ name, description, link }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/project/create', { name, description, link })
        .then(({data}) => {
            dispatch(projectCreate(data));
        })
        .catch((err) => {
            dispatch(projectSendError(err));
        })
    };
};

// to : user-reducer (reducers)
export default projectSave;