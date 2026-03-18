<template>
  <footer class="app-footer">
    <!-- Vague decorative -->
    <div class="footer-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
          class="wave-fill"
        />
      </svg>
    </div>

    <div class="footer-content">
      <v-container>
        <v-row align="center" justify="space-between">
          <!-- Gauche : nom et tagline -->
          <v-col cols="12" md="4" class="text-center text-md-left">
            <div class="font-display footer-name">Lucas Deudon</div>
            <div class="footer-tagline">D&eacute;veloppeur Full-Stack &bull; BTS SIO SLAM</div>
          </v-col>

          <!-- Centre : liens rapides -->
          <v-col cols="12" md="4" class="text-center">
            <div class="d-flex justify-center ga-2 flex-wrap">
              <v-btn
                v-for="item in links"
                :key="item.to"
                :to="item.to"
                variant="text"
                size="small"
                class="footer-link font-display"
              >
                {{ item.label }}
              </v-btn>
            </div>
          </v-col>

          <!-- Droite : liens sociaux -->
          <v-col cols="12" md="4" class="d-flex justify-center justify-md-end ga-2">
            <v-btn
              v-for="social in socials"
              :key="social.href"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              icon
              variant="tonal"
              color="secondary"
              size="36"
              class="social-btn"
            >
              <v-icon size="18">{{ social.icon }}</v-icon>
              <v-tooltip activator="parent" location="top">{{ social.label }}</v-tooltip>
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="my-4 footer-divider" />

        <div class="text-center footer-copy">
          &copy; {{ currentYear }} Lucas Deudon &mdash; Fait avec
          <v-icon size="14" color="secondary">mdi-heart</v-icon>
          Vue&nbsp;3 &amp; Vuetify
        </div>
      </v-container>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(function () {
  return new Date().getFullYear()
})

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'A propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
]

const socials = [
  {
    href: 'https://github.com/',
    icon: 'mdi-github',
    label: 'GitHub'
  },
  {
    href: 'https://linkedin.com/',
    icon: 'mdi-linkedin',
    label: 'LinkedIn'
  },
  {
    href: 'mailto:lucas.deudon@example.com',
    icon: 'mdi-email',
    label: 'Email'
  }
]
</script>

<style scoped>
.app-footer {
  position: relative;
  background: transparent;
  margin-top: 0;
}

.footer-wave {
  width: 100%;
  line-height: 0;
  overflow: hidden;
}

.footer-wave svg {
  display: block;
  width: 100%;
  height: 70px;
}

.wave-fill {
  color: #023E8A;
}

.v-theme--aquaticDark .wave-fill {
  color: #03045E;
}

.footer-content {
  background: #023E8A;
  padding: 40px 0 24px;
}

.v-theme--aquaticDark .footer-content {
  background: #03045E;
}

.footer-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.footer-tagline {
  font-size: 0.82rem;
  color: rgba(202, 240, 248, 0.75);
  margin-top: 4px;
  font-family: var(--font-body);
}

.footer-link {
  color: rgba(202, 240, 248, 0.85) !important;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color var(--transition-default);
}

.footer-link:hover {
  color: #48CAE4 !important;
}

.social-btn {
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 180, 216, 0.4);
}

.footer-divider {
  border-color: rgba(72, 202, 228, 0.2) !important;
}

.footer-copy {
  font-size: 0.78rem;
  color: rgba(202, 240, 248, 0.6);
  font-family: var(--font-body);
}
</style>
