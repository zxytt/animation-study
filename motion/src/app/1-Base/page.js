'use client'

import { motion } from 'motion/react'

export default function Base() {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <motion.button 
        className="border-2 border-black px-4 py-2 rounded-md text-black font-bold text-[16px] cursor-pointer"
        animate={{
          scale: [1, 1.5, 1, 1.8, 1],
          rotate: [0, 0, 360, 0, 360],
  
          backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5,
        }}
        initial={{
          scale: 1,
          rotate: 0,
          backgroundColor: '#FF0000',
        }}
      >
        Hello world!
      </motion.button>
      <motion.button 
        className="border-2 border-black px-4 py-2 rounded-md text-black font-bold text-[16px] cursor-pointer"
        animate={{
          y: [0, 8, 0, 8, 0],
          x: [0, 0, 5, 0, 5],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.5,
          },
          backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'],
        }}
        initial={{
          scale: 1,
          rotate: 0,
          backgroundColor: '#FF0000',
        }}
      >
        Hello world!
      </motion.button>
      <motion.button 
        className=""
        animate={{
          scale:1.5,
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
            // 弹簧
            type: 'spring',
            stiffness: 100,
            damping: 10,
            velocity: 10,
            mass: 1,
            stiffness: 100,
          },
        }}
        initial={{
          scale: 1,
        }}
      >
        Hello world!
      </motion.button>
      <motion.button 
        className=""
        animate={{
          scaleY: 1.5,
          y: '50%',
          transition: {
            duration: 0.5,
            repeat: 3,
            repeatType: 'reverse',
            ease: 'easeIn',
            delay: 0.5,
          }
        }}
        initial={{
          scale: 1,
        }}
      >
        Hello world!
      </motion.button>
    </div>
  )
}
