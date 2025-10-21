'use client'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, LinearProgress, Paper, TextField, Typography, useEventCallback } from "@mui/material";
import { useActionState, useEffect, useState } from "react";

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

        <CheckInput
          label='Required'
          name='isEnterprise'
          defaultChecked={state.isEnterprise === 'Y'}
          onChange={console.log}
        />

        <Button type='submit'>submit</Button>
      </form>

      <pre>state: {JSON.stringify(state, null, 2)}</pre>

    </Paper>
  )
}

//---------------
const CheckInput = (props: {
  label?: string
  name?: string
  defaultChecked?: boolean
  onChange: (checked: boolean, name?: string) => void
}) => {
  const [innerChecked, setInnerChecked] = useState(false)

  const handleRefreshDefaultChecked = useEventCallback((defaultChecked?: boolean) => {
    if (defaultChecked === true && innerChecked !== true)
      setInnerChecked(true)
    else if (defaultChecked === false && innerChecked !== false)
      setInnerChecked(false)
  })

  useEffect(() => {
    handleRefreshDefaultChecked(props.defaultChecked)
  }, [props.defaultChecked])

  // events up
  useEffect(() => {
    props?.onChange(innerChecked, props?.name)
  }, [innerChecked])

  return (
    <FormGroup>
      <FormControlLabel label={props?.label}
        control={<Checkbox name={props?.name}
          checked={innerChecked}
          onChange={e => setInnerChecked(e.target.checked)}
        />}
      />
    </FormGroup>
  )
}