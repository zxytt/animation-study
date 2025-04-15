'use client'

import { motion, useMotionValue } from 'motion/react'

export default function MotionValue() {

  const scale = useMotionValue(1)

  const changeFn = (e) => {
    scale.set(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-around h-full">
      <motion.div
        className='w-20 h-20 bg-red-500'
        style={{ scale }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <input type='range' min={0.5} max={5} step={0.01} onChange={changeFn}></input>
    </div>
  )
}
