// import { yupResolver } from '@hookform/resolvers/yup';
// import { contactValidator } from '../../validators/contact-val';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userClearError } from "../store/actions/user-action";
import projectSave from "../store/actions/project-action";

const ProjectPage = () => {
  // L'affichage de la page Projects variera si l'administrateur est connecté ou non
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;

  // Lors du retour sur la page
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userClearError);
  });

  // options formulaire et validation
  const options = {
    // resolver: yupResolver(contactValidator),
    reValidateMode: "onSubmit",
  };
  const { register, handleSubmit, reset } = useForm(options);

  // Envoi des données dans le store
  const onSubmit = async (data) => {
    const {name, description} = data
    dispatch(projectSave({ name, description }));

    const formData = new FormData();
    formData.append("file", data.file[0]);
    const res = await fetch("http://localhost:8080/api/project/create", {
        method: "POST",
        body: formData,
    })
    .then((res) => res.json());
    console.log(res);
    reset();
  };

  return (
    <>
      {!admin ? (
        <p>Display Projects</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          encType="multipart/form-data"
        >
          <input {...register("name")} />
          <input {...register("description")} />
          <input {...register("link")} />
          <input {...register("file")} type="file" />
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
};
// to : projects-route (routes)
export default ProjectPage;
