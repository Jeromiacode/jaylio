// import { yupResolver } from '@hookform/resolvers/yup';
// import { contactValidator } from '../../validators/contact-val';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userClearError } from "../store/actions/user-action";
import { projectCreate } from "../store/actions/project-action";
import axios from "axios";
import styles from "./pages.module.css";
import RichTextEditor from "../components/rich-text-editor";

const ProjectPage = () => {
  // L'affichage de la page Projects variera si l'administrateur est connecté ou non
  const connectedUser = useSelector((s) => s.user);
  const token = connectedUser.token;

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

  const onSubmit = async (data) => {
    const { name, description } = data;

    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("name", name);
    formData.append("description", description);
    await fetch("http://localhost:8080/api/project/create", {
      method: "POST",
      body: formData,
    }).then((results) => dispatch(projectCreate(results)));
    reset();
  };

  // normalment on utilise la méthode .json() sur la response .then() mais grace a axios il le gère automatquement et on peu directement récupérer les data via le selecteur du même nom
  const [projects, setProjects] = useState([]);

  const getprojects = async () => {
    await axios.get("http://localhost:8080/api/project").then(({ data }) => {
      setProjects(data);
    });
  };

  useEffect(() => {
    getprojects();
  }, []);

  return (
    <>
      {!token ? (
        <>
          <div>
            {projects.map((p) => (
              <>
                <p>{p.name}</p>
                <img src={p.fileName} alt="" srcset="" />
              </>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.adminProject}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            encType="multipart/form-data"
          >
            {" "}
            <div>
              <label htmlFor="title">Name </label>
              <input {...register("name")}  placeholder='Required'/>
            </div>
            <div>
              <label htmlFor="title">Description </label>
              <textarea {...register("description")}  placeholder='Required'></textarea>
            </div>
            <div>
              <label htmlFor="title">GitHub </label>
              <input {...register("link")}  placeholder='Optional'/>
            </div>
            <div>
              <label htmlFor="title">File </label>
              <input {...register("file")} type="file" />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
// to : projects-route (routes)
export default ProjectPage;
