import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { getInitData } from "./actions";
import ClientForm1 from "./ClientForm1";
import ClientForm2 from "./ClientForm2";
import ClientForm3 from "./ClientForm3";

export default async function Lab01Page() {
  const initData = await getInitData();
  
  return (
    <Container>
      <Typography variant="h3">Lab02 - useActionState (server)</Typography>
      <Box><code>useActionState</code>真的價值在 Server mode 也有效。</Box>

      <Alert severity="info" sx={{ my: 3 }}>
        initData: {initData.message}
      </Alert>

      <ClientForm1 />

      <ClientForm2 />

      <ClientForm3 />

    </Container>
  )
}