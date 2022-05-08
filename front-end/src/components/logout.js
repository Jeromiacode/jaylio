import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../store/actions/user-action';

// to : existing route
function Logout({to}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
      navigate({to});
      dispatch(userLogout());
  }

  return (
        <button onClick={handleClick}>Logout</button>
  )
}
// to : index.js (routes)
export default Logout