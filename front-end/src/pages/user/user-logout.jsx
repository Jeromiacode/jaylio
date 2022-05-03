import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';

function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onClick = () => {
      navigate('/user/login');
      dispatch(userLogout());
  }

  return (
    <Box alignSelf='flex-start'>
        <Button variant='contained' onClick={onClick} >Logout</Button>
    </Box>
  )
}

export default LogoutPage