import { Icons } from '@/models/icon.model';

import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

export const sidebarIcons: Icons = {
    dashboard_ON: SpaceDashboardTwoToneIcon,
    dashboard_OFF: SpaceDashboardOutlinedIcon,
    users_ON: GroupsTwoToneIcon,
    users_OFF: GroupsRoundedIcon,
};
