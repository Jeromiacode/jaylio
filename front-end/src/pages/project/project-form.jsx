// import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { contactSendError } from '../../store/actions/contact-action';
import { userClearError } from '../../store/actions/user-action';
// import { contactValidator } from '../../validators/contact-val';

function ProjectPage() {
    const dispatch = useDispatch();
    // Lors du retour sur la page
    useEffect(() => {
        dispatch(userClearError);
    });

    // options formulaire et usage
    const options = {
        // resolver: yupResolver(contactValidator),
        reValidateMode: 'onSubmit'
    }
    const { register, handleSubmit } = useForm(options)

    // Envoi des données dans le store
    // useEffect(() => {
    const onSubmit = ({ name, description, link, picture }) => {
                axios.post('http://localhost:8080/api/project/send', { name, description, link, picture })
                .then(({data}) => {
                    dispatch(data);
                })
                .catch((err) => {
                    dispatch(contactSendError(err));
                })
            };
    // }, []);

  return ( 
    //   method='post' encType='multipart/form-data'
    <form onSubmit={handleSubmit(onSubmit)} method='post' encType='multipart/form-data'>
      <input {...register('name')} />
      <textarea {...register('description')} ></textarea>
      <input {...register('link')} />
      {/* <input ref={register} name='picture' /> */}
      <input type="file" name='picture' />
      <button type='submit'>Send</button>
    </form>
  );
}
// to : index.js (routes)
export default ProjectPage;