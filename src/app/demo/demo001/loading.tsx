import {Box, LinearProgress, Typography}  from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
      <Typography variant='h4'>Demo001 專屬的 Loading...</Typography>
    </Box>
  );
}
