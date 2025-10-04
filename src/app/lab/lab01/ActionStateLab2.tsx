'use client'
import { Box, Button, Paper, Typography } from "@mui/material";
import { useActionState } from "react";

async function myAction(curState: number, formData: FormData) {   
  const cmd = formData.get('cmd');
  
  const nextState = cmd === 'increase' ? curState + 1 
                  : cmd === 'decrease' ? curState - 1
                  : curState;
 
  return nextState;
}

export default function ActionStateLab1() {
  const [state, formAction] = useActionState(myAction, 0);

  return (
    <Paper sx={{p:3}}>
      <Typography variant="subtitle2" gutterBottom>useActionState 練習一A</Typography>
      <Box typography='body2' color='text.secondary'>多個 button。</Box>

      <form action={formAction}>
        <Box textAlign='center'>{state}</Box>

        <Button type='submit' name='cmd' value='increase'>Increment</Button>
        <Button type='submit' name='cmd' value='decrease'>Decrement</Button>
      </form>

    </Paper>
  )
}