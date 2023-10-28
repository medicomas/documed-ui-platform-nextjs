import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';


export const SignIn = () => {
    const gradient ="linear-gradient(109.6deg, rgb(9, 154, 151) 11.2%, rgb(21, 205, 168) 91.1%)";
    const navigate = useNavigate();
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }} = useForm({ resolver: yupResolver(schema), })
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const onSubmit = (data) => {
        console.log(data);
        navigate('/dashboard');
    }
    
    return(
        <Container component='main' maxWidth='xs' >
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column'
                }} 
            >
                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} >
                    <Typography paddingY={3.2} component='h1' variant='h1' fontWeight={900} color='black' >
                        Medicomas
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} >
                    <Typography paddingY={3.2} component='h1' variant='h1' fontWeight={700} color='black' >
                        Iniciar Sesión
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}  >
                    <Typography paddingY={3.2} variant='body1' color='black' >
                        ¡Bienvenido de nuevo! Por favor, inicie sesión.
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <TextField 
                        margin='normal'
                        required
                        fullWidth
                        label='Email'
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                    margin='normal'
                    required 
                    fullWidth
                    label='Contraseña'
                    type='password'
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    />
                    <Button type='submit' fullWidth variant='contained'sx={{mt:3, mb:2, background:gradient,'&:hover':{background:gradient} }}>
                        Ingresar
                    </Button>
                </form>
            </Box>
        </Container>
    )
}