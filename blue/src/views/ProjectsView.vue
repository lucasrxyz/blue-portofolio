<template>
  <div class="projects-view">

    <!-- En-tete -->
    <section class="page-header">
      <v-container>
        <div class="text-center page-header-content">
          <v-chip
            color="secondary"
            variant="tonal"
            size="small"
            prepend-icon="mdi-briefcase-outline"
            class="font-display mb-4"
          >
            Portfolio
          </v-chip>
          <h1 class="page-title font-display">
            Mes&nbsp;<span class="gradient-text">Projets</span>
          </h1>
          <div class="section-underline mx-auto mt-3" />
          <p class="page-subtitle mt-4">
            Applications d&eacute;velopp&eacute;es en alternance &amp; en autonomie
          </p>
        </div>
      </v-container>
    </section>

    <!-- =============================================
         FILTRE CATEGORIES
         ============================================= -->
    <section class="filter-section">
      <v-container>
        <div class="d-flex justify-center ga-2 flex-wrap">
          <v-chip
            v-for="filter in filters"
            :key="filter.value"
            :color="activeFilter === filter.value ? 'primary' : 'default'"
            :variant="activeFilter === filter.value ? 'elevated' : 'tonal'"
            class="font-display filter-chip"
            @click="activeFilter = filter.value"
            size="default"
          >
            <v-icon start size="16">{{ filter.icon }}</v-icon>
            {{ filter.label }}
          </v-chip>
        </div>
      </v-container>
    </section>

    <!-- =============================================
         LISTE DES PROJETS
         ============================================= -->
    <section class="projects-list section-spacing">
      <v-container>

        <transition-group name="project-list" tag="div" class="projects-grid">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-item"
          >
            <v-card
              class="project-card"
              rounded="xl"
              elevation="0"
              hover
            >
              <!-- Entete coloree -->
              <div class="project-card-header">
                <div class="project-header-bg" :class="'project-header-bg--' + project.id" />
                <div class="project-header-content">
                  <div class="project-icon-wrap">
                    <v-icon :icon="project.icon" size="36" color="white" />
                  </div>
                  <v-chip
                    color="white"
                    variant="flat"
                    size="x-small"
                    class="font-display project-context-chip"
                    style="color:#023E8A"
                    v-html="project.category"
                  />
                </div>
              </div>

              <!-- Corps de la carte -->
              <v-card-text class="pa-5">
                <div class="d-flex align-start justify-space-between ga-2 mb-1">
                  <h2 class="project-title font-display">{{ project.title }}</h2>
                  <v-chip
                    size="x-small"
                    color="secondary"
                    variant="tonal"
                    class="font-display mt-1 flex-shrink-0"
                  >
                    {{ project.period }}
                  </v-chip>
                </div>

                <p class="project-subtitle font-body mb-3" v-html="project.subtitle" />
                <p class="project-desc font-body" v-html="project.description" />

                <!-- Stack techno -->
                <div class="d-flex flex-wrap ga-1 mt-4">
                  <v-chip
                    v-for="tech in project.tech"
                    :key="tech"
                    size="x-small"
                    color="primary"
                    variant="tonal"
                    class="font-display"
                    v-html="tech"
                  />
                </div>

                <!-- Contexte -->
                <div class="project-context mt-4">
                  <v-icon size="14" color="secondary" class="mr-1">mdi-information-outline</v-icon>
                  <span class="font-display" v-html="project.context" />
                </div>

                <!-- Bouton pour deployer les details -->
                <v-btn
                  :color="expandedProject === project.id ? 'primary' : 'secondary'"
                  variant="tonal"
                  class="font-display mt-4 w-100"
                  :append-icon="expandedProject === project.id ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="toggleProject(project.id)"
                  block
                >
                  {{
                    expandedProject === project.id
                      ? 'R&eacute;duire'
                      : 'D&eacute;tails &amp; captures d\'&eacute;cran'
                  }}
                </v-btn>
              </v-card-text>

              <!-- Section d&eacute;pliable : details + galerie -->
              <v-expand-transition>
                <div v-if="expandedProject === project.id">
                  <v-divider class="mx-5" style="border-color: rgba(0,119,182,0.12)" />

                  <div class="pa-5">
                    <!-- Description longue -->
                    <h3 class="font-display text-subtitle-1 font-weight-bold mb-3">
                      <v-icon size="18" color="primary" class="mr-1">mdi-text-box-outline</v-icon>
                      D&eacute;tails techniques
                    </h3>
                    <p class="project-long-desc font-body" v-html="project.longDescription" />

                    <!-- Galerie d'images -->
                    <h3 class="font-display text-subtitle-1 font-weight-bold mt-6 mb-3">
                      <v-icon size="18" color="secondary" class="mr-1">mdi-image-multiple-outline</v-icon>
                      Captures d\'&eacute;cran
                    </h3>
                    <ImageGallery
                      :images="project.images"
                      :project-id="project.id"
                    />
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </transition-group>

        <!-- Aucun resultat -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <v-icon size="64" color="secondary" class="mb-4">mdi-briefcase-search-outline</v-icon>
          <h3 class="font-display text-h6">Aucun projet dans cette cat&eacute;gorie</h3>
        </div>

      </v-container>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects.js'
