import { Icons } from '@/models/icon.model';

import calendarFillIcon from "remixicon-react/calendarFillIcon"
import calendarLineIcon from "remixicon-react/calendarLineIcon"

import userHeartFillIcon from "remixicon-react/userHeartFillIcon"
import userHeartLineIcon from "remixicon-react/userHeartLineIcon"

import userSettingsFillIcon from "remixicon-react/userSettingsFillIcon"
import userSettingsLineIcon from "remixicon-react/userSettingsLineIcon"


export const sidebarIcons: Icons = {
    REMIXpatient_ON: userHeartFillIcon,
    REMIXpatient_OFF: userHeartLineIcon,
    REMIXscheduled_ON: calendarFillIcon,
    REMIXscheduled_OFF: calendarLineIcon,
    REMIXusers_ON: userSettingsFillIcon,
    REMIXusers_OFF: userSettingsLineIcon
};
