"use client"
import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material';
<<<<<<< HEAD
=======
import { useEffect, useId, useMemo, useState } from 'react'
>>>>>>> 5719fbc84507bfbd9f6f8f796d6df9aad0ebaa0e
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
<<<<<<< HEAD
  const countUpRef = useRef<HTMLDivElement | null>(null);
  const hand = useCountUp({ ref: countUpRef as any, end: end });
=======
  const id = useId()
  const counterId = useMemo(() => `up-counter-${id}`, [id])
  const hand = useCountUp({ ref: counterId, end: end });
>>>>>>> 5719fbc84507bfbd9f6f8f796d6df9aad0ebaa0e

  useEffect(() => {
    hand.update(end)
  }, [end])

  return (
<<<<<<< HEAD
    <Box component='span' ref={countUpRef} sx={{ fontSize: '2em' }} />
=======
    <Box component='span' id={counterId} sx={{ fontSize: '2em' }} />
>>>>>>> 5719fbc84507bfbd9f6f8f796d6df9aad0ebaa0e
  )
}