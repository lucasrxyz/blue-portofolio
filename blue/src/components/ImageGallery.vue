<template>
  <div>
    <!-- Galerie Pinterest -->
    <div v-if="images.length > 0" class="pinterest-gallery">
      <div
        v-for="(src, index) in images"
        :key="src"
        class="gallery-item"
        @click="openLightbox(index)"
        :style="{ animationDelay: index * 60 + 'ms' }"
      >
        <div class="gallery-item-inner">
          <img
            :src="src"
            :alt="'Capture ' + (index + 1)"
            class="gallery-img"
            loading="lazy"
            @error="handleImageError"
          />
          <div class="gallery-overlay">
            <v-icon color="white" size="28">mdi-magnify-plus-outline</v-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- Placeholder si pas d'images -->
    <div v-else class="no-images text-center py-6">
      <v-icon size="48" color="secondary" class="mb-2">mdi-image-multiple-outline</v-icon>
      <p class="text-body-2 text-medium-emphasis">
        Les captures d'écran seront affichées ici.<br />
      </p>
    </div>

    <!-- Lightbox Dialog -->
    <v-dialog
      v-model="lightboxOpen"
      max-width="1100"
      :scrim="true"
    >
      <v-card rounded="xl" elevation="24" class="lightbox-card">
        <!-- Toolbar -->
        <v-toolbar
          color="transparent"
          density="compact"
          class="lightbox-toolbar"
        >
          <v-toolbar-title class="font-display text-body-2 font-weight-semibold">
            Capture {{ activeIndex + 1 }} / {{ images.length }}
          </v-toolbar-title>
          <template v-slot:append>
            <v-btn
              icon="mdi-close"
              variant="text"
              @click="lightboxOpen = false"
            />
          </template>
        </v-toolbar>

        <!-- Image principale -->
        <div class="lightbox-img-wrapper">
          <img
            v-if="images[activeIndex]"
            :src="images[activeIndex]"
            :alt="'Capture ' + (activeIndex + 1)"
            class="lightbox-img"
            @error="handleImageError"
          />

          <!-- Fleche gauche -->
          <v-btn
            v-if="images.length > 1"
            icon
            variant="elevated"
            color="white"
            class="lightbox-arrow lightbox-arrow--left"
            @click="previousImage"
            :disabled="activeIndex === 0"
          >
            <v-icon color="primary">mdi-chevron-left</v-icon>
          </v-btn>

          <!-- Fleche droite -->
          <v-btn
            v-if="images.length > 1"
            icon
            variant="elevated"
            color="white"
            class="lightbox-arrow lightbox-arrow--right"
            @click="nextImage"
            :disabled="activeIndex === images.length - 1"
          >
            <v-icon color="primary">mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <!-- Miniatures -->
        <div v-if="images.length > 1" class="lightbox-thumbnails pa-3 d-flex ga-2 justify-center flex-wrap">
          <div
            v-for="(src, idx) in images"
            :key="src"
            :class="['thumb', { 'thumb--active': idx === activeIndex }]"
            @click="activeIndex = idx"
          >
            <img
              :src="src"
              :alt="'Miniature ' + (idx + 1)"
              class="thumb-img"
              @error="handleImageError"
            />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: function () {
      return []
    }
  },
  projectId: {
    type: String,
    default: ''
  }
})

const lightboxOpen = ref(false)
const activeIndex = ref(0)

function openLightbox(index) {
  activeIndex.value = index
  lightboxOpen.value = true
}

function nextImage() {
  if (activeIndex.value < props.images.length - 1) {
    activeIndex.value = activeIndex.value + 1
  }
}

function previousImage() {
  if (activeIndex.value > 0) {
    activeIndex.value = activeIndex.value - 1
  }
}

function handleImageError(event) {
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  if (parent) {
    parent.classList.add('img-error')
  }
}
</script>

<style scoped>
/* ================================
   GALERIE PINTEREST (CSS columns)
   ================================ */
.pinterest-gallery {
  columns: 3 180px;
  column-gap: 12px;
}

@media (max-width: 600px) {
  .pinterest-gallery {
    columns: 2 120px;
  }
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  animation: gallery-fade-in 0.5s ease both;
}

@keyframes gallery-fade-in {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

.gallery-item-inner {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  line-height: 0;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 65, 120, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Placeholder erreur */
.gallery-item-inner.img-error {
  background: rgba(0, 119, 182, 0.08);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ================================
   LIGHTBOX
   ================================ */
.lightbox-card {
  background: #0A1929 !important;
  overflow: hidden;
}

.lightbox-toolbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.lightbox-img-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  max-height: 68vh;
  background: #05101A;
  overflow: hidden;
}

.lightbox-img {
  max-width: 100%;
  max-height: 68vh;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  transition: opacity 0.25s ease;
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.lightbox-arrow--left  { left: 12px; }
.lightbox-arrow--right { right: 12px; }

/* Miniatures */
.lightbox-thumbnails {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #05101A;
  overflow-x: auto;
}

.thumb {
  width: 64px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s, transform 0.2s;
}

.thumb--active {
  border-color: #00B4D8;
}

.thumb:hover {
  transform: scale(1.08);
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Placeholder si aucune image */
.no-images {
  border: 2px dashed rgba(0, 119, 182, 0.2);
  border-radius: 16px;
  padding: 32px;
}

.no-images code {
  background: rgba(0, 119, 182, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
  color: #0077B6;
}
</style>
