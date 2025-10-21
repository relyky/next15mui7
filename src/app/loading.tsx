import { Box, LinearProgress, Typography } from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
      <Typography variant='h1' textAlign='center'>App Loading</Typography>
    </Box>
  );
}
