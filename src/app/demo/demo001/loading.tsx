import {Box, LinearProgress, Typography}  from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
      <Typography>Demo001 專屬的 Loading...</Typography>
    </Box>
  );
}
