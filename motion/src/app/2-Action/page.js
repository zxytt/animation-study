'use client'

import { motion } from 'motion/react'

export default function Action() {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <motion.button 
        className="border-2 border-black px-4 py-2 rounded-md text-black font-bold text-[16px] cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.05 }}
      >
        Hello world!
      </motion.button>
    </div>
  )
}

