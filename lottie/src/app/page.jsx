'use client'

import React, { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const dotLottieRefCallback = (isPlaying) => {
    setIsPlaying(isPlaying);
  };
  const play = () => {
    if(isPlaying){
      isPlaying.play()
    }
  };
  const pause = () => {
    if(isPlaying){
      isPlaying.pause()
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Lottie Animation Example</h1>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-64">
            <DotLottieReact
              src="/1.lottie"
              autoplay={isPlaying}
              loop
              style={{ width: '100%', height: '100%' }}
              dotLottieRefCallback={dotLottieRefCallback}
            />
          </div>
          
          <button
            onClick={play}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            {'Play'}
          </button>
          <button
            onClick={pause}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            {'Pause'}
          </button>
        </div>
      </div>
    </main>
  )
}
