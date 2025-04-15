'use client'

import { useState } from 'react'
import { motion, AnimatePresence} from 'motion/react'

export default function Page() {

  const [isVisible, setIsVisible] = useState(true)

 return (
  <div>
    <button onClick={() => setIsVisible(!isVisible)} className='px-4 py-2 rounded-md border border-gray-500 cursor-pointer'>切换</button>
    <AnimatePresence initial={false}>
      {
        isVisible &&
        <motion.div
          className="w-40 h-20 bg-gray-500 rounded-md text-white text-center mt-4"
          animate={{
            scale: [0, 1],
            rotate: [0, 720],
            opacity: [0, 1],
          }}
          exit={{
            scale: 0,
            rotate: 360,
            opacity: 0,
          }}
        >
          Card
        </motion.div>
      }
    </AnimatePresence>
  </div>
 )
}
