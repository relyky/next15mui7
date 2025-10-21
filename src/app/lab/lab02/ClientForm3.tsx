"use client"
import { useActionState, useEffectEvent, useState } from "react"
import { Box, Button, Paper, useEventCallback } from "@mui/material"
import { client3SubmitAction } from "./actions";
import { useFormStatus } from "react-dom";


const initState: IClient3State = {
  anum: 0,
  atext: 'show me the money'
}

export default function ClientForm() {
  const [state, formAction, isPending] = useActionState(client3SubmitAction, initState);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>

      <form action={formAction} >
        <Box textAlign='center'>anum: {state.anum}</Box>

        <InputText name='atext' />

        <Submit label='Increment' name='cmd' value='increase' />
        <Submit label='Decrement' name='cmd' value='decrease' />

        <FormStatusBoard />
      </form>

      <pre>action state: {JSON.stringify(state)}</pre>
    </Paper>
  )
}

//-------
function Submit(props: {
  label: string
  name: string
  value: string
}) {
  const status = useFormStatus();
  return <Button type='submit'
    name={props.name}
    value={props.value}
    loading={status.pending}>
    {props.label}
  </Button>
}


//-------
function FormStatusBoard() {
  const status = useFormStatus();

  console.log('FormStatusBoard', { status })
  return <pre>
    form status: {JSON.stringify(status, null, 2)}
  </pre>
}

//-------
function InputText(props: {
  name: string
}) {
  const [value, setValue] = useState<string>('')

  const handleChange = useEventCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  })

  return (
    <input type='text' name={props.name} value={value} onChange={handleChange} />
  )
}