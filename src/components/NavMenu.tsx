import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material";
//import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
// icons
import InfoIcon from '@mui/icons-material/Info';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import MenuGroupIcon from '@mui/icons-material/GridViewRounded'

export default function NavMenu() {
  return (
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
      <Divider textAlign="left">
        <Box component="span" typography="body2">系統</Box>
      </Divider>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NextLink} href="/demo/demo002">
            <ListItemIcon>
              <MenuGroupIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary='DEMO002' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NextLink} href="/about">
            <ListItemIcon>
              <InfoIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary='關於我們' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}