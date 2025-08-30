import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { getInitData } from "./actions";
import CountUpDemo from "./CountUpDemo";

export default async function Demo001Page() {
  const initData = await getInitData();

  return (
    <Container>
      <Typography variant="h3">Demo005 Count Up</Typography>
      <Box typography="body1">next.js 為 SSR/MPA 網站。<br />
        此畫面伺服器端生成後才送下來。<br />
      </Box>

      <Alert severity="info" sx={{ my: 3 }}>
        initData: {initData.message}
      </Alert>

      <CountUpDemo />

    </Container>
  )
}