<template>
  <div class="flex my-6">
    <div class="flex flex-col">
      <button @click="timeLineStartFn">开始</button>
      <button v-if="timeline" @click="() => timeline.pause()">暂停</button>
      <button v-if="timeline" @click="() => timeline.resume()">继续</button>
      <button v-if="timeline" @click="() => timeline.seek(0.5)">跳转节点</button>
      <button v-if="timeline" @click="() => timeline.progress(0.25)">跳转时间点</button>
      <button v-if="timeline" @click="() => timeline.reverse()">反向变化</button>
      <button v-if="timeline" @click="() => timeline.timeScale(2)" >加速</button>
      <button v-if="timeline" @click="() => timeline.timeScale(0.5)">减速</button>
      <button v-if="timeline" @click="() => timeline.kill()">销毁</button>
      <button v-if="timeline" @click="() => timeline.restart()">重启</button>
    </div>
    <div>
      <div ref="time1" class="h-10 w-20 mb-4 bg-blue-500"></div>
      <div ref="time2" class="h-10 w-20 mb-4 bg-yellow-500"></div>
      <div ref="time3" class="h-10 w-20 mb-4 bg-green-500"></div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import gsap from 'gsap'

  const timeline = ref(null)
  const time1 = ref(null)
  const time2 = ref(null)
  const time3 = ref(null)

  const timeLineStartFn = () => {
    const timeLine = gsap.timeline({
      repeat: -1,
      yoyo: true
    })
    timeline.value = timeLine
    /**
     * 第三个参数
     * 1： delay 延迟时间
     * <: 和前一个动画同时开始运动
     * +=：前一个动画结束后开始运动
     * +=1：前一个动画结束1秒后开始运动
     */
    timeLine.to(time1.value, {
      x: 400,
      duration: 2,
    }, 1)
    timeLine.to(time2.value, {
      x: '+=200',
      duration: 2,
    }, '<')
    timeLine.to(time3.value, {
      x: '20vw',
      duration: 2,
    }, '+=1')
  }
</script>
