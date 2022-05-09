import React from "react";
import { useSelector } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';
import Logout from "../../components/logout";
import styles from './nav-menu.module.css'

function NavMenu() {
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;
  return (<>
    {!admin ? (
      <nav className={styles.userNav}>
        <Link to="/#home">JEROME DE PUYT</Link>
        <Link to="/#cv">SKILLS</Link>
        <Link to="/#contact">CONTACT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    ) : (
      <nav className={styles.adminNav}>
        <Link to="/admin">Home</Link>
        <Link to="/admin/cv">CV</Link>
        <Link to="/admin/projects">PROJECTS</Link>
        <Logout to='/admin' />
      </nav>
    )}
  </>)
};
  // to : main-header (containers)
  export default NavMenu;