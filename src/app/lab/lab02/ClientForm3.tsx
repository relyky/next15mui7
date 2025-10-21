"use client"
import { useActionState } from "react"
import { Box, Button, Paper } from "@mui/material"
import { client3SubmitAction } from "./actions";


const initState: IClient3State = {
  anum: 0,
  atext: 'show me the money'
}

export default function ClientForm() {
  const [state, formAction, isPending] = useActionState(client3SubmitAction, initState);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>

      <form action={formAction} >
        
        <Box textAlign='center'>{state.anum}</Box>

        <Button type='submit' name='cmd' value='increase' disabled={isPending}>Increment</Button>
        <Button type='submit' name='cmd' value='decrease' disabled={isPending}>Decrement</Button>
      </form>
      
      <pre>state: {JSON.stringify(state, null, 2)}</pre>
    </Paper>
  )
}