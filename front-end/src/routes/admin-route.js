import React from "react";
import { useSelector } from "react-redux";
import AdminPage from "../pages/admin-page";
import Login from "../components/login";

const AdminRoute = () => {
  const connectedUser = useSelector((s) => s.user);
  const admin = connectedUser.isAdmin;

  return (
    <>
      {!admin ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <AdminPage />
        </>
      )}
    </>
  );
};
// to : index.js (routes)
export default AdminRoute;
