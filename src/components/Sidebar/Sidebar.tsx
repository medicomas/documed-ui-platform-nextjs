import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { ItemLink } from './ItemLink';
import { FOOTER, HEADER } from '@/constants/ui';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { sidebarMenuOptions } from '@/routes/config';
import { Logo } from '../Logo/Logo';
import { useAppContext } from '@/context/AppContext';

export const Sidebar = () => {

  const { loading, isInConsult, setLoading, setIsInConsult } = useAppContext();

  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
      <Box flex={1} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <Grid container item sx={{ background: "blue" }} > */}
        {/* <Grid
            item
            height={HEADER.HEIGHT}
            xs={12}
            mb={2}
            sx={{
              background: "red"
            }}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Logo />
          </Grid> */}
        <Grid container item xs={12} gap={2}>
          <Grid item xs={12} justifyContent={'center'}>
            <Logo />
          </Grid>
          {sidebarMenuOptions.map((ele) => {

            if(!isInConsult && ele.id === "consultation") {
              return;
            }

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
        {/* </Grid> */}
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
