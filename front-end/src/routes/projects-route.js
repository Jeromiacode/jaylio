import React from "react";
import { useSelector } from "react-redux";
import ProjectPage from "../pages/projects-page";

const ProjectRoute = () => {
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;
  console.log(connectedUser);

  return (
    <>
      {!admin ? (
        <>
          <p>Display</p>
        </>
      ) : (
        <>
          <ProjectPage />
        </>
      )}
    </>
  );
};
// to : index.js (routes)
export default ProjectRoute;
