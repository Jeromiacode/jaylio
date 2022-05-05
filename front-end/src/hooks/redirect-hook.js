import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// redirect the user if already logged in
export const useRedirectLogged = () => {
    const navigate = useNavigate();
    const user = useSelector(s => s.user);

    useEffect(() => {
        if (user.token) {
            navigate('/admin/logout')
        }
    })
};