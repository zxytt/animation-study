<template>
  <div class="flex itemx-center my-6">
    <button @click="boxStartFn">开始</button>
    <div ref="box" class="h-10 w-20 bg-red-500"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import gsap from 'gsap'

  const box = ref(null)
  const option = {
    x: [
      200, // px单位
      '+=200', // 相对值，元素在当前基础上再移动200px
      '40vw', // 视口单位
      () => window.innerWidth / 2, // 函数，返回值作为目标值
    ],
    rotation: [
      360, // 角度值
      '1.25rad' // 弧度值
    ],
    duration: 2, // 持续时间
    scale: 0.5, // 缩放
  }

  const boxStartFn = () => {
    gsap.to(box.value, {
      x: '+=100', // x轴移动
      rotation: 360, // 旋转
      duration: 2, // 持续时间
      scale: 0.5, // 缩放
      background: 'blue', // 背景颜色
      delay: 1, // 延迟，默认0.5
      repeat: -1, // 重复次数，默认0
      repeatDelay: 1, // 重复间隔时间，默认0
      yoyo: true, // 是否来回运动，默认false
      ease: 'bounce.out', // 动画缓动函数, 默认power1.out
      onStart: () => {
        console.log('动画开始')
      },
      onUpdate: () => {
        console.log('动画进行中')
      },
      onRepeat: () => {
        console.log('动画重复')
      },
      onReverseComplete: () => {
        console.log('动画反向执行后运动到变化起始点时触发')
      },
      onComplete: () => {
        console.log('动画结束')
      }
    })
  }

</script>

