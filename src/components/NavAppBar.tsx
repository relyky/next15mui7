"use client"

import { useEffect } from "react";
import { AppBar, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material"

// icons
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitch from "./ThemeSwitch";

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

export default function NavAppBar(props: {
  matchUp: boolean,
  onToggleDrawer: () => void,
  onScrollTrigger: (trigger: boolean) => void,
}) {
  const { matchUp } = props

  return (
    <HideOnScroll matchUp={matchUp} onTrigger={props.onScrollTrigger}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.onToggleDrawer}
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
  )
}