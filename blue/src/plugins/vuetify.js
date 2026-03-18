// plugins/vuetify.js
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const aquaticLight = {
  dark: false,
  colors: {
    primary: '#0077B6',
    'primary-darken-1': '#023E8A',
    'primary-lighten-1': '#0096C7',
    secondary: '#00B4D8',
    'secondary-darken-1': '#0096C7',
    'secondary-lighten-1': '#48CAE4',
    accent: '#90E0EF',
    'accent-darken-1': '#48CAE4',
    background: '#F0F9FF',
    surface: '#FFFFFF',
    'surface-variant': '#E8F4FD',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEF7FF',
    success: '#2DC653',
    'success-lighten-1': '#A8E6BB',
    warning: '#F4A261',
    error: '#E63946',
    info: '#4CC9F0',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-accent': '#023E8A',
    'on-background': '#0D1B2A',
    'on-surface': '#0D1B2A',
    'on-surface-variant': '#1A3A5C',
    'deep-ocean': '#023E8A',
    'ocean-mid': '#0077B6',
    'ocean-light': '#00B4D8',
    'foam': '#90E0EF',
    'seafoam': '#CAF0F8',
    'navy': '#03045E',
    'coral': '#F4A261'
  }
}

const aquaticDark = {
  dark: true,
  colors: {
    primary: '#48CAE4',
    'primary-darken-1': '#00B4D8',
    secondary: '#0096C7',
    accent: '#023E8A',
    background: '#03045E',
    surface: '#0A1929',
    'surface-variant': '#0D2137',
    success: '#2DC653',
    warning: '#F4A261',
    error: '#FF6B6B',
    info: '#90E0EF',
    'on-primary': '#03045E',
    'on-secondary': '#FFFFFF',
    'on-background': '#CAF0F8',
    'on-surface': '#E0F4FF',
    'deep-ocean': '#03045E',
    'ocean-mid': '#0077B6',
    'ocean-light': '#48CAE4',
    'foam': '#CAF0F8',
    'seafoam': '#90E0EF',
    'navy': '#03045E'
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'aquaticLight',
    themes: {
      aquaticLight,
      aquaticDark
    }
  },
  defaults: {
    VBtn: {
      rounded: 'lg'
    },
    VCard: {
      rounded: 'xl'
    },
    VChip: {
      rounded: 'lg'
    },
    VTextField: {
      rounded: 'lg',
      variant: 'outlined'
    },
    VTextarea: {
      rounded: 'lg',
      variant: 'outlined'
    }
  },
  display: {
    mobileBreakpoint: 'sm'
  }
})