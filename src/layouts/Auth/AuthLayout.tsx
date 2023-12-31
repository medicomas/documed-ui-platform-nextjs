import { Logo } from '@/components/Logo/Logo';
import { Box, Grid, Stack, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Outlet } from 'react-router-dom';
import backgroundImage from '../../assets/login-image.png';

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
                <Typography variant="body2">Ⓒ Medicomas 2023</Typography>
                <Typography variant="body2">
                  <EmailOutlinedIcon sx={{ mb: -1 }} /> contacto@medicomas.com
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={5}>
          <Box
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: 'linear-gradient(109.6deg, rgb(9, 154, 151) 11.2%, rgb(21, 205, 168) 91.1%)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              height: '100vh',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
