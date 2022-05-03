import { Box, Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userClearError, userLogin } from '../../store/actions/user-action';
import { Controller, useForm } from 'react-hook-form';
import { useRedirectLogged } from '../../hooks/redirect-hook';

// Validation du login (yup)
const loginSchema = yup.object({
    pseudo: yup.string().trim().required(),
    password: yup.string().required(),
}).required();


const LoginPage = () => {
    useRedirectLogged();

    const dispatch = useDispatch();

    // Lors du retour sur la page
    useEffect(() => {
        dispatch(userClearError);
    }, []);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            pseudo: '',
            password: ''
        },
        resolver: yupResolver(loginSchema),
        reValidateMode: 'onSubmit'
    });

    const onSubmit = ({ pseudo, password }) => {
        dispatch(userLogin({ pseudo, password }));
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box gap='20px' display='flex' flexDirection='column'  >
                    <Controller
                        render={({ field }) =>
                            <TextField
                                error={errors.pseudo}
                                fullWidth
                                label='Pseudo / E-mail'
                                {...field}
                            />
                        }
                        name='pseudo'
                        control={control}
                        defaultValue=''

                    />
                    <Controller
                        render={({ field }) =>
                            <TextField
                                error={errors.password}
                                fullWidth
                                label='Password'
                                type='password'
                                {...field} />
                        }
                        name='password'
                        control={control}
                        defaultValue=''


                    />

                    <Box alignSelf='flex-start'>
                        <Button variant='contained' type='submit' >Login</Button>
                    </Box>
                </Box>
            </form>
        </>

    );
};

// to : index.js (routes)
export default LoginPage;