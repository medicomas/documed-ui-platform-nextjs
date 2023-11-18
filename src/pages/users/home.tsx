import { SearchBar } from "@/components/Search";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useCrud from "@/hooks/useCrud";
import UserService from "@/web/services/user.service";
import UserMngtService from "@/web/services/user-mngt.service";
import { Drawer } from "@/components/Drawer";
import CreateUser from "@/components/form/create-user-form";
import { useState } from "react";

export const UserMngt = () => {

    const {
        data,
        createEntity,
        search,
        clearSearch
      } = useCrud({
        service: UserMngtService,
      })

      const [ isOpenDrawer, setIsOpenDrawer ] = useState<boolean>(false);

    
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'names',
          headerName: 'Nombre',
          width: 200,
          //   editable: true,
        },
        {
          field: 'surnames',
          headerName: 'Apellidos',
          width: 200,
          //   editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          // editable: true,
        },
        {
          field: 'roles',
          headerName: 'Roles',
          width: 200,
          valueGetter: (params) => {
            return params.row.roles.map((role: any) => role.name).join(', ');

          },
          // editable: true,
        },
        // {
        //   field: 'document',
        //   headerName: 'Documento',
        //   width: 150,
        //   // editable: true,
        // },
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

    return (
        <>
        <Grid item xs={12} md={12} padding={5}>
        <Box width={"100%"} py={2}>
            <Grid container alignItems={"center"} >
              <Grid xs>
                {/* <SearchBar onSearch={handleSearch} onClear={handleClearSearch} /> */}
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
                // '& .MuiDataGrid-row.Mui-selected, [aria-selected=true]': {
                //   borderRadius: '5px',
                //   backgroundColor: green,
                //   color: white,
                //   fontWeight: 'normal',
                //   '&:hover': {
                //     backgroundColor: green,
                //   },
                // },
                // '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                //   outline: 'none !important',
                // },
              }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            />
          </Box>
        </Grid>
      <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} config={{
        metadata: {
          title: "Agregar Usuario"
        }
      }}>
              <CreateUser 
              onHandleSubmit={(e: any) => {
                createEntity(e);
                setIsOpenDrawer(false);
              }} />
      </Drawer>
      </>
    )
}