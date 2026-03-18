// src/directives/scrollReveal.js
// Directive v-scroll-reveal : anime les elements quand ils entrent dans le viewport

const scrollReveal = {
  mounted: function (el, binding) {
    var options = binding.value || {}
    var delay = options.delay || 0
    var direction = options.direction || 'up'
    var distance = options.distance || 28
    var duration = options.duration || 600

    // Style initial selon la direction
    var transformInit = 'translateY(' + distance + 'px)'
    if (direction === 'down') {
      transformInit = 'translateY(-' + distance + 'px)'
    } else if (direction === 'left') {
      transformInit = 'translateX(' + distance + 'px)'
    } else if (direction === 'right') {
      transformInit = 'translateX(-' + distance + 'px)'
    } else if (direction === 'scale') {
      transformInit = 'scale(0.92)'
    }

    el.style.opacity = '0'
    el.style.transform = transformInit
    el.style.transition =
      'opacity ' + duration + 'ms cubic-bezier(0.4,0,0.2,1) ' + delay + 'ms, ' +
      'transform ' + duration + 'ms cubic-bezier(0.4,0,0.2,1) ' + delay + 'ms'

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) translateX(0) scale(1)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: options.threshold || 0.12 }
    )

    observer.observe(el)
    el._scrollRevealObserver = observer
  },
  unmounted: function (el) {
    if (el._scrollRevealObserver) {
      el._scrollRevealObserver.disconnect()
    }
  }
}

export default scrollReveal
