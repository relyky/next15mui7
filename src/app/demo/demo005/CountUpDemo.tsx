"use client"
import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material';
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
  const countUpRef = useRef<HTMLDivElement | null>(null);
  const hand = useCountUp({ ref: countUpRef as any, end: end });

  useEffect(() => {
    hand.update(end)
  }, [end])

  return (
    <Box component='span' ref={countUpRef} sx={{ fontSize: '2em' }} />
  )
}