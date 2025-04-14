<template>
  <div class="w-screen h-screen p-4 bg-white">
    <button @click="resetFn" class="mr-4">重置</button>
    <Base />
    <Timeline />
  </div>
</template>

<script setup>
  import Base from './components/Base.vue'
  import Timeline from './components/Timeline.vue'

  const resetFn = () => {
    window.location.reload()
  }
</script>