'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin','latin-ext'],
  display: 'swap',
});

/*
* ref→[Theming](https://mui.com/material-ui/customization/theming/)
*/
const theme = createTheme({
  palette: {
    mode: 'light', // 'light','dark'
    primary: {
      main: '#BF4690',
      dark: '#802F61',
      light: '#ED58B4',
    },
    secondary: {
      main: '#CA87B0',
    },
    info:{
      main: '#36A2EB',
    },
    success: {
      main: '#70C699',
    },
    warning:{
      main: '#FF9F40'
    },
    error: {
      main: '#FF6384',
    },
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: {
  //         variants: [
  //           {
  //             props: { severity: 'info' },
  //             style: {
  //               backgroundColor: '#60a5fa',
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
});

const defaultTheme = createTheme();

export default theme;