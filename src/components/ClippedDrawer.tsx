"use client"
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link as MuiLink,
  IconButton,
  styled,
} from '@mui/material';
import ThemeSwitch from './ThemeSwitch';

// icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useReducer } from 'react';

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
}

export default function ClippedDrawer(props: Props) {
  const [f_openDrawer, toggleDrawer] = useReducer((f: boolean, _: void) => !f, false);

  const handleDrawerToggle = () => {
    toggleDrawer();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Clipped drawer {`${f_openDrawer}`}
          </Typography>

          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor='left'
        open={f_openDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Main open={f_openDrawer}>
        <Toolbar />
        <Box component="article" sx={{ minHeight: 'calc(100vh - 144px)' }}>
          {props.children}
        </Box>
        <Footer />
      </Main>
    </Box>
  );
}

//-----------------------------------------------------------------------------

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: open
      ? theme.transitions.easing.easeOut
      : theme.transitions.easing.sharp,
    duration: open
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? 0 : `-${drawerWidth}px`,
}));

//-----------------------------------------------------------------------------
const Footer = () => (
  <Box component="footer">
    <Divider variant='middle' sx={{ my: 1 }} />
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  </Box>
)
