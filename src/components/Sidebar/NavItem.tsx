import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { IconWrapper } from '../Icons/icon-wrapper';

type Props = {
  iconId: string;
  label: string;
  isActive: boolean;
};

export const NavItem = ({ iconId, label, isActive }: Props) => {
  const style = isActive
    ? {
        // background: 'rgba(0, 10, 25, 0.20)',
        background: "#e4e9ec",
        //  background: "linear-gradient(179.4deg, rgb(12, 20, 69, 0.3) -16.9%, rgb(71, 30, 84, 0.3) 119.9%)",
        borderRadius: '4px',
        // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        // backdropFilter: "blur(6.3px)",
      }
    : {};

  return (
    <>
      <Box
        height={40}
        position={'absolute'}
        width={3}
        sx={{
          background: isActive ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : 'transparent',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
      ></Box>

      <Box
        mx={'10%'}
        width={'80%'}
        height={40}
        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', ...style }}
      >
        <Box
          mx={2}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '4px',
            // ...style
          }}
        >
          <IconWrapper id={`${iconId}${isActive ? '_ON' : '_OFF'}`} 
          color={isActive ? '#16161A' : '#666f75'} 
          width={24} />
        </Box>
        <Typography
          color={isActive ? '#16161A' : '#666f75'}
          variant="body1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            // fontWeight: isActive ? 'bold' : 'normal',
          }}
        >
          {label}
        </Typography>
      </Box>
    </>
  );
};
