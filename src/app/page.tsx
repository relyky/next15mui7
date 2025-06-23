import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
//import ProTip from '@/components/ProTip';
//import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ outline: 'red dashed 2px', }}>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',          
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/demo/demo002" color="secondary" component={NextLink}>
          Go to demo002
        </Link>
      </Box>
    </Container>
  );
}