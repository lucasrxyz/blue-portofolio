<template>
  <v-app :theme="currentTheme">
    <AppNavbar :theme="currentTheme" @toggle-theme="toggleTheme" />
    <v-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

const currentTheme = ref('aquaticLight')

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'aquaticLight' ? 'aquaticDark' : 'aquaticLight'
}
</script>

<style>
/* ================================
   Reset & Base globale
   ================================ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --font-display: 'Exo 2', sans-serif;
  --font-body: 'Nunito', sans-serif;
  --transition-default: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-card: 0 4px 24px rgba(0, 119, 182, 0.10);
  --shadow-card-hover: 0 12px 40px rgba(0, 119, 182, 0.22);
  --radius-card: 20px;
}

html,
body {
  font-family: var(--font-body);
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.v-application {
  font-family: var(--font-body) !important;
}

h1, h2, h3, h4, h5, h6,
.headline,
.display-title {
  font-family: var(--font-display) !important;
  letter-spacing: -0.02em;
}

/* ================================
   Transition de pages
   ================================ */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ================================
   Utilitaires
   ================================ */
.font-display {
  font-family: var(--font-display) !important;
}

.font-body {
  font-family: var(--font-body) !important;
}

.gradient-text {
  background: linear-gradient(135deg, #0077B6, #00B4D8, #48CAE4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-spacing {
  padding-top: 96px;
  padding-bottom: 96px;
}

/* Aquatic glow effect */
.aqua-glow {
  box-shadow: 0 0 30px rgba(0, 180, 216, 0.3), 0 4px 24px rgba(0, 119, 182, 0.15);
}

/* Scrollbar stylisee */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f0f9ff;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #0077B6, #00B4D8);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #023E8A;
}

/* Fond aquatique pour le main */
.main-content {
  background: transparent;
}

/* Selection de texte */
::selection {
  background: rgba(0, 180, 216, 0.3);
  color: #023E8A;
}
</style>
