import PatientService from '@/web/services/patients.service';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowSelectionModel,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { Button, Grid, Typography } from '@mui/material';
import { LeftTimeLine } from '@/components/Timeline';
import { IconWrapper } from '@/components/Icons/icon-wrapper';
import { MedSummary } from '@/components/med-summary';
import AddIcon from '@mui/icons-material/Add';
import { Drawer } from '@/components/Drawer';
import CreatePatientForm from '@/components/form/create-patient-form';
import useCrud from '@/hooks/useCrud';
import { SearchBar } from '@/components/Search';
import AntecedentsService from '@/web/services/antecedents.service';
import AppointmentService from '@/web/services/appointment.service';
import ConsultationService from '@/web/services/consultation.service';
import { useAppContext } from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';

const green = '#1B9C9C';
const white = '#DDDFE9';

const listData: any[] = [
  {
    label: 'RAM',
    value: 'Ampicilina',
  },
  {
    label: 'DM2',
    value: 'Niega',
  },
  {
    label: 'HTA',
    value: 'Losartan 50 mg c/24h',
  },
  {
    label: 'QX',
    value: 'Cesárea (3 veces)',
  },
];

const events = [
  { eventName: 'Constipación', date: '02/09/23' },
  { eventName: 'Hiperglicemia, otra hiperlipidemia', date: '25/07/23' },
  { eventName: 'Pancreatitis', date: '21/07/23' },
];

export const Home = () => {

  const { loading, isInConsult, setLoading, setIsInConsult, selectedPatient, setSelectedPatient, currentCita, setCurrentCita } = useAppContext();

  const navigate = useNavigate();

  const {
    data,
    createEntity,
    search,
    clearSearch
  } = useCrud({
    service: PatientService
  })

  const [ antecedentList, setAntecedentList ] = useState<any>(null);
  const [ isOpenDrawer, setIsOpenDrawer ] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'names',
      headerName: 'Nombre',
      width: 150,
      //   editable: true,
    },
    {
      field: 'surnames',
      headerName: 'Apellidos',
      width: 150,
      //   editable: true,
    },
    {
      field: 'gender',
      headerName: 'Genero',
      width: 150,
      // editable: true,
    },
    {
      field: 'documentType',
      headerName: 'Tipo de Documento',
      width: 150,
      // editable: true,
    },
    {
      field: 'document',
      headerName: 'Documento',
      width: 150,
      // editable: true,
    },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const handleSearch = (query: string) => {
    search(query);
  };

 

const fecthAntecedents = async (id: number) => {
    let ants; 
    setLoading(true);

    try {
      ants =  await AntecedentsService.getByPatientId(id);
    } catch (error) {
      console.error(error)
    } finally{
      setLoading(false);

    }
    return ants;
}

const initConsultation =  async () => {
  setLoading(true);

  try {
    const res = await AppointmentService.makeInstAppoinment(selectedPatient.id);
    const currentCitajeje = await ConsultationService.init(selectedPatient.id, res.id);
    setCurrentCita(currentCitajeje);
    setIsInConsult(true);
    navigate('/consultation'); 
  } catch (error) {
    console.error(error)
  } finally {

    // redirect      
     setLoading(false);

  }
}

useEffect(() => {
  if(selectedPatient) {
    fecthAntecedents(selectedPatient.id).then(
      (res) => setAntecedentList(res)
    )
  }
}, [selectedPatient])


  return (
    <>
      <Grid container>
        {selectedPatient && <Grid item container xs={12} md={4} p={5}>
          <MedSummary
            lastName={selectedPatient.surnames}
            name={selectedPatient.names}
            antecedentsList={antecedentList}
            events={events}
            buttonLabel="Iniciar Consulta"
            onAction={initConsultation}
          />
        </Grid>}
        <Grid item xs={12} md={selectedPatient ? 8 : 12} padding={5}>
        <Box width={"100%"} py={2}>
            <Grid container alignItems={"center"} >
              <Grid xs>
                <SearchBar onSearch={handleSearch} onClear={clearSearch} />
              </Grid>
            <Grid item pl={3}>
              <Button
                type="submit"
                onClick={() => setIsOpenDrawer(true)}
                fullWidth
                variant="outlined"
                startIcon={<AddIcon />}
              >
                <Typography>Agregar</Typography>
              </Button>
            </Grid>
            </Grid>
        </Box>
        <Box sx={{ height: 400, width: '100%', border: '1px solid #818497', borderRadius: '4px', padding: 2}}>
            <DataGrid
              rows={data}
              columns={columns}
              sx={{
                border: 'none',
                margin: 'auto',
                '&, [class^=MuiDataGrid]': { border: 'none' },
                '& .MuiDataGrid-row.Mui-selected, [aria-selected=true]': {
                  borderRadius: '5px',
                  backgroundColor: green,
                  color: white,
                  fontWeight: 'normal',
                  '&:hover': {
                    backgroundColor: green,
                  },
                },
                '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                  outline: 'none !important',
                },
              }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
                setSelectedPatient(data.find((e) => e.id === newRowSelectionModel[0]))
              }}
              rowSelectionModel={rowSelectionModel}
            />
          </Box>
        </Grid>
      </Grid>
      <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} config={{
        metadata: {
          title: "Agregar Paciente"
        }
      }}>
              <CreatePatientForm onSubmit={(e: any) => {
                createEntity(e);
                setIsOpenDrawer(false);
              }} />
      </Drawer>
    </>
  );
};
