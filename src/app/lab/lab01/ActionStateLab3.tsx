'use client'
import { Box, Button, Paper, Typography } from "@mui/material";
import { useActionState } from "react";

interface IVip {
  paddleNum: number;
  vipName: string;

}

const initState: IVip = {
  paddleNum: 0,
  vipName: ''
}

async function submitAction(curState: IVip, formData: FormData) {
  const paddleNum = formData.get('paddleNum');
  const vipName = formData.get('vipName');

  const nextState:IVip = {
    paddleNum: Number(paddleNum),
    vipName: String(vipName),
  } 

  return nextState
}

export default function ActionStateLab3() {
  const [state, formAction] = useActionState(submitAction, initState);

  return (
    <Paper sx={{p:3}}>
      <Typography variant="subtitle2" gutterBottom>useActionState 練習三</Typography>

      <form action={formAction}>
        <input name='paddleNum' type='number' 
            required min='0' max='10' 
            defaultValue={state.paddleNum} />

        <input name='vipName' type='text'
            required  
            defaultValue={state.vipName} />

        <Button type='submit'>submit</Button>
      </form>

      <pre>state: {JSON.stringify(state)}</pre>
      
    </Paper>
  )
}