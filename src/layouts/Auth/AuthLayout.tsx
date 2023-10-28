import { Logo } from '@/components/Logo/Logo';
import { Box, Grid, Stack, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Box width={'100vw'} minHeight={'100vh'} sx={{}}>
      <Grid container>
        <Grid item container xs={12} md={7}>
          <Grid
            item
            container
            flexDirection={'column'}
            xs={12}
            paddingX={5}
            sx={{
              background: 'transparent linear-gradient(180deg, #FBFBFB 0%, #EFF0F4 100%) 0% 0% no-repeat padding-box',
            }}
          >
            <Grid item height={'120px'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
               {/* <Logo color="#000" />  */}
            </Grid>
            <Grid item xs display={'flex'} justifyContent={'flex-start'}>
              <Outlet />
            </Grid>
            <Grid item height={'70px'}>
              <Stack
                direction={'row'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                paddingX={3}
                sx={{ color: '#808084' }}
              >
                <Typography variant="body2">Ⓒ Juez Cachimbo 2023</Typography>
                <Typography variant="body2">
                  <EmailOutlinedIcon sx={{ mb: -1 }} /> contacto@juezcachimbo.com
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={5}>
          <Box
            sx={{
              background: 'linear-gradient(218deg, #9181F4 -5.84%, #5038ED 106.73%)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              height: '100vh',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
