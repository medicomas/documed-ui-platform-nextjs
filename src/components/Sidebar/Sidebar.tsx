import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { ItemLink } from './ItemLink';
import { FOOTER, HEADER } from '@/constants/ui';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { sidebarMenuOptions } from '@/routes/config';
import { Logo } from '../Logo/Logo';


export const Sidebar = () => {
  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
      <Box flex={1}>
        <Grid container item>
          <Grid
            item
            height={HEADER.HEIGHT}
            xs={12}
            mb={2}
            sx={{}}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Logo />
          </Grid>
          <Grid container item xs={12} gap={2}>
            {sidebarMenuOptions.map((ele) => {
              return (
                <Grid item key={ele.id} xs={12}>
                  <ItemLink
                    to={ele.path}
                    navItem={{
                      label: ele.title,
                      iconId: ele.iconId || '',
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <Box height={FOOTER.HEIGHT} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant="body2" color={'whitesmoke'}>
          {' '}
          Made with <FavoriteRoundedIcon fontSize={'small'} sx={{ mb: -0.5 }} /> by UNMSM
        </Typography>
      </Box>
    </Box>
  );
};
