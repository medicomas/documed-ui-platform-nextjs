import PatientService from "@/web/services/patients.service";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const Home = () => {

    const [ data, setData ] = useState<any>([]); 

    const fecth = async () => {
        let patients;
        try {
            patients = await PatientService.get();
        } catch (error) {
            console.error(error);
        } finally {
            setData(patients);
        }
    }

    useEffect(() => {
        fecth().then();
    }, [])

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


    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
}
