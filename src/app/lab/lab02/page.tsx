import { Alert, Box, Button, Container, Typography } from "@mui/material";
<<<<<<< HEAD
import { getInitData } from "./actions";
import ClientForm1 from "./ClientForm1";
import ClientForm2 from "./ClientForm2";
import ClientForm3 from "./ClientForm3";
=======
import ClientForm1 from "./ClientForm1";
import { getInitData } from "./actions";
>>>>>>> 1d26f881d38576a8b62783b95168561fbffa4a97

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
<<<<<<< HEAD

      <ClientForm2 />

      <ClientForm3 />
=======
>>>>>>> 1d26f881d38576a8b62783b95168561fbffa4a97

    </Container>
  )
}