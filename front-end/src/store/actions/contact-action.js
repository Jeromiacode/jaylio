import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'

export const contactForm = createAction('contact/form', ({ name, email, title, content, website, company }) => {
    return {
        payload: {
            name,
            email,
            title,
            content,
            website,
            company
        }
    };
});

export const contactSendError = createAction('contact/sendError');
export const contactClearError = createAction('contact/clearError');

export const contactSend = ({ name, email, title, content, website, company }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/contact/send', { name, email, title, content, website, company })
        .then(({data}) => {
            dispatch(contactForm(data));
        })
        .catch((err) => {
            dispatch(contactSendError(err));
            console.log(err);
        })
    };
};

// to : contact-reducer (reducers)
export default contactSend;