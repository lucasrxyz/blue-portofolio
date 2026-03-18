<template>
  <div
    ref="container"
    :class="['reveal-container', { 'is-visible': isVisible }]"
    :style="revealStyle"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'up'
  },
  distance: {
    type: Number,
    default: 30
  },
  duration: {
    type: Number,
    default: 650
  },
  threshold: {
    type: Number,
    default: 0.1
  }
})

const container = ref(null)
const isVisible = ref(false)
let observer = null

const revealStyle = computed(function () {
  var transformInit = 'translateY(' + props.distance + 'px)'
  if (props.direction === 'down') {
    transformInit = 'translateY(-' + props.distance + 'px)'
  } else if (props.direction === 'left') {
    transformInit = 'translateX(' + props.distance + 'px)'
  } else if (props.direction === 'right') {
    transformInit = 'translateX(-' + props.distance + 'px)'
  } else if (props.direction === 'scale') {
    transformInit = 'scale(0.94)'
  }

  return {
    opacity: isVisible.value ? '1' : '0',
    transform: isVisible.value ? 'translateY(0) translateX(0) scale(1)' : transformInit,
    transition:
      'opacity ' + props.duration + 'ms cubic-bezier(0.4,0,0.2,1) ' + props.delay + 'ms, ' +
      'transform ' + props.duration + 'ms cubic-bezier(0.4,0,0.2,1) ' + props.delay + 'ms'
  }
})

onMounted(function () {
  observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(container.value)
        }
      })
    },
    { threshold: props.threshold }
  )

  if (container.value) {
    observer.observe(container.value)
  }
})

onUnmounted(function () {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.reveal-container {
  will-change: opacity, transform;
}
</style>
