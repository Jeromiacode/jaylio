import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendMessage from '../store/actions/contact-action';
import { userClearError } from '../store/actions/user-action';
import { contactValidator } from '../validators/contact-val';
import styles from './pages.module.css';

function ContactPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userClearError);
  });

  const options = {
    resolver: yupResolver(contactValidator),
    reValidateMode: 'onSubmit',
  };
  const { register, handleSubmit, reset } = useForm(options);

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
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input {...register('email')} id='email' placeholder='Required'/>
        </div>
        <div>
          <label htmlFor='title'>Object </label>
          <input {...register('title')} id='title' placeholder='Optional'/>
        </div>
        <div>
          <label htmlFor='content'>Message </label>
          <textarea {...register('content')} id='content' placeholder='Required'></textarea>
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
