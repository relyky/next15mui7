"use client"
import { useActionState } from "react"
import { Box, Button, Paper } from "@mui/material"
import { increment } from "./actions";

export default function ClientForm() {
  const [state, formAction, isPending] = useActionState(increment, 0);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>

      <form>
        <Box textAlign='center'>{state}</Box>
        <Button type='submit' formAction={formAction} disabled={isPending} >Increment</Button>
      </form>

    </Paper>
  )
}