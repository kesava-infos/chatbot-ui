import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './header';
import { MenuList } from "./menuData";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    props.update(240)
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
    props.update(64)
  };
  const GetComponent = ({ Icon, path }) => {
    return <Icon className={location.pathname === path ? "text-lightRed" : "text-indigo"} />
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Drawer variant="permanent" open={open}>
        <div className='p-8'></div>
        <List>
          {MenuList.map((item, index) => (
            <div key={item.label} >
              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate(item.path)}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',
                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    <GetComponent Icon={item.icon} path={item.path} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={[
                      open
                        ? {
                          opacity: 1,
                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
