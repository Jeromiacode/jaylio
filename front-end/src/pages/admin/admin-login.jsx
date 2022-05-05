import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userClearError, userLogin } from '../../store/actions/user-action';
import { useForm } from 'react-hook-form';
import { useRedirectLogged } from '../../hooks/redirect-hook';
import { loginValidator } from '../../validators/login-val';

const LoginPage = () => {
    // Si déjà loggé
    useRedirectLogged();

    const dispatch = useDispatch();
    // Lors du retour sur la page
    useEffect(() => {
        dispatch(userClearError);
    });

    // options formulaire et usage
    const options = {
        defaultValues: {
            pseudo: '',
            password: ''
        },
        resolver: yupResolver(loginValidator),
        reValidateMode: 'onSubmit'
    }
    const { register, handleSubmit } = useForm(options)

    // Envoi des données dans le store
    const onSubmit = ({ pseudo, password }) => {
        dispatch(userLogin({ pseudo, password }));
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('pseudo')} />
                    <input {...register('password')} />
                <button type="submit">Login</button>
            </form>
        </>

    );
};

// to : index.js (routes)
export default LoginPage;