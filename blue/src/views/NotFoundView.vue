<template>
  <div class="not-found-view">

    <!-- Bulles de fond -->
    <div class="bubbles-bg" aria-hidden="true">
      <div v-for="n in 8" :key="n" :class="'bubble bubble--' + n" />
    </div>

    <v-container class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="9" md="7" class="text-center">

          <!-- Code erreur anim -->
          <div class="error-code font-display" aria-label="Erreur 404">
            <span class="digit digit--4-left">4</span>
            <span class="digit digit--0">
              <div class="bubble-zero" />
              <span>0</span>
            </span>
            <span class="digit digit--4-right">4</span>
          </div>

          <!-- Vague decorative -->
          <div class="wave-separator" aria-hidden="true">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,10 C40,20 80,0 120,10 C160,20 180,5 200,10" stroke="#00B4D8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            </svg>
          </div>

          <h1 class="not-found-title font-display mt-6">
            Page introuvable
          </h1>

          <p class="not-found-desc mt-4">
            Oups&nbsp;! Cette page semble avoir &eacute;t&eacute; emport&eacute;e par les vagues.
            <br />
            Revenez en eaux calmes.
          </p>

          <div class="d-flex justify-center ga-4 mt-10 flex-wrap">
            <v-btn
              to="/"
              color="primary"
              size="large"
              class="font-display"
              prepend-icon="mdi-home-outline"
              elevation="0"
            >
              Retour &agrave; l'accueil
            </v-btn>
            <v-btn
              to="/projects"
              color="secondary"
              variant="outlined"
              size="large"
              class="font-display"
              prepend-icon="mdi-briefcase-outline"
            >
              Voir les projets
            </v-btn>
          </div>

          <!-- Liens rapides -->
          <div class="quick-links mt-10">
            <p class="quick-links-label font-display">Acc&egrave;s rapide</p>
            <div class="d-flex justify-center ga-2 flex-wrap mt-3">
              <v-chip
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                :prepend-icon="item.icon"
                color="primary"
                variant="tonal"
                class="font-display"
                size="small"
                link
              >
                {{ item.label }}
              </v-chip>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const navItems = [
  { to: '/',         label: 'Accueil',   icon: 'mdi-home-outline' },
  { to: '/about',    label: 'A propos',  icon: 'mdi-account-outline' },
  { to: '/projects', label: 'Projets',   icon: 'mdi-briefcase-outline' },
  { to: '/contact',  label: 'Contact',   icon: 'mdi-email-outline' }
]
</script>

<style scoped>
.not-found-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #e8f4fd 0%, #caf0f8 40%, #ade8f4 100%);
}

.v-theme--aquaticDark .not-found-view {
  background: linear-gradient(160deg, #03045E, #023E8A 60%, #0077B6);
}

/* Bulles */
.bubbles-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 119, 182, 0.08);
  animation: bubble-rise 9s ease-in infinite;
}

.bubble--1 { width: 55px;  height: 55px;  left: 8%;   animation-delay: 0s;   animation-duration: 10s; }
.bubble--2 { width: 28px;  height: 28px;  left: 20%;  animation-delay: 1.2s; animation-duration: 7s; }
.bubble--3 { width: 75px;  height: 75px;  left: 40%;  animation-delay: 3s;   animation-duration: 12s; }
.bubble--4 { width: 18px;  height: 18px;  left: 55%;  animation-delay: 0.8s; animation-duration: 8s; }
.bubble--5 { width: 50px;  height: 50px;  left: 65%;  animation-delay: 2s;   animation-duration: 9.5s; }
.bubble--6 { width: 38px;  height: 38px;  left: 78%;  animation-delay: 4s;   animation-duration: 11s; }
.bubble--7 { width: 65px;  height: 65px;  left: 88%;  animation-delay: 1.5s; animation-duration: 13s; opacity: 0.5; }
.bubble--8 { width: 22px;  height: 22px;  left: 30%;  animation-delay: 5s;   animation-duration: 8s; }

@keyframes bubble-rise {
  0%   { transform: translateY(110vh) scale(0.3); opacity: 0; }
  20%  { opacity: 0.55; }
  80%  { opacity: 0.35; }
  100% { transform: translateY(-10vh) scale(1); opacity: 0; }
}

/* Code 404 */
.error-code {
  font-size: clamp(5rem, 22vw, 12rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.04em;
  position: relative;
  z-index: 1;
}

.digit {
  display: inline-block;
}

.digit--4-left {
  background: linear-gradient(160deg, #023E8A, #0077B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: float-left 3.5s ease-in-out infinite alternate;
}

.digit--4-right {
  background: linear-gradient(160deg, #0077B6, #00B4D8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: float-right 3.5s ease-in-out infinite alternate;
}

.digit--0 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #0077B6, #00B4D8, #48CAE4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse-zero 2.2s ease-in-out infinite;
}

.bubble-zero {
  position: absolute;
  inset: 10% 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,180,216,0.18), transparent 70%);
  animation: pulse-zero 2.2s ease-in-out infinite;
}

@keyframes float-left {
  from { transform: translateY(-6px) rotate(-2deg); }
  to   { transform: translateY(6px) rotate(2deg); }
}

@keyframes float-right {
  from { transform: translateY(6px) rotate(2deg); }
  to   { transform: translateY(-6px) rotate(-2deg); }
}

@keyframes pulse-zero {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.04); }
}

/* Separateur vague */
.wave-separator {
  width: 200px;
  margin: 0 auto;
  opacity: 0.7;
}

.wave-separator svg {
  width: 100%;
  height: 20px;
}

/* Texte */
.not-found-title {
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #023E8A;
}

.v-theme--aquaticDark .not-found-title {
  color: #90E0EF;
}

.not-found-desc {
  color: #4A6785;
  font-size: 1.05rem;
  line-height: 1.7;
  font-family: var(--font-body);
}

.v-theme--aquaticDark .not-found-desc {
  color: rgba(202, 240, 248, 0.75);
}

/* Liens rapides */
.quick-links-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4A6785;
}

.v-theme--aquaticDark .quick-links-label {
  color: rgba(144, 224, 239, 0.6);
}
</style>
