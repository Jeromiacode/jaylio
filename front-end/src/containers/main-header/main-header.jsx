import React from "react";
import { useSelector } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';
import Logout from "../../components/logout";

const MainHeader = () => {
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;
  return (
    <header>
      <nav>
      {!admin ? (
        <>
          <Link to="/#home">JEROME DE PUYT</Link>
          <Link to="/#about">ABOUT</Link>
          <Link to="/#cv">SKILLS</Link>
          <Link to="/#contact">CONTACT</Link>
          <Link to="/projects">PROJECTS</Link>
        </>
      ) : (
        <>
          <Link to="/admin">Home</Link>
          <Link to="/admin/cv">CV</Link>
          <Link to="/admin/projects">PROJECTS</Link>
          <Logout to='/admin' />
        </>
      )}
      </nav>
    </header>
  );
};
// to : App.js
export default MainHeader;
