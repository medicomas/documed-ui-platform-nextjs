import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Grid, Drawer, Container } from '@mui/material';

import { NAVBAR } from '@/constants/ui';

import { Sidebar, Topbar } from '@/components';


export const MainContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (<Grid container sx={{ backgroundColor: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
    <Grid item width={{ xs: 0, sm: NAVBAR.WIDTH }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: NAVBAR.WIDTH,
            background: 'linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)',
            border: 'none',
            borderWidth: '0px',
          },
        }}
      >
        <Sidebar />
      </Drawer>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            border: 'none',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          },
        }}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: NAVBAR.WIDTH,
            background: 'linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)',
            border: 'none',
            borderWidth: '0px',
          },
        }}
        open
      >
        <Sidebar />
      </Drawer>
    </Grid>
    <Grid item container xs sx={{ minHeight: `calc(100vh)` }}>
      <Container maxWidth={'xl'} >
        <Grid item xs={12}>
          <Topbar handleToggle={handleDrawerToggle} />
        </Grid>
        <Grid item flex={1}>
          <Outlet />
        </Grid>
      </Container>
    </Grid>
  </Grid>)
};
