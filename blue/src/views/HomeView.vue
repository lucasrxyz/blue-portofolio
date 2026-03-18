<template>
  <div class="home-view">

    <!-- =============================================
         HERO SECTION
         ============================================= -->
    <section class="hero-section">

      <!-- Bulles animees en arriere-plan -->
      <div class="bubbles-bg" aria-hidden="true">
        <div v-for="n in 12" :key="n" :class="'bubble bubble--' + n" />
      </div>

      <!-- Contenu hero -->
      <v-container class="hero-container">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" md="8" lg="7" class="text-center hero-content">

            <!-- Badge statut -->
            <div class="d-flex justify-center mb-6">
              <v-chip
                color="secondary"
                variant="tonal"
                prepend-icon="mdi-school-outline"
                class="status-chip font-display"
                size="small"
              >
                BTS SIO SLAM &ndash; 2&egrave;me ann&eacute;e &bull; Alternance SKF
              </v-chip>
            </div>

            <!-- Titre principal -->
            <h1 class="hero-title font-display">
              <span class="hero-greeting">Bonjour, je suis</span>
              <br />
              <span class="hero-name gradient-text">Lucas Deudon</span>
            </h1>

            <!-- Sous-titre -->
            <p class="hero-subtitle mt-4">
              D&eacute;veloppeur
              <span class="hero-highlight">&nbsp;Full-Stack&nbsp;</span>
              passionn&eacute; &bull; 20&nbsp;ans<br />
              Futur <strong>ing&eacute;nieur logiciel</strong> &ndash; C#, Vue&nbsp;3 &amp; .NET
            </p>

            <!-- CTA buttons -->
            <div class="d-flex justify-center ga-4 mt-10 flex-wrap">
              <v-btn
                to="/projects"
                color="primary"
                size="large"
                class="cta-btn font-display"
                elevation="0"
                prepend-icon="mdi-briefcase-outline"
              >
                Voir mes projets
              </v-btn>
              <v-btn
                to="/contact"
                color="secondary"
                variant="outlined"
                size="large"
                class="cta-btn font-display"
                prepend-icon="mdi-email-outline"
              >
                Me contacter
              </v-btn>
            </div>

            <!-- Scroll indicator -->
            <div class="scroll-indicator mt-12">
              <div class="scroll-line" />
              <v-icon color="secondary" size="20" class="scroll-icon">mdi-chevron-double-down</v-icon>
            </div>

          </v-col>
        </v-row>
      </v-container>

      <!-- Vagues animees en bas -->
      <div class="hero-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            class="wave wave-1"
            d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,200 L0,200 Z"
          />
          <path
            class="wave wave-2"
            d="M0,110 C300,50 600,150 900,110 C1100,80 1300,130 1440,110 L1440,200 L0,200 Z"
          />
          <path
            class="wave wave-3"
            d="M0,140 C240,110 480,160 720,140 C960,120 1200,160 1440,140 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
    </section>

    <!-- =============================================
         SECTION COMPETENCES RAPIDES
         ============================================= -->
    <section class="skills-preview section-spacing">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title font-display">Ce que je ma&icirc;trise</h2>
          <div class="section-underline" />
        </div>

        <v-row justify="center" ga="4">
          <v-col
            v-for="skill in mainSkills"
            :key="skill.title"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-card
              class="skill-card text-center pa-4"
              :color="skill.color"
              variant="tonal"
              hover
              rounded="xl"
            >
              <v-icon :icon="skill.icon" size="36" class="mb-3" />
              <div class="skill-title font-display">{{ skill.title }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- =============================================
         SECTION PROJETS EN VEDETTE
         ============================================= -->
    <section class="featured-projects section-spacing" style="background: rgba(0,119,182,0.04)">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title font-display">Projets en vedette</h2>
          <div class="section-underline" />
          <p class="section-desc mt-4">
            Quelques r&eacute;alisations repr&eacute;sentatives de mon parcours
          </p>
        </div>

        <v-row>
          <v-col
            v-for="project in featuredProjects"
            :key="project.id"
            cols="12"
            md="6"
          >
            <v-card
              class="featured-card"
              hover
              rounded="xl"
              elevation="0"
            >
              <div :class="'featured-card-header bg-' + project.color">
                <v-icon :icon="project.icon" size="48" color="white" />
              </div>
              <v-card-title class="font-display pt-4">
                {{ project.title }}
              </v-card-title>
              <v-card-subtitle class="font-body" v-html="project.subtitle" />
              <v-card-text>
                <div class="d-flex flex-wrap ga-1 mt-2">
                  <v-chip
                    v-for="tech in project.tech.slice(0, 4)"
                    :key="tech"
                    size="x-small"
                    color="primary"
                    variant="tonal"
                    class="font-display"
                    v-html="tech"
                  />
                  <v-chip
                    v-if="project.tech.length > 4"
                    size="x-small"
                    color="secondary"
                    variant="tonal"
                    class="font-display"
                  >
                    +{{ project.tech.length - 4 }}
                  </v-chip>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  to="/projects"
                  variant="text"
                  color="primary"
                  class="font-display"
                  append-icon="mdi-arrow-right"
                >
                  D&eacute;couvrir
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-10">
          <v-btn
            to="/projects"
            color="primary"
            variant="outlined"
            size="large"
            class="font-display"
            append-icon="mdi-briefcase-outline"
          >
            Tous mes projets
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- =============================================
         SECTION CTA CONTACT
         ============================================= -->
    <section class="cta-section section-spacing">
      <v-container>
        <v-card
          class="cta-card text-center pa-10"
          rounded="2xl"
          elevation="0"
        >
          <v-icon size="56" color="secondary" class="mb-4">mdi-handshake-outline</v-icon>
          <h2 class="font-display text-h4 font-weight-bold mb-3">
            Travaillons ensemble
          </h2>
          <p class="cta-text mb-8">
            Je suis ouvert aux opportunit&eacute;s professionnelles, stages et collaborations.<br />
            N\'h&eacute;sitez pas &agrave; me contacter !
          </p>
          <v-btn
            to="/contact"
            color="primary"
            size="x-large"
            class="font-display"
            elevation="0"
            prepend-icon="mdi-send-outline"
          >
            Prendre contact
          </v-btn>
        </v-card>
      </v-container>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import SectionReveal from '@/components/SectionReveal.vue'

const featuredProjects = computed(function () {
  return projects.filter(function (p) {
    return p.featured
  })
})

const mainSkills = [
  { title: 'Vue 3', icon: 'mdi-vuejs', color: 'success' },
  { title: 'C#', icon: 'mdi-language-csharp', color: 'primary' },
  { title: '.NET', icon: 'mdi-dot-net', color: 'secondary' },
  { title: 'SQL', icon: 'mdi-database', color: 'accent' },
  { title: 'HTML/CSS', icon: 'mdi-language-html5', color: 'warning' },
  { title: 'JavaScript', icon: 'mdi-language-javascript', color: 'info' }
]
</script>

<style scoped>
/* ================================
   HERO
   ================================ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    160deg,
    #e8f4fd 0%,
    #caf0f8 30%,
    #ade8f4 60%,
    #90e0ef 100%
  );
  overflow: hidden;
}

.v-theme--aquaticDark .hero-section {
  background: linear-gradient(160deg, #03045E 0%, #023E8A 40%, #0077B6 80%, #0096C7 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 140px;
}

/* Bulles animees */
.bubbles-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 119, 182, 0.08);
  animation: bubble-rise 8s ease-in infinite;
}