import ImageGallery from '@/components/ImageGallery.vue'

const activeFilter = ref('all')
const expandedProject = ref(null)

const filters = [
  { value: 'all', label: 'Tous', icon: 'mdi-view-grid-outline' },
  { value: 'Web Full-Stack', label: 'Web Full-Stack', icon: 'mdi-web' },
  { value: 'Application bureau', label: 'Application bureau', icon: 'mdi-monitor-outline' }
]

const filteredProjects = computed(function () {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(function (p) {
    return p.category === activeFilter.value
  })
})

function toggleProject(id) {
  if (expandedProject.value === id) {
    expandedProject.value = null
  } else {
    expandedProject.value = id
  }
}
</script>

<style scoped>
/* En-tete */
.page-header {
  padding-top: 120px;
  padding-bottom: 56px;
  background: linear-gradient(160deg, #e8f4fd 0%, #caf0f8 100%);
}

.v-theme--aquaticDark .page-header {
  background: linear-gradient(160deg, #03045E, #023E8A);
}

.page-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #023E8A;
}

.v-theme--aquaticDark .page-title {
  color: #CAF0F8;
}

.page-subtitle {
  color: #4A6785;
  font-size: 1rem;
}

.v-theme--aquaticDark .page-subtitle {
  color: rgba(202, 240, 248, 0.7);
}

.section-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0077B6, #00B4D8);
  border-radius: 4px;
}

/* Filtres */
.filter-section {
  padding: 28px 0 0;
}

.filter-chip {
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: transform var(--transition-default);
}

.filter-chip:hover {
  transform: translateY(-2px);
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  gap: 28px;
}

@media (max-width: 599px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Carte projet */
.project-card {
  border: 1px solid rgba(0, 119, 182, 0.10) !important;
  overflow: hidden;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-card-hover) !important;
}

/* En-tete de carte */
.project-card-header {
  position: relative;
  height: 100px;
  overflow: hidden;
}

.project-header-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0077B6, #00B4D8);
}

.project-header-bg--repairstation {
  background: linear-gradient(135deg, #023E8A, #0077B6, #00B4D8);
}

.project-header-bg--horoquartzrh {
  background: linear-gradient(135deg, #006494, #0496FF, #48CAE4);
}

.project-header-bg--nestify {
  background: linear-gradient(135deg, #003566, #0077B6, #00B4D8);
}

.project-header-bg--cebex {
  background: linear-gradient(135deg, #03045E, #023E8A, #0077B6);
}

.project-header-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 14px 20px;
}

.project-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-context-chip {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

/* Texte carte */
.project-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #023E8A;
  letter-spacing: -0.01em;
}

.v-theme--aquaticDark .project-title {
  color: #90E0EF;
}

.project-subtitle {
  font-size: 0.88rem;
  color: #0077B6;
  font-weight: 600;
}

.project-desc {
  font-size: 0.9rem;
  color: #2D4A6B;
  line-height: 1.7;
}

.v-theme--aquaticDark .project-desc {
  color: rgba(202, 240, 248, 0.8);
}

.project-context {
  font-size: 0.78rem;
  color: #4A6785;
  display: flex;
  align-items: center;
}

.v-theme--aquaticDark .project-context {
  color: rgba(144, 224, 239, 0.7);
}

.project-long-desc {
  font-size: 0.92rem;
  color: #2D4A6B;
  line-height: 1.75;
}

.v-theme--aquaticDark .project-long-desc {
  color: rgba(202, 240, 248, 0.8);
}

/* Transitions liste */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(12px);
}
</style>
