import { Icons } from '@/models/icon.model';

import calendarFillIcon from 'remixicon-react/CalendarFillIcon';
import calendarLineIcon from 'remixicon-react/CalendarLineIcon';

import userHeartFillIcon from 'remixicon-react/UserHeartFillIcon';
import userHeartLineIcon from 'remixicon-react/UserHeartLineIcon';

import userSettingsFillIcon from 'remixicon-react/UserSettingsFillIcon';
import userSettingsLineIcon from 'remixicon-react/UserSettingsLineIcon';

import consultationFillIcon from 'remixicon-react/firstAidKitFillIcon';
import consultationLineIcon from 'remixicon-react/firstAidKitLineIcon';

export const sidebarIcons: Icons = {
  REMIXpatient_ON: userHeartFillIcon,
  REMIXpatient_OFF: userHeartLineIcon,
  REMIXscheduled_ON: calendarFillIcon,
  REMIXscheduled_OFF: calendarLineIcon,
  REMIXusers_ON: userSettingsFillIcon,
  REMIXusers_OFF: userSettingsLineIcon,
  REMIXconsultation_ON: consultationFillIcon,
  REMIXconsultation_OFF: consultationLineIcon,
};
