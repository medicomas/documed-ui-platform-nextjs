import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Grid, Drawer, Container, Backdrop, CircularProgress } from '@mui/material';

import { NAVBAR, MAIN_CONTAINER } from '@/constants/ui';

import { Sidebar, Topbar } from '@/components';
import ProfileService from '@/web/services/profile.service';
import { useAppContext } from '@/context/AppContext';

const background = '#1B9C9C';

export const MainContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [account, setAccount] = useState<any>(null);
  const { loading, isInConsult, setLoading, setIsInConsult, selectedPatient, setSelectedPatient, currentCita, setCurrentCita } = useAppContext();

  const fecth = async () => {
    let account;
    setLoading(true)
    try {
      account = await ProfileService.get();
    } catch (error) {
      console.error(error);
    } finally {
      setAccount(account);
      setLoading(false)
    }
  };

  useEffect(() => {
    fecth().then();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
  <>
      <Grid container sx={{ background: background }}>
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
              background: background,
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
              // border: 'none',
              // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            },
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: NAVBAR.WIDTH,
              background: background,
              // border: 'none',
              // borderWidth: '0px',
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Grid>
      <Grid item container xs sx={{ minHeight: `calc(100vh)`, background: MAIN_CONTAINER.BACKGROUND }}>
        <Container maxWidth={'xl'}>
          <Grid item xs={12}>
            <Topbar account={account} handleToggle={handleDrawerToggle} />
          </Grid>
          <Grid item flex={1}>
            <Outlet />
          </Grid>
        </Container>
      </Grid>
    </Grid>
  <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  </>

  );
};