.bubble--1  { width: 60px;  height: 60px;  left: 5%;   animation-delay: 0s;   animation-duration: 9s; }
.bubble--2  { width: 30px;  height: 30px;  left: 15%;  animation-delay: 1s;   animation-duration: 7s; }
.bubble--3  { width: 80px;  height: 80px;  left: 25%;  animation-delay: 2.5s; animation-duration: 11s; }
.bubble--4  { width: 20px;  height: 20px;  left: 35%;  animation-delay: 0.5s; animation-duration: 8s; }
.bubble--5  { width: 50px;  height: 50px;  left: 50%;  animation-delay: 3s;   animation-duration: 10s; }
.bubble--6  { width: 40px;  height: 40px;  left: 60%;  animation-delay: 1.5s; animation-duration: 9s; }
.bubble--7  { width: 70px;  height: 70px;  left: 70%;  animation-delay: 4s;   animation-duration: 12s; }
.bubble--8  { width: 25px;  height: 25px;  left: 80%;  animation-delay: 2s;   animation-duration: 7.5s; }
.bubble--9  { width: 55px;  height: 55px;  left: 88%;  animation-delay: 3.5s; animation-duration: 9.5s; }
.bubble--10 { width: 35px;  height: 35px;  left: 42%;  animation-delay: 5s;   animation-duration: 8.5s; }
.bubble--11 { width: 90px;  height: 90px;  left: 10%;  animation-delay: 6s;   animation-duration: 14s; opacity: 0.5; }
.bubble--12 { width: 45px;  height: 45px;  left: 75%;  animation-delay: 1s;   animation-duration: 10.5s; }

