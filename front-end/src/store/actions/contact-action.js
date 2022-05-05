import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'

export const contactSendMessage = createAction('contact/sendMessage', ({ message_id, title, name, email, website, company, content, createdAt}) => {
    return {
        payload: {
            message_id,
            title,
            name,
            email,
            website,
            company,
            content,
            createdAt
        }
    };
});

export const contactSendError = createAction('contact/sendError');
export const contactClearError = createAction('contact/clearError');

export const messageSend = ({ name, email, title, content, website, company }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/message/send', { name, email, title, content, website, company })
        .then(({message}) => {
            dispatch(contactSendMessage(message));
        })
        .catch((err) => {
            dispatch(contactSendError(err));
        })
    };
};

// to : contact-reducer (reducers)
export default messageSend;