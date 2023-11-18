import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import { LeftTimeLine } from '@/components/Timeline';
import { IconWrapper } from '@/components/Icons/icon-wrapper';

type ItemEvent = {
  eventName: string;
  date: string;
};

type List = {
  name: string;
  value: string;
};

type Props = {
  name?: string;
  lastName?: string;
  antecedentsList?: List[];
  events: ItemEvent[];
  buttonLabel: string;
  onAction: (...params: any) => void;
};

export const MedSummary = ({ name, lastName, antecedentsList, events, buttonLabel, onAction }: Props) => {
  return (
    <>
      <Grid item xs={12} mb={3}>
        <Typography fontSize={36} lineHeight={1.1}>
          {lastName},{' '}
          <Typography fontSize={36} fontWeight={'bold'}>
            {name}
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} mb={3}>
        {antecedentsList?.map((ele) => {
          return (
            <Box key={ele.value + ele.name} sx={{ display: 'flex', mb: 0.5 }}>
              <Box width={'30%'}>
                <Typography fontWeight={'bold'}>{ele.name}:</Typography>
              </Box>
              <Box width={'70%'}>
                <Typography>{ele.value.length === 0 ? "-" : ele.value}</Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <LeftTimeLine list={events} />
      </Grid>
      <Grid item xs={12} p={3}>
        <Button
          type="submit"
          onClick={onAction}
          fullWidth
          variant="contained"
          startIcon={<IconWrapper id="REMIXCheckIcon" />}
        >
          <Typography>{buttonLabel}</Typography>
        </Button>
      </Grid>
    </>
  );
};
