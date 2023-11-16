import { useState } from "react";
import { Box, Button, Container, Grid, Tab, TextField, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useForm } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import { campos } from "./campos";

export const ConsultationForm = () =>{

    const [value, setValue] = useState("0"); 
    const handleChange = (event:any, newValue:any) => { 
        setValue(newValue); 
    };
    const {register, handleSubmit} = useForm()
    const onSubmit = (data:any) =>{
        console.log(data)
    }

    const [diagnosisCount, setDiagnosisCount] = useState(1);
    const [diagnosisFields, setDiagnosisFields] = useState([1]);
      
    const addDiagnosis = () => {
        setDiagnosisCount(diagnosisCount + 1);
        setDiagnosisFields([...diagnosisFields, diagnosisCount + 1]);
    };

    const [medicineCount, setMedicineCount] = useState(1);
    const [medicineFields, setMedicineFields] = useState([1]);
      
    const addMedicine = () => {
        setMedicineCount(medicineCount + 1);
        setMedicineFields([...medicineFields, medicineCount + 1]);
    };

    return(
        <Container >
            <form onSubmit={handleSubmit(onSubmit)}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList  onChange={handleChange} variant="fullWidth" >
                            <Tab label="Enfermedad Actual" value="0" />
                            <Tab label="Plan de Trabajo" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="0" >
                        <Grid container alignItems={"start"}>

                            <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{fontWeight:"bold"}}>Relato Cronológico</Typography>
                                    <Box sx={{paddingRight:"10%", paddingTop:"5%", paddingBottom:"10%"}} >
                                        <TextField
                                            multiline
                                            rows={16}
                                            fullWidth
                                            placeholder="Ingrese aquí el relato cronológico."
                                            variant="filled"
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                            {...register('relato')}
                                        />
                                    </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} >
                                <Typography sx={{fontWeight:"bold"}} >Exploración Física</Typography>
                                {campos.map((campo, index) => (
                                    <Box
                                        key={index}
                                        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}
                                        marginBottom={1}
                                        marginTop={index === 0 ? '5%' : 0}>
                                    <Typography width="35%" sx={{ fontSize: '0.9rem' }}>
                                        {campo.label}
                                    </Typography>
                                    <TextField
                                        placeholder="Ingrese la información"
                                        variant="filled"
                                        {...register(campo.name)}
                                        fullWidth
                                        size="small"
                                        hiddenLabel
                                        InputProps={{ disableUnderline: true }}
                                    />
                                    </Box>
                                ))}
                                
                            </Grid>
                            <Typography sx={{fontWeight:"bold"}}>Constantes vitales</Typography>
                            <Grid item container xs={12} sm={12} md={12} sx={{marginTop:"3%"}}>
                                <Grid item xs={12} sm={12} md={4} >
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>Presión arterial</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"10%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('pArterial')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>mmHg</Typography>
                                    </Box>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>Temperatura</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"14%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('temperatura')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>°C</Typography>
                                    </Box>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>Saturación O<sub>2</sub></Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"12%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('saturacion')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>%</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} >
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>F. Respiratoria</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"10%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('fRespiratoria')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>rpm</Typography>
                                    </Box>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>F. Cardíaca</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"16%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('fCardiaca')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>lpm</Typography>
                                    </Box>
                                </Grid>
                                    
                                <Grid item xs={12} sm={12} md={4}>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>Peso</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"10%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('peso')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>Kg</Typography>
                                    </Box>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem"}}>Talla</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"10%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('talla')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>m</Typography>
                                    </Box>
                                    <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}} marginBottom={1}>
                                        <Typography sx={{order:"1",fontSize:"0.9rem", marginRight:0.5}}>IMC</Typography>
                                        <TextField
                                            sx={{order:"2",marginLeft:"10%" ,width:"25%"}}
                                            variant="filled"
                                            {...register('imc')}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                        />
                                        <Typography  sx={{order:"3",fontSize:"0.9rem", marginLeft:1}}>Kg/m<sup>2</sup></Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="1" >
                        <Grid container xs={12} sm={12} md={12} rowSpacing={2}>
                            <Grid item xs={12} sm={12} md={7}>
                                <Typography sx={{fontWeight:"bold", marginBottom:"3%"}}>Diagnóstico</Typography>
                                {diagnosisFields.map((field) => (
                                <TextField
                                    key={field}
                                    placeholder={`Nuevo diagnóstico`}
                                    variant="filled"
                                    fullWidth
                                    sx={{ maxWidth: '90%', marginBottom: 1 }}
                                    size="small"
                                    hiddenLabel
                                    InputProps={{ disableUnderline: true }}
                                    {...register(`diagnostico${field}`)}
                                />
                                ))}
                                <Box sx={{textAlign:"center"}} >
                                    <Button variant="outlined" size="medium" onClick={addDiagnosis} sx={{marginRight:"5%", fontFamily:"sans-serif" }} startIcon={<AddIcon />}>
                                        Agregar
                                    </Button>
                                </Box>
                                <Typography sx={{fontWeight:"bold", marginBottom:"3%"}}>Tratamiento</Typography>
                                {medicineFields.map((field) => (
                                    <Box>
                                        <TextField
                                            key={field}
                                            placeholder={`Medicamento`}
                                            variant="filled"
                                            fullWidth
                                            sx={{ maxWidth: '60%', marginBottom: 1 }}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                            {...register(`medicamento${field}`)}
                                        />
                                        <TextField
                                            key={field}
                                            placeholder={`Dosis`}
                                            variant="filled"
                                            fullWidth
                                            sx={{ maxWidth: '28.5%', marginBottom: 1, marginLeft:1}}
                                            size="small"
                                            hiddenLabel
                                            InputProps={{ disableUnderline: true }}
                                            {...register(`dosis${field}`)}
                                        />
                                    </Box>
                                ))}
                                <Box sx={{textAlign:"center"}} >
                                    <Button variant="outlined" size="medium" onClick={addMedicine} sx={{marginRight:"5%", fontFamily:"sans-serif" }} startIcon={<AddIcon />}>
                                        Agregar
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <Typography sx={{fontWeight:"bold"}}>Indicaciones</Typography>
                                <Box sx={{paddingRight:"10%", paddingTop:"5%", paddingBottom:"10%"}} >
                                    <TextField
                                        multiline
                                        rows={12}
                                        fullWidth
                                        placeholder="Agregue indicaciones"
                                        variant="filled"
                                        size="small"
                                        hiddenLabel
                                        InputProps={{ disableUnderline: true }}
                                        {...register('indicaciones')}
                                    />
                                </Box>
                                <Box sx={{textAlign:"center"}} >
                                    <Button variant="outlined" size="medium" sx={{marginRight:"5%", fontFamily:"sans-serif" }} startIcon={<EventIcon />}>
                                        Agendar reevaluación
                                    </Button>
                                </Box>
                            </Grid>  
                        </Grid>
                    </TabPanel>
                </TabContext>
            </form>
        </Container>
    )
}