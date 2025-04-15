'use client'

import { motion, useMotionValue, useSpring} from 'motion/react'

export default function MotionValue() {
  const scale = useMotionValue(1)
  const scaleSpring = useSpring(scale, {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
    velocity: 0,
  })

  const changeFn = (e) => {
    scale.set(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <motion.div
        className='w-20 h-20 ml-10 bg-red-500'
        style={{ scale: scaleSpring }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <input type='range' min={0.5} max={5} step={0.01} onChange={changeFn}></input>
    </div>
  )
}
