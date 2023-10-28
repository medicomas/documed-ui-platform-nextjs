import { Grid, Typography, IconButton } from '@mui/material';
import { AccountMenu } from './AccountMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { HEADER } from '@/constants/ui';
import { CustomBreadcrumbs } from './Breadcrumbs';

interface Props {
  handleToggle?: () => void;
}

export const Topbar = ({ handleToggle }: Props) => {


  return (
    <Grid
      container
      sx={{ 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        // borderBottom: '1px solid #e0e0e0' 
      }}
      height={HEADER.HEIGHT}
    >
      <Grid>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon color="secondary" />
        </IconButton>
        <Typography variant="h1" noWrap color={'black'} sx={{ fontWeight: 'bold' }}>
          <CustomBreadcrumbs />
        </Typography>
      </Grid>
      <Grid>
        <AccountMenu />
      </Grid>
    </Grid>
  );
};
