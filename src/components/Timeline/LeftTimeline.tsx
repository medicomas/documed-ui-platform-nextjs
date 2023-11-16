import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, useTheme } from '@mui/material';

type Item = {
  eventName: string;
  date: string;
};

type Props = {
  list: Item[];
};

export const LeftTimeLine = ({ list }: Props) => {
  const theme = useTheme();

  const limitIndex = list.length - 1;

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {list.map((item, index) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" sx={{ borderWidth: 3, p: '5px' }} />
              {!(index === limitIndex) && (
                <TimelineConnector sx={{ background: theme.palette.primary.main, width: 2 }} />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight={'bold'}>{item.eventName}</Typography>
              {item.date}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
