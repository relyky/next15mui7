"use client"
import { useActionState} from "react"
import { Box, Button, Paper } from "@mui/material"
import { increment } from "./actions";

export default function ClientForm() { 
  const [state, formAction] = useActionState(increment, 0);

  return (
    <Paper sx={{p:3}}>

      <form action={formAction} >
        <Box textAlign='center'>{state}</Box>
        <Button type='submit'>Increment</Button>
      </form>
      
    </Paper>
  )
}