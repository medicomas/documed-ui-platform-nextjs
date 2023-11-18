import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Props = {
    onHandleSubmit: any
}

const schema = yup.object({
  names: yup.string().required('Names are required'),
  surnames: yup.string().required('Surnames are required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  roles: yup.array().of(yup.string()).min(1, 'At least one role must be selected'),
}).required();

const CreateUser = ({
    onHandleSubmit
}: Props) => {

  const { control, handleSubmit, formState: { errors }, register } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data:any) => {
    onHandleSubmit(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="names"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Names" error={!!errors.names} helperText={errors.names?.message} fullWidth sx={{ mt: 3, mb: 1 }} />}
      />
      <Controller
        name="surnames"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Surnames" error={!!errors.surnames} helperText={errors.surnames?.message} fullWidth sx={{mb: 1}} />}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" error={!!errors.email} helperText={errors.email?.message}fullWidth  sx={{mb: 1}} />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} type="password" label="Password" error={!!errors.password} helperText={errors.password?.message} fullWidth sx={{mb: 1}}/>}
      />
       <FormControl fullWidth>
        <InputLabel id="roles-label">Roles</InputLabel>
        <Controller
          name="roles"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              labelId="roles-label"
              label="Roles"
              multiple
            >
              <MenuItem value="ADMIN">ADMIN</MenuItem>
              <MenuItem value="DOCTOR">DOCTOR</MenuItem>
              {/* Add more roles as MenuItem components here */}
            </Select>
          )}
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{my: 3}} >
          <Typography>Agregar</Typography>
      </Button>
    </form>
  );
};

export default CreateUser;
