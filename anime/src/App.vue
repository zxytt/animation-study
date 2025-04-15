<template>
  <div class="w-screen h-screen flex flex-row">
    <div class="flex flex-col mr-4">
      <span>current time</span>
      <span class="flex items-center justify-center w-20 h-10 border-2 border-black">{{ value1 }}</span>
    </div>
    <div class="flex flex-col">
      <span>callback fired</span>
      <span class="flex items-center justify-center w-20 h-10 border-2 border-black">{{ value2 }}</span>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { animate, createTimeline, createTimer } from 'animejs'

  const value1 = ref(0) 
  const value2 = ref(0)
  
  createTimer({
    delay: 1000,
    duration: 100,
    loop: 10,
    frameRate: 30,
    onUpdate: time => value1.value = time.currentTime,
    onLoop: time => value2.value = time._currentIteration
  })
</script>