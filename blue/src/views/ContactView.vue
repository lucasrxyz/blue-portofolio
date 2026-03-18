<template>
  <div class="contact-view">

    <!-- En-tete -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <v-chip
            color="secondary"
            variant="tonal"
            size="small"
            prepend-icon="mdi-email-outline"
            class="font-display mb-4"
          >
            Contact
          </v-chip>
          <h1 class="page-title font-display">
            Prenons&nbsp;<span class="gradient-text">Contact</span>
          </h1>
          <div class="section-underline mx-auto mt-3" />
          <p class="page-subtitle mt-4">
            Une question, une opportunit&eacute; ou envie d\'&eacute;changer&nbsp;? Je suis disponible&nbsp;!
          </p>
        </div>
      </v-container>
    </section>

    <section class="section-spacing">
      <v-container>
        <v-row justify="center" ga="6">

          <!-- Infos de contact -->
          <v-col cols="12" md="4">
            <h2 class="font-display text-h5 font-weight-bold mb-6" style="color:#023E8A">
              Informations
            </h2>

            <div class="contact-info-list d-flex flex-column ga-4">
              <v-card
                v-for="info in contactInfos"
                :key="info.label"
                class="contact-info-card pa-4"
                rounded="xl"
                elevation="0"
                :href="info.href"
                :target="info.href && info.href.startsWith('http') ? '_blank' : undefined"
                :rel="info.href && info.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                :component="info.href ? 'a' : 'div'"
              >
                <div class="d-flex align-center ga-3">
                  <div :class="'contact-icon-wrap bg-' + info.color + '-tonal'">
                    <v-icon :color="info.color" size="22">{{ info.icon }}</v-icon>
                  </div>
                  <div>
                    <div class="contact-info-label font-display">{{ info.label }}</div>
                    <div class="contact-info-value font-body" v-html="info.value" />
                  </div>
                </div>
              </v-card>
            </div>

            <!-- Disponibilite -->
            <v-card class="availability-card mt-6 pa-5" rounded="xl" elevation="0">
              <div class="d-flex align-center ga-3 mb-3">
                <div class="availability-dot" />
                <span class="font-display font-weight-bold" style="color:#2DC653">Disponible</span>
              </div>
              <p class="text-body-2" style="color:#4A6785; line-height:1.6">
                Ouvert aux opportunit&eacute;s de stage, d\'alternance ou de collaborations pour
                la p&eacute;riode &agrave; venir.
              </p>
            </v-card>
          </v-col>

          <!-- Formulaire de contact -->
          <v-col cols="12" md="7">
            <v-card class="contact-form-card pa-6 pa-sm-8" rounded="xl" elevation="0">
              <h2 class="font-display text-h5 font-weight-bold mb-6" style="color:#023E8A">
                M\'&eacute;crire
              </h2>

              <v-form ref="formRef" @submit.prevent="submitForm">
                <v-row>
                  <!-- Prenom -->
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.firstName"
                      label="Pr&eacute;nom"
                      :rules="[rules.required]"
                      prepend-inner-icon="mdi-account-outline"
                      color="primary"
                      class="font-body"
                    />
                  </v-col>

                  <!-- Nom -->
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.lastName"
                      label="Nom"
                      :rules="[rules.required]"
                      prepend-inner-icon="mdi-account-outline"
                      color="primary"
                      class="font-body"
                    />
                  </v-col>

                  <!-- Email -->
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.email"
                      label="Adresse e-mail"
                      type="email"
                      :rules="[rules.required, rules.email]"
                      prepend-inner-icon="mdi-email-outline"
                      color="primary"
                      class="font-body"
                    />
                  </v-col>

                  <!-- Sujet -->
                  <v-col cols="12">
                    <v-select
                      v-model="form.subject"
                      :items="subjects"
                      label="Objet du message"
                      :rules="[rules.required]"
                      prepend-inner-icon="mdi-tag-outline"
                      color="primary"
                      rounded="lg"
                      variant="outlined"
                      class="font-body"
                    />
                  </v-col>

                  <!-- Message -->
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      label="Votre message"
                      :rules="[rules.required, rules.minLength]"
                      prepend-inner-icon="mdi-message-text-outline"
                      color="primary"
                      rows="5"
                      auto-grow
                      class="font-body"
                    />
                  </v-col>

                  <!-- Bouton envoi -->
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      color="primary"
                      size="large"
                      block
                      :loading="submitting"
                      class="font-display"
                      prepend-icon="mdi-send-outline"
                      elevation="0"
                    >
                      Envoyer le message
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>

              <!-- Snackbar confirmation -->
              <v-snackbar
                v-model="snackbar"
                :color="snackbarColor"
                :timeout="4000"
                rounded="lg"
                location="bottom"
              >
                <v-icon class="mr-2">{{ snackbarIcon }}</v-icon>
                <span class="font-body" v-html="snackbarText" />
              </v-snackbar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref(null)
const submitting = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')
const snackbarIcon = ref('mdi-check-circle')

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const subjects = [
  'Opportunit&eacute; professionnelle',
  'Stage ou alternance',
  'Collaboration sur un projet',
  'Question technique',
  'Autre'
]

const rules = {
  required: function (value) {
    return (value && value.length > 0) || 'Ce champ est requis.'
  },
  email: function (value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Adresse e-mail invalide.'
  },
  minLength: function (value) {
    return (value && value.length >= 20) || 'Le message doit contenir au moins 20 caract&egrave;res.'
  }
}

const contactInfos = [
  {
    icon: 'mdi-email-outline',
    label: 'Email',
    value: 'lucas.deudon@example.com',
    href: 'mailto:lucas.deudon@example.com',
    color: 'primary'
  },
  {
    icon: 'mdi-map-marker-outline',
    label: 'Localisation',
    value: 'Valenciennes, Hauts-de-France',
    href: null,
    color: 'secondary'
  },
  {
    icon: 'mdi-github',
    label: 'GitHub',
    value: 'github.com/lucasdeudon',
    href: 'https://github.com/',
    color: 'primary'
  },
  {
    icon: 'mdi-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucasdeudon',
    href: 'https://linkedin.com/',
    color: 'info'
  }
]

async function submitForm() {
  const { valid } = await formRef.value.validate()

  if (!valid) {
    return
  }

  submitting.value = true

  await new Promise(function (resolve) {
    setTimeout(resolve, 1400)
  })

  submitting.value = false
  snackbarText.value = 'Message envoy&eacute; avec succ&egrave;s ! Je vous r&eacute;pondrai tr&egrave;s vite.'
  snackbarColor.value = 'success'
  snackbarIcon.value = 'mdi-check-circle'
  snackbar.value = true

  formRef.value.reset()
}
</script>

<style scoped>
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

.section-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0077B6, #00B4D8);
  border-radius: 4px;
}

/* Infos contact */
.contact-info-card {
  border: 1px solid rgba(0, 119, 182, 0.1) !important;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
  text-decoration: none;
}

.contact-info-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-card) !important;
}

.contact-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-info-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4A6785;
  margin-bottom: 1px;
}

.contact-info-value {
  font-size: 0.92rem;
  color: #023E8A;
  font-weight: 500;
}

.v-theme--aquaticDark .contact-info-value {
  color: #90E0EF;
}

/* Disponibilite */
.availability-card {
  background: rgba(45, 198, 83, 0.06) !important;
  border: 1px solid rgba(45, 198, 83, 0.2) !important;
}

.availability-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2DC653;
  box-shadow: 0 0 0 3px rgba(45, 198, 83, 0.25);
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 3px rgba(45, 198, 83, 0.25); }
  50%       { box-shadow: 0 0 0 7px rgba(45, 198, 83, 0.08); }
}

/* Formulaire */
.contact-form-card {
  border: 1px solid rgba(0, 119, 182, 0.1) !important;
}
</style>
