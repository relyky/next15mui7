import { Box, Container, Typography } from "@mui/material";
import ActionStateLab1 from "./ActionStateLab1";
import ActionStateLab2 from "./ActionStateLab2";
import ActionStateLab3 from "./ActionStateLab3";
import ActionStateLab4 from "./ActionStateLab4";

export default async function Lab01Page() {
  return (
    <Container>
      <Typography variant="h3">Lab01 - useActionState (client)</Typography>

      <Box display='flex' flexWrap='wrap' gap={3}>
        <ActionStateLab1 />
        <ActionStateLab2 />
        <ActionStateLab3 />
        <ActionStateLab4 />
      </Box>
    </Container>
  )
}