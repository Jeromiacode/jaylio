import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendMessage, { contactClearError } from '../store/actions/contact-action';
import { contactValidator } from '../validators/contact-val';
import styles from './pages.module.css';

function ContactPage() {

  const options = {
    resolver: yupResolver(contactValidator),
    reValidateMode: 'onSubmit',
  };
  const { register, handleSubmit, reset, formState } = useForm(options);
  const { errors } = formState
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactClearError);
  }, []);

  const onSubmit = ({ name, email, title, content, website, company }) => {
    dispatch(sendMessage({ name, email, title, content, website, company }));
    reset()
  };

  return (
    <div className={styles.contactPage}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Name </label>
          <input {...register('name')} id='name' placeholder='Required'/>
          <div>{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input {...register('email')} id='email' placeholder='Required'/>
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor='title'>Object </label>
          <input {...register('title')} id='title' placeholder='Optional'/>
        </div>
        <div>
          <label htmlFor='content'>Message </label>
          <textarea {...register('content')} id='content' placeholder='Required'></textarea>
          <div>{errors.content?.message}</div>
        </div>
        <div>
          <label htmlFor='website'>Website </label>
          <input {...register('website')} id='website' placeholder='Optional'/>
        </div>
        <div>
          <label htmlFor='company'>Company </label>
          <input {...register('company')} id='company' placeholder='Optional'/>
        </div>
        <div>
        <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
}
// to : home-route (routes)
export default ContactPage;
