import PersonIcon from '@mui/icons-material/Person';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TagIcon from '@mui/icons-material/Tag';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const MenuList = [
    {
        label: "Dashboard",
        icon: DashboardIcon,
        path: "/dashboard"
    },
    {
        label: "My Profile",
        icon: PersonIcon,
        path: "/profile"
    },
    {
        label: "Activities",
        icon: PlayCircleOutlineIcon,
        path: "/activities"
    },
    {
        label: "Subscription",
        icon: MonetizationOnIcon,
        path: "/subscription"
    },
    {
        label: "Payment Hystory",
        icon: TagIcon,
        path: "/history"
    },
    {
        label: "Notifications",
        icon: MessageIcon,
        path: "/notifications"
    },
    {
        label: "Preferences",
        icon: SettingsIcon,
        path: "/preferences"
    },
    {
        label: "Help",
        icon: HelpIcon,
        path: "/help"
    }
];