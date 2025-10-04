import { Box, Container, Typography } from "@mui/material";
import ActionStateLab1 from "./ActionStateLab1";
import ActionStateLab2 from "./ActionStateLab2";

export default async function Lab01Page() {
  return (
    <Container>
      <Typography variant="h3">Lab01 - useActionState</Typography>

      <Box display='flex' gap={3}>
        <ActionStateLab1 />
        <ActionStateLab2 />
      </Box>
    </Container>
  )
}