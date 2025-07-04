"use client"
import { useReducer, useState } from 'react'
import { Button, Container, Link, Paper, Typography } from '@mui/material'
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import { map } from 'rxjs'

//=========================================================
// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [textChange$, setText] = createSignal<string>();
const [useText, text$] = bind(textChange$, "")

function TextInput() {
  const text = useText()

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  )
}

//=========================================================

const [useCharCount, charCount$] = bind(
  text$.pipe(
    map((text) => text.length)
  )
)

function CharacterCount() {
  const count = useCharCount()
  return <p>Character Count: {count}</p>
}

//=========================================================

export default function Demo004Page() {
  //const [count, setCount] = useState(0)

  return (
    <Container>
      <Typography variant='h3'>Demo004: Rx.js lab</Typography>
      <Paper variant='outlined' sx={{ px: 4, py: 2, mb: 3, display: 'flex', gap: 3 }}>
        <Link href="https://react-rxjs.org/docs/getting-started" target='_blank'>React-RxJS Docs</Link>
        <Link href="https://rxjs-dev.firebaseapp.com/guide/overview" target='_blank'>RxJS Docs</Link>
      </Paper>
      {/* <Button onClick={() => setCount(count + 1)} variant='outlined'>{count}</Button> */}

      <Subscribe>
        <TextInput />
        <CharacterCount />
      </Subscribe>

    </Container >
  )
}