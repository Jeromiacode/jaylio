import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { userClearError, userLogin } from '../../../store/actions/user_action';
// import { useRedirectLog } from '../../../hooks/redirect-hook';
import userLogin from '../../../store/actions/user_action';

// schéma de validation (yup)
const loginSchema = yup.object({
    login: yup.string().trim().required(),
    password: yup.string().required(),
}).required();


const UserLogin2 = () => {
    // useRedirectLog();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch();
    // }, []);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            login: '',
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
                                error={errors.login}
                                fullWidth
                                label='Login / E-mail'
                                {...field}
                            />
                        }
                        name='login'
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
export default UserLogin2;