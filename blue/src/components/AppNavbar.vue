<template>
  <v-app-bar
    :class="['app-navbar', { 'navbar-scrolled': isScrolled }]"
    :elevation="isScrolled ? 4 : 0"
    color="transparent"
    height="72"
  >
    <!-- Logo / Nom -->
    <v-app-bar-title>
      <router-link to="/" class="navbar-brand text-decoration-none d-flex align-center ga-2">
        <div class="brand-icon">
          <v-icon color="secondary" size="26">mdi-code-braces</v-icon>
        </div>
        <div class="brand-text font-display">
          <span class="brand-name">Lucas</span>
          <span class="brand-name brand-surname">&nbsp;Deudon</span>
        </div>
      </router-link>
    </v-app-bar-title>

    <!-- Navigation desktop -->
    <template v-slot:append>
      <nav class="d-none d-md-flex align-center ga-1 mr-2">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          variant="text"
          class="nav-link font-display"
          :class="{ 'nav-link--active': isActive(item.to) }"
          rounded="lg"
        >
          <v-icon start size="18">{{ item.icon }}</v-icon>
          {{ item.label }}
        </v-btn>
      </nav>

      <!-- Bouton theme -->
      <v-btn
        icon
        variant="text"
        class="mr-1"
        @click="$emit('toggle-theme')"
        :title="isDark ? 'Mode clair' : 'Mode sombre'"
      >
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>

      <!-- Menu mobile -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="mobileMenu = !mobileMenu"
      />
    </template>
  </v-app-bar>

  <!-- Drawer mobile -->
  <v-navigation-drawer
    v-model="mobileMenu"
    location="right"
    temporary
    width="280"
    class="mobile-drawer"
  >
    <div class="drawer-header pa-6">
      <div class="font-display text-h6 gradient-text font-weight-bold">Lucas Deudon</div>
      <div class="text-body-2 text-medium-emphasis mt-1">D&eacute;veloppeur Full-Stack</div>
    </div>
    <v-divider />
    <v-list nav class="pa-4">
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.label"
        rounded="xl"
        class="mb-1 font-display"
        @click="mobileMenu = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  theme: {
    type: String,
    default: 'aquaticLight'
  }
})

defineEmits(['toggle-theme'])

const route = useRoute()
const isScrolled = ref(false)
const mobileMenu = ref(false)

const isDark = computed(function () {
  return props.theme === 'aquaticDark'
})

const navItems = [
  { to: '/', label: 'Accueil', icon: 'mdi-home-outline' },
  { to: '/about', label: 'À propos', icon: 'mdi-account-outline' },
  { to: '/projects', label: 'Projets', icon: 'mdi-briefcase-outline' },
  { to: '/contact', label: 'Contact', icon: 'mdi-email-outline' }
]

function isActive(path) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(function () {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(function () {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-navbar {
  transition: background-color var(--transition-default), backdrop-filter var(--transition-default);
  backdrop-filter: blur(0px);
}

.navbar-scrolled {
  background-color: rgba(240, 249, 255, 0.88) !important;
  backdrop-filter: blur(18px) saturate(180%);
  border-bottom: 1px solid rgba(0, 180, 216, 0.18);
}

.v-theme--aquaticDark .navbar-scrolled {
  background-color: rgba(3, 4, 94, 0.88) !important;
  border-bottom: 1px solid rgba(72, 202, 228, 0.18);
}

.brand-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #0077B6, #00B4D8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 119, 182, 0.3);
  transition: transform var(--transition-default);
}

.navbar-brand:hover .brand-icon {
  transform: rotate(-8deg) scale(1.08);
}

.brand-text {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.brand-name {
  color: #0077B6;
}

.brand-surname {
  color: #00B4D8;
}

.v-theme--aquaticDark .brand-name {
  color: #90E0EF;
}

.v-theme--aquaticDark .brand-surname {
  color: #48CAE4;
}

.nav-link {
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #1A3A5C !important;
  transition: color var(--transition-default);
  position: relative;
  overflow: visible;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: linear-gradient(90deg, #0077B6, #00B4D8);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after,
.nav-link--active::after {
  transform: scaleX(1);
}

.nav-link--active {
  color: #0077B6 !important;
}

.v-theme--aquaticDark .nav-link {
  color: #90E0EF !important;
}

.v-theme--aquaticDark .nav-link--active {
  color: #48CAE4 !important;
}

.mobile-drawer {
  background: rgba(240, 249, 255, 0.97) !important;
  backdrop-filter: blur(20px);
}

.v-theme--aquaticDark .mobile-drawer {
  background: rgba(10, 25, 41, 0.97) !important;
}

.drawer-header {
  background: linear-gradient(135deg, rgba(0, 119, 182, 0.08), rgba(0, 180, 216, 0.12));
}
</style>
