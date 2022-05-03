import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectLog = () => {
    const navigate = useNavigate();
    const user = useSelector(s => s.user);

    useEffect(() => {
        if (user.token) {
            navigate('/')
        }
    })
};