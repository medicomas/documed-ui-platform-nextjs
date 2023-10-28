import * as React from 'react';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './data';

const ExternalViewSwitcher = ({
    currentViewName,
    onChange,
  }) => (
    <RadioGroup
      aria-label="Views"
      style={{ flexDirection: 'row' }}
      name="views"
      value={currentViewName}
      onChange={onChange}
    >
      <FormControlLabel value="Week" control={<Radio />} label="Week" />
      <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
      <FormControlLabel value="Month" control={<Radio />} label="Month" />
    </RadioGroup>
  );

/*   constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentViewName: 'Month',
    };

    this.currentViewNameChange = (e) => {
      this.setState({ currentViewName: e.target.value });
    };
  }
 */



  
  
  export const demo = ()=>{
  

    const [data] = useState(appointments)
    const [currentViewName, setCurrentViewName] = useState('Month')
    const currentViewNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentViewName(e.target.value);
      }

    return (


        <React.Fragment>
          <ExternalViewSwitcher
            currentViewName={currentViewName}
            onChange={currentViewNameChange}
          />
  
          <Paper>
            <Scheduler
              data={data}
              height={660}
            >
              <ViewState
                defaultCurrentDate="2018-07-25"
                currentViewName={currentViewName}
              />
              <WeekView
                startDayHour={10}
                endDayHour={19}
              />
              <WeekView
                name="Work Week"
                excludedDays={[0, 6]}
                startDayHour={9}
                endDayHour={19}
              />
              <MonthView />
  
              <Appointments />
            </Scheduler>
          </Paper>
        </React.Fragment>
      );
  }