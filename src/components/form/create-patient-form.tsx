import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';

type Props = {
    onSubmit: any
}

const CreatePatientForm = ({
    onSubmit
}: Props) => {
  const [formData, setFormData] = useState({
    names: '',
    surnames: '',
    documentType: '',
    document: '',
    gender: '',
    phone_number: '',
    birthdate: ''
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombres"
        variant="outlined"
        name="names"
        value={formData.names}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        name="surnames"
        value={formData.surnames}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Document Type</InputLabel>
        <Select
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          label="Tipo de Documento"
        >
          <MenuItem value="DNI">DNI</MenuItem>
          {/* <MenuItem value="Passport">Passport</MenuItem> */}
          {/* Add other document types as needed */}
        </Select>
      </FormControl>
      <TextField
        label="Numero de Documento"
        variant="outlined"
        name="document"
        value={formData.document}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Genero</InputLabel>
        <Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          label="Gender"
        >
          <MenuItem value="F">Femenino</MenuItem>
          <MenuItem value="M">Masculino</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Teléfono"
        variant="outlined"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Birthdate"
        variant="outlined"
        name="birthdate"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={formData.birthdate}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <Box marginTop={2}>
        <Button type="submit" variant="contained" color="primary">
          <Typography>Agregar</Typography>
        </Button>
      </Box>
    </form>
  );
};

export default CreatePatientForm;
