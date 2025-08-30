"use client"
import { Box } from '@mui/material';
import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import CountUp, { useCountUp } from 'react-countup';

export default function CountUpDemo() {
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(0)

  const id = useId()
  const counterId = useMemo(() => `up-counter-${id}`, [id])

  const handleEnd = useCallback(() => {
    setStart(end)
  }, [])

  const hand = useCountUp({ ref: counterId, end: end, start: start, onEnd: handleEnd });

  useEffect(() => {
    hand.update(end)
  }, [end])

  return (
    <div>
      <div>Count-Up Demo: {counterId}</div>
      
      <Box component='span' id={counterId} sx={{fontSize:'2em'}} />

      <hr />
      <div>{start}~{end}</div>

      <button onClick={() => {
        setEnd(prev => prev + 7000)
      }}>下一段</button>

      <button onClick={() => {
        setEnd(prev => prev - 5000)
      }}>上一段</button>

    </div>
  )
}