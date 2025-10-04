'use client'
import { Box, Button, Paper, Typography } from "@mui/material";
import { useActionState } from "react";

async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

export default function ActionStateLab1() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <Paper sx={{p:3}}>
      <Typography variant="subtitle2" gutterBottom>useActionState 練習一</Typography>

      <form>
        <Box textAlign='center'>{state}</Box>
        <Button type='submit' formAction={formAction}>Increment</Button>
      </form>

    </Paper>
  )
}