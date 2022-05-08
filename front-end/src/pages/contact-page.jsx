import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendMessage from '../store/actions/contact-action';
import { userClearError } from '../store/actions/user-action';
import { contactValidator } from '../validators/contact-val';

function ContactPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userClearError);
    });

    const options = {
        resolver: yupResolver(contactValidator),
        reValidateMode: 'onSubmit'
    }
    const { register, handleSubmit } = useForm(options)

    const onSubmit = ({ name, email, title, content, website, company }, e) => {
      e.preventDefault();
      dispatch(sendMessage({ name, email, title, content, website, company }));
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <input {...register('title')} />
      <textarea {...register('content')} ></textarea>
      <input {...register('website')} />
      <input {...register('company')} />
      <button type='submit'>Send</button>
    </form>
  );
}
// to : home-route (routes)
export default ContactPage;
