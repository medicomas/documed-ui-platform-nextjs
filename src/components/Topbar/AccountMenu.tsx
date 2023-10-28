import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { 
  Typography, 
  Box, 
  Avatar, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  Divider, 
  Button 
} from '@mui/material';

import {  
  Settings, 
  Logout
} from '@mui/icons-material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');

  return (
    <React.Fragment>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '10px',
          textTransform: 'capitalize',
          padding: 2,
          paddingY: 4,
          minWidth: { xs: 'auto', sm: 215 },
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar sx={{ width: 36, height: 36 }}>PP</Avatar>
          <Box ml={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="body1" color={'black'}>
              Peter Parker
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <KeyboardArrowDownIcon htmlColor="black" />
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem disabled>
          <Avatar /> Mi Perfil
        </MenuItem>
        <Divider />
        <MenuItem disabled>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => goToLogin()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
