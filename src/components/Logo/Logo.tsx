import { Box, Grid, Stack, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Box width={'100%'} height={'100%'} mb={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography align="center" fontSize={36} fontWeight={'light'} color={'white'}>
        medicomas
      </Typography>
    </Box>
  );
};
