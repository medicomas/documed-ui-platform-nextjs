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
  const [data, setData] = useState<any>([]);
  const [selectedPatient, setSelectedPatient] = useState<any>({
    surnames: 'Gamarra Ostos',
    names: 'Carmen',
  });

  const fecth = async () => {
    let patients;
    try {
      patients = await PatientService.get();
    } catch (error) {
      console.error(error);
    } finally {
      setData(patients);
    }
  };

  useEffect(() => {
    fecth().then();
  }, []);

  // useEffect(() => {
  //   console.log(selectedPatient);
  // }, [selectedPatient]);

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

  // useEffect(() => {
  //   console.log(rowSelectionModel);
  // }, [rowSelectionModel]);

  return (
    <Grid container>
      <Grid item container xs={12} md={4} p={5}>
        <MedSummary
          lastName={selectedPatient.surnames}
          name={selectedPatient.names}
          antecedentsList={listData}
          events={events}
          buttonLabel="Iniciar Consulta"
          onAction={() => {}}
        />
      </Grid>
      <Grid item xs={12} md={8} padding={5} sx={{ border: '1px solid #818497', borderRadius: '4px' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            sx={{
              border: 'none',
              margin: 'auto',
              '&, [class^=MuiDataGrid]': { border: 'none' },
              '& .MuiDataGrid-row.Mui-selected, [aria-selected=true]': {
                borderRadius: '5px',
                backgroundColor: green, // green
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
            // onRowSelectionModelChange={(rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails) => {
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            // }}
            // onRowClick={(info) => {
            //   console.log(info)
            // }}

            // checkboxSelection
            // disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};
