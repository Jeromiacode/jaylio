import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';

function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
      navigate('/user/login');
      dispatch(userLogout());
  }

  return (
        <button onClick={handleClick}>Logout</button>
  )
}

export default LogoutPage