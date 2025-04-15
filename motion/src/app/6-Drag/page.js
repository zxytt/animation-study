'use client'

import { motion, useMotionValue, useTransform} from 'motion/react'

export default function Drag() {

  const x = useMotionValue(0)
  const scale = useTransform(x, [0, 50, 100], [1, 1.5, 2])
  const borderRadius = useTransform(x, [0, 50, 100], ["0%", "25%", "50%"])
  const backgroundColor = useTransform(x, [0, 50, 100], ["#000", "#0f0", "#00f"])

  return (
    <div className="flex flex-col items-center justify-around h-full">
      <motion.div
        className='w-20 h-20 leading-20 text-center bg-blue-200'
        style={{ x, scale, borderRadius, backgroundColor }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        drag me
      </motion.div>
    </div>
  )
}