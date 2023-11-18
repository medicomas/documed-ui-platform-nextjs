import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Grid, Typography } from '@mui/material';

type Metadata = {
    title: string
}

type Config = {
    width?: number
    metadata: Metadata
};

type Props = {
    isOpen: boolean
    setIsOpen: any
    children?: React.ReactNode
    config?: Config
}

const CustomDrawer = ({
    isOpen,
    setIsOpen,
    children,
    config
}: Props) => {
    return (
    <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {
            config ? (
                <Box width={config.width ?? 600}>
                    <Grid container p={4}>
                        <Grid item xs={12}>
                            <Typography variant='h2'>{config.metadata.title}</Typography>
                        </Grid>
                        <Grid item>
                            {children}
                        </Grid>
                    </Grid>
                </Box> 
            ) : (
                <Box width={600}>
                    {children}
                </Box> 
            )
        }
      </Drawer>
    );
}

export {
    CustomDrawer as Drawer
}