@keyframes bubble-rise {
  0%   { transform: translateY(110vh) scale(0.4); opacity: 0; }
  20%  { opacity: 0.6; }
  80%  { opacity: 0.4; }
  100% { transform: translateY(-10vh) scale(1); opacity: 0; }
}

/* Hero content */
.hero-content {
  animation: hero-fade-in 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes hero-fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.status-chip {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero-title {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.hero-greeting {
  font-size: 0.45em;
  font-weight: 400;
  color: #1A3A5C;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.2em;
}

.v-theme--aquaticDark .hero-greeting {
  color: rgba(202, 240, 248, 0.8);
}

.hero-name {
  display: inline-block;
  animation: shimmer 4s ease-in-out infinite alternate;
}

@keyframes shimmer {
  from { filter: hue-rotate(0deg); }
  to   { filter: hue-rotate(20deg); }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #1A3A5C;
  line-height: 1.7;
  font-family: var(--font-body);
  font-weight: 400;
}

.v-theme--aquaticDark .hero-subtitle {
  color: rgba(202, 240, 248, 0.9);
}

.hero-highlight {
  display: inline-block;
  background: linear-gradient(135deg, #0077B6, #00B4D8);
  color: white;
  padding: 0 8px;
  border-radius: 6px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.cta-btn {
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0 28px;
  height: 52px;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}

.cta-btn:hover {
  transform: translateY(-2px);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0.6;
  animation: bounce 2.5s ease-in-out infinite;
}

.scroll-line {
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, transparent, #0077B6);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

/* Vagues hero */
.hero-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  line-height: 0;
}

.hero-waves svg {
  width: 100%;
  height: 180px;
  display: block;
}

.wave {
  animation: wave-move 6s ease-in-out infinite alternate;
}

.wave-1 {
  fill: rgba(0, 119, 182, 0.15);
  animation-duration: 7s;
}

.wave-2 {
  fill: rgba(0, 180, 216, 0.20);
  animation-duration: 9s;
  animation-direction: alternate-reverse;
}

.wave-3 {
  fill: rgba(240, 249, 255, 0.9);
  animation-duration: 5s;
}

.v-theme--aquaticDark .wave-3 {
  fill: rgba(10, 25, 41, 0.9);
}

@keyframes wave-move {
  from { d: path("M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,200 L0,200 Z"); }
  to   { d: path("M0,100 C400,20 800,160 1100,90 C1280,50 1380,110 1440,100 L1440,200 L0,200 Z"); }
}

/* ================================
   SECTION COMPETENCES
   ================================ */
.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #023E8A;
}

.v-theme--aquaticDark .section-title {
  color: #90E0EF;
}

.section-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0077B6, #00B4D8);
  border-radius: 4px;
  margin: 12px auto 0;
}

.section-desc {
  color: #4A6785;
  font-size: 1.05rem;
}

.v-theme--aquaticDark .section-desc {
  color: rgba(202, 240, 248, 0.7);
}

.skill-card {
  cursor: default;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover) !important;
}

.skill-title {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ================================
   PROJETS EN VEDETTE
   ================================ */
.featured-card {
  border: 1px solid rgba(0, 119, 182, 0.1) !important;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
  overflow: hidden;
}

.featured-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover) !important;
}

.featured-card-header {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0077B6, #00B4D8) !important;
}

/* ================================
   SECTION CTA
   ================================ */
.cta-card {
  background: linear-gradient(135deg, rgba(0, 119, 182, 0.06) 0%, rgba(0, 180, 216, 0.10) 100%) !important;
  border: 2px solid rgba(0, 119, 182, 0.15) !important;
}

.v-theme--aquaticDark .cta-card {
  background: linear-gradient(135deg, rgba(0, 119, 182, 0.2) 0%, rgba(0, 180, 216, 0.15) 100%) !important;
  border-color: rgba(72, 202, 228, 0.25) !important;
}

.cta-text {
  color: #4A6785;
  font-size: 1.05rem;
  line-height: 1.7;
}

.v-theme--aquaticDark .cta-text {
  color: rgba(202, 240, 248, 0.75);
}
</style>
