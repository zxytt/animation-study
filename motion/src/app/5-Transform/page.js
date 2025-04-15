'use client'

import { motion, useMotionValue, useTransform} from 'motion/react'

export default function Transform() {

  const sliderValue = useMotionValue(1)
  const opacity = useTransform(sliderValue, [1, 5], [0, 1])

  const changeFn = (e) => {
    sliderValue.set(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-around h-full">
      <motion.div
        className='w-20 h-20 bg-gray-500'
        style={{ opacity }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <input type='range' min={0.5} max={5} step={0.01} onChange={changeFn}></input>
    </div>
  )
}