import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthService } from '../../web/services/auth.service';

export const SignIn = () => {
  const gradient = 'linear-gradient(109.6deg, rgb(9, 154, 151) 11.2%, rgb(21, 205, 168) 91.1%)';
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = async (data) => {
    const res = await AuthService.login(data);
    if (res) navigate('/patients');

    // else{
    //     setErrorMessage('Por favor, revise los campos del formulario.');
    //     return;
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
          <Typography paddingY={3.2} component="h1" variant="h1" fontWeight={900} color="black">
            Medicomas
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
          <Typography paddingY={3.2} component="h1" variant="h1" fontWeight={700} color="black">
            Iniciar Sesión
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
          <Typography paddingY={3.2} variant="body1" color="black">
            ¡Bienvenido de nuevo! Por favor, inicie sesión.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* {errorMessage && (
                        <Alert severity="error">{errorMessage}</Alert>
                    )} */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: gradient, '&:hover': { background: gradient } }}
          >
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};
