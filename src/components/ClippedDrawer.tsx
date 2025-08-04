"use client"
import { useEffect, useReducer } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  styled,
  useMediaQuery,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from './ThemeSwitch';
import Footer from './Footer'

// icons
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

interface Props {
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: {
  onTrigger: (trigger: boolean) => void;
  matchUp: boolean,
  children?: React.ReactElement<unknown>;
}) {
  const { children, matchUp } = props;
  const trigger = useScrollTrigger({
    target: undefined,
  });

  useEffect(() => {
    if (!matchUp)
      props.onTrigger(trigger)
  }, [trigger, matchUp])

  //console.log('HideOnScroll.render', { trigger })
  return (
    <Slide appear={false} direction="down" in={matchUp || !trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function ClippedDrawer(props: Props) {
  const theme = useTheme()
  const pathname = usePathname();
  const matchUp = useMediaQuery(theme.breakpoints.up('sm'))
  const [f_openDrawer, toggleDrawer] = useReducer((f: boolean, _: void) => !f, true)

  useEffect(() => {
    console.log('URL 已變更為:', pathname);
    if(!matchUp && f_openDrawer)
      toggleDrawer()
  }, [pathname]); // pathname 作為依賴項，確保它變動時觸發效果

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll matchUp={matchUp} onTrigger={(trigger) => { if (f_openDrawer) toggleDrawer() }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => toggleDrawer()}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Clipped drawer
            </Typography>

            <ThemeSwitch />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant={matchUp ? "persistent" : "temporary"}
        anchor='left'
        open={f_openDrawer}
        onClose={() => toggleDrawer()}
        aria-hidden={false}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        <Toolbar />
        <NavMenu />
      </Drawer>
      <Main open={f_openDrawer} matchUp={matchUp} >
        <Toolbar />
        <Box component="article" sx={{ minHeight: 'calc(100vh - 110px)' }}>
          {props.children}
        </Box>
        <Footer />
      </Main>
    </Box>
  );
}

//-----------------------------------------------------------------------------

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'matchUp' })<{
  open: boolean;
  matchUp: boolean;
}>(({ theme, open, matchUp }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: open
      ? theme.transitions.easing.easeOut
      : theme.transitions.easing.sharp,
    duration: open
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open || !matchUp ? 0 : `-${drawerWidth}px`,
}));
