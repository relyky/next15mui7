"use client"
import { Box } from '@mui/material';
import { useEffect, useId, useMemo, useState } from 'react'
import { useCountUp } from 'react-countup';

export default function CountUpDemo() {
  const [end, setEnd] = useState<number>(0)

  return (
    <div>
      <div>Count-Up Demo</div>

      <CountUpWidget end={end} />

      <hr />
      <div>end: {end}</div>
      <button onClick={() => {
        setEnd(prev => prev + 7000)
      }}>下一段</button>

      <button onClick={() => {
        setEnd(prev => prev - 5000)
      }}>上一段</button>

    </div>
  )
}

//------------
const CountUpWidget: React.FC<{
  end: number
}> = ({ end }) => {
  const id = useId()
  const counterId = useMemo(() => `up-counter-${id}`, [id])
  const hand = useCountUp({ ref: counterId, end: end });

  useEffect(() => {
    hand.update(end)
  }, [end])

  return (
    <Box component='span' id={counterId} sx={{ fontSize: '2em' }} />
  )
}