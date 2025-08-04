"use client"
import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Drawer,
  Toolbar,
  styled,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import Footer from './Footer'
import NavAppBar from './NavAppBar';

// icons
//import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';

const drawerWidth = 240;

interface Props {
  children?: React.ReactElement<unknown>;
}

export default function ClippedDrawer(props: Props) {
  const theme = useTheme()
  const pathname = usePathname();
  const matchUp = useMediaQuery(theme.breakpoints.up('sm'))

  const [f_openDrawer, setOpenDrawer] = useState(true)
  //const [f_openDrawer, toggleDrawer] = useReducer((f: boolean, _: void) => !f, true)

  const toggleDrawer = useCallback(() => {
    setOpenDrawer(f => !f)
  }, [])

  useEffect(() => {
    //console.log('URL 已變更為:', pathname);
    if (!matchUp)
      setOpenDrawer(false)
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavAppBar matchUp={matchUp}
        onToggleDrawer={() => toggleDrawer()}
        onScrollTrigger={(trigger) => setOpenDrawer(false)}
      />
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
