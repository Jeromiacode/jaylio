import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from './pages.module.css'

const SkillsPage = () => {
  const connectedUser = useSelector((s) => s.user);
  const token = connectedUser.token;
    // options formulaire et validation
    const options = {
      // resolver: yupResolver(contactValidator),
      reValidateMode: 'onSubmit',
    };
    const { register, handleSubmit, reset } = useForm(options);
    const onSubmit = (data) => {
      console.log("Hello");
      reset();
    };
  return (
    <>
    {!token ? (
      <>
      <div className={styles.skillsPage}></div>
      </>
    ) : (
      <>
      <h1>Handle CV change</h1>
      </>
    )}
  </>
  );
};

// to : home-route (routes)
export default SkillsPage;