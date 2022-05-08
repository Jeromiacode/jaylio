// import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactSendError } from "../store/actions/contact-action";
import { userClearError } from "../store/actions/user-action";
import RichTextEditor from "../components/rich-text-editor";
// import ProjectForm from '../../components/rich-text-editor';
// import { contactValidator } from '../../validators/contact-val';

const ProjectPage = () => {
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;
  console.log(connectedUser);
  const dispatch = useDispatch();
  // Lors du retour sur la page
  useEffect(() => {
    dispatch(userClearError);
  });

  // options formulaire et usage
  const options = {
    // resolver: yupResolver(contactValidator),
    reValidateMode: "onSubmit",
  };
  const { register, handleSubmit } = useForm(options);

  // Envoi des données dans le store
  // useEffect(() => {
  const onSubmit = ({ name, description }) => {
    axios
      .post("http://localhost:8080/api/project/create", { name, description })
      .then(({ data }) => {
        console.log(data);
        dispatch(data);
      })
      .catch((err) => {
        dispatch(contactSendError(err));
      });
  };
  // }, []);

  return (
    //   method='post' encType='multipart/form-data'
    <>
      {!admin ? (
        <p>cool</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          encType="multipart/form-data"
        >
          <input {...register("name")} />
          <input {...register("description")} />
          <RichTextEditor />
          <input {...register("link")} />
          <input type="file" name="picture" />
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
};
// to : projects-route (routes)
export default ProjectPage;
