import * as Yup from 'yup';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Button } from '@mui/material';
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email must be a valid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    // const formik = useFormik({
    //     initialValues: {
    //         id: '',
    //         password: '',
    //         //remember: true
    //     },
    //     validationSchema: LoginSchema,
    //     onSubmit: () => {
    //         navigate('/', { replace: true });
    //     }
    // });

    // const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    const handleLogin = () => {
        navigate('/', { replace: true });
    }
      
    return (
        <Stack spacing={2} alignItems="center" mt={2}>
          <TextField
          fullWidth
          sx={{
            display: 'flex',
            width: '400px',
            height: '52px',
            padding: '16px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', 
            borderRadius: '4px',
            border: '1px solid var(--Gray-Gray-200, #EEE)'
        }}
            name="username"
            label="아이디"
             />
          <TextField
          fullWidth
          sx={{
            display: 'flex',
            width: '400px',
            height: '52px',
            padding: '16px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', 
            borderRadius: '4px',
            border: '1px solid var(--Gray-Gray-200, #EEE)'
        }}
            type="password"
            name="password"
            label="암호"
            />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogin}
            sx={{
                display: 'flex',
                width: '400px',
                height: '44px',
                padding: '8px 22px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center' ,
                borderRadius: '4px',
                background: 'var(--Main-Blue-Blue-500, #067DFD)',
                color:'white'
            }}
            >
              Login
          </Button>
        </Stack>
    );
}

export default LoginForm;
