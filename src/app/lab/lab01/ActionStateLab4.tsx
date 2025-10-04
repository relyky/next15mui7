'use client'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, LinearProgress, Paper, TextField, Typography } from "@mui/material";
import { useActionState, useState } from "react";

interface IVip {
  paddleNum: number;
  vipName: string;
  isEnterprise: string;
}

const initState: IVip = {
  paddleNum: 0,
  vipName: '',
  isEnterprise: 'Y'
}

async function submitAction(curState: IVip, formData: FormData) {
  const paddleNum = Number(formData.get('paddleNum'));
  const vipName = String(formData.get('vipName'));
  const isEnterprise = 'on' === formData.get('isEnterprise') ? "Y" : "N";

  console.log('submitAction', { paddleNum, vipName, isEnterprise });

  const nextState: IVip = {
    paddleNum: paddleNum,
    vipName: vipName,
    isEnterprise: isEnterprise
  }

  return nextState
}

export default function ActionStateLab4() {
  const [state, formAction, isPending] = useActionState(submitAction, initState);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="subtitle2" gutterBottom>useActionState 練習三</Typography>
      {isPending && <LinearProgress color='info' />}

      <form action={formAction}>
        <TextField name='paddleNum' label='Paddle No.' type='number' required
          slotProps={{ htmlInput: { min: 0, max: 10 } }}
          defaultValue={state.paddleNum}
        />

        <TextField name='vipName' label='VIP Name' required
          slotProps={{ htmlInput: { maxLength: 10 } }}
          defaultValue={state.vipName}
        />

        <FormGroup>
          <FormControlLabel label="Required"
            control={<Checkbox name='isEnterprise'
              defaultChecked={state?.isEnterprise === 'Y'}
              />}
          />
        </FormGroup>

        <Button type='submit'>submit</Button>
      </form>

      <pre>state: {JSON.stringify(state, null, 2)}</pre>

    </Paper>
  )
}