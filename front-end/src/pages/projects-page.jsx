// import { yupResolver } from '@hookform/resolvers/yup';
// import { contactValidator } from '../../validators/contact-val';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userClearError } from '../store/actions/user-action';
import { projectCreate } from '../store/actions/project-action';

const ProjectPage = () => {
  // L'affichage de la page Projects variera si l'administrateur est connecté ou non
  const connectedUser = useSelector((s) => s.user);
  const token = connectedUser.token;

  const [project, setProject] = useState([]);

  // Lors du retour sur la page
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userClearError);
  });

  // options formulaire et validation
  const options = {
    // resolver: yupResolver(contactValidator),
    reValidateMode: 'onSubmit',
  };
  const { register, handleSubmit, reset } = useForm(options);

  const onSubmit = async (data) => {
    const { name, description } = data;

    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('name', name);
    formData.append('description', description);
    await fetch('http://localhost:8080/api/project/create', {
      method: 'POST',
      body: formData,
    }).then((results) => dispatch(projectCreate(results)));
    reset();
  };

  const fetchData = () => {
    fetch('http://localhost:8080/api/project')
      .then((data) => {
        setProject(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!token ? (
        <img src="http://localhost:8080/i3bga7rf_400x400.jpeg" alt="" />
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method='post'
            encType='multipart/form-data'
          >
            <input {...register('name')} />
            <input {...register('description')} />
            <input {...register('link')} />
            <input {...register('file')} type='file' />
            <button type='submit'>Send</button>
          </form>
        </>
      )}
    </>
  );
};
// to : projects-route (routes)
export default ProjectPage;
