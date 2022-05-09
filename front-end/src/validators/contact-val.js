const yup = require('yup');

// to : contact-form (pages)
export const contactValidator = yup.object().shape({
    name: yup.string().trim().required('Name is required').min(2, "Minimum 2 carracters").max(50, "You have either a oversized name or ego"),
    email: yup.string().trim().required('Email is required').email("This is not a valid email"),
    content: yup.string().trim().required('Please attach your message').min(5, "Please at least say Hello !").max(1000, "Your message is over 1000 characters"),
}).required();

