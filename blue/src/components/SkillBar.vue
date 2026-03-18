<template>
  <div ref="wrapper" class="skill-bar-item">
    <div class="skill-bar-header">
      <span class="skill-bar-name font-display">{{ name }}</span>
      <span class="skill-bar-level font-display">{{ displayLevel }}%</span>
    </div>
    <div class="skill-bar-track">
      <div
        class="skill-bar-fill"
        :style="{
          width: animated ? level + '%' : '0%',
          background: fillGradient
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: 'primary'
  },
  delay: {
    type: Number,
    default: 0
  }
})

const wrapper = ref(null)
const animated = ref(false)
const displayLevel = ref(0)
let observer = null
let countInterval = null

const gradients = {
  primary:   'linear-gradient(90deg, #023E8A, #0077B6, #00B4D8)',
  secondary: 'linear-gradient(90deg, #0077B6, #00B4D8, #48CAE4)',
  success:   'linear-gradient(90deg, #1B8B36, #2DC653)',
  warning:   'linear-gradient(90deg, #C07A30, #F4A261)',
  info:      'linear-gradient(90deg, #0077B6, #4CC9F0)',
  accent:    'linear-gradient(90deg, #0096C7, #90E0EF)'
}

const fillGradient = computed(function () {
  return gradients[props.color] || gradients.primary
})

function startAnimation() {
  if (animated.value) {
    return
  }

  setTimeout(function () {
    animated.value = true

    var start = 0
    var target = props.level
    var step = Math.ceil(target / 40)

    countInterval = setInterval(function () {
      start = start + step
      if (start >= target) {
        start = target
        clearInterval(countInterval)
      }
      displayLevel.value = start
    }, 30)
  }, props.delay)
}

onMounted(function () {
  observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startAnimation()
          observer.unobserve(wrapper.value)
        }
      })
    },
    { threshold: 0.3 }
  )

  if (wrapper.value) {
    observer.observe(wrapper.value)
  }
})

onUnmounted(function () {
  if (observer) {
    observer.disconnect()
  }
  if (countInterval) {
    clearInterval(countInterval)
  }
})
</script>

<style scoped>
.skill-bar-item {
  margin-bottom: 18px;
}

.skill-bar-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 7px;
}

.skill-bar-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #023E8A;
  letter-spacing: 0.02em;
}

.v-theme--aquaticDark .skill-bar-name {
  color: #90E0EF;
}

.skill-bar-level {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0077B6;
  min-width: 36px;
  text-align: right;
}

.skill-bar-track {
  height: 8px;
  background: rgba(0, 119, 182, 0.1);
  border-radius: 999px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 180, 216, 0.35);
}
</style>
