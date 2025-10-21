"use client"
import { useActionState } from "react"
import { Box, Button, Paper } from "@mui/material"
import { client2SubmitAction } from "./actions";

export default function ClientForm() {
  const [state, formAction, isPending] = useActionState(client2SubmitAction, 0);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>

      <form action={formAction} >
        <Box textAlign='center'>{state}</Box>
        <Button type='submit' name='cmd' value='increase' disabled={isPending}>Increment</Button>
        <Button type='submit' name='cmd' value='decrease' disabled={isPending}>Decrement</Button>
      </form>
      
    </Paper>
  )
}