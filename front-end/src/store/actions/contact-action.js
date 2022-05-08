import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'

// to : contact-reducer (reducers)
export const contactSendMessage = createAction('contact/sendMessage');
export const contactSendError = createAction('contact/sendError');
export const contactClearError = createAction('contact/clearError');

export const sendMessage = ({ name, email, title, content, website, company }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/message/send', { name, email, title, content, website, company })
        .then(({data}) => {
            dispatch(contactSendMessage(data));
        })
        .catch((err) => {
            dispatch(contactSendError(err));
        })
    };
};

// to : contact-form (contact)
export default sendMessage;