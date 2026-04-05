<template>
  <div class="about-view">

    <!-- En-tete de page -->
    <section class="page-header">
      <v-container>
        <div class="text-center">
          <v-chip color="secondary" variant="tonal" size="small" prepend-icon="mdi-account-outline" class="font-display mb-4">
            A propos de moi
          </v-chip>
          <h1 class="page-title font-display">Mon&nbsp;<span class="gradient-text">Parcours</span></h1>
          <div class="section-underline mx-auto mt-3" />
        </div>
      </v-container>
    </section>

    <!-- PRESENTATION -->
    <section class="section-spacing">
      <v-container>
        <v-row align="center" ga="8">

          <v-col cols="12" md="4" class="text-center">
            <SectionReveal direction="scale">
              <div class="avatar-wrapper">
                <div class="avatar-ring">
                  <div class="avatar-inner">
                    <v-icon size="88" color="primary">mdi-account-circle</v-icon>
                  </div>
                </div>
              </div>
              <div class="mt-6 d-flex flex-column ga-2">
                <v-card v-for="info in quickInfos" :key="info.label" class="info-chip-card pa-3" rounded="xl" elevation="0">
                  <div class="d-flex align-center ga-3">
                    <v-icon :color="info.color || 'primary'" size="20">{{ info.icon }}</v-icon>
                    <span class="font-body text-body-2" style="line-height:1.4" v-html="info.label" />
                  </div>
                </v-card>
              </div>
            </SectionReveal>
          </v-col>

          <v-col cols="12" md="8">
            <SectionReveal :delay="120" direction="left">
              <h2 class="font-display text-h4 font-weight-bold mb-5 about-hello">Bonjour, je suis Lucas&nbsp;!</h2>
              <div class="about-text">
                <p>
                  J'ai <strong>20&nbsp;ans</strong> et je suis en
                  <strong>2&egrave;me ann&eacute;e de BTS SIO option SLAM</strong>
                  en alternance chez <strong>SKF Aeroengine France</strong> &agrave; Valenciennes.
                  Mon objectif&nbsp;: devenir <strong>ing&eacute;nieur logiciel full-stack</strong>.
                </p>
                <p class="mt-4">
                  Je prévois, après la fin de mon BTS, d'intégrer l'école d'ingénieur <b>INSA Hauts-De-France</b>,
                  afin d'atteindre mon objectif.
                </p>
                <p class="mt-4">
                  Passionn&eacute; par le d&eacute;veloppement depuis plusieurs ann&eacute;es, j'aime concevoir des
                  applications compl&egrave;tes : du back-end en <strong>C# / .NET</strong> jusqu'aux
                  interfaces modernes en <strong>Vue&nbsp;3</strong>. Je suis &agrave; l'aise sur des projets
                  <strong>web</strong> comme sur des applications <b>bureau</b> ou <strong>Windows</strong>.
                </p>
                <p class="mt-4">
                  En alternance chez SKF, j'ai contribu&eacute; &agrave; la digitalisation de processus
                  a&eacute;ronautiques, la gestion d'impression d'&eacute;tiquettes,
                  et la maintenance applicative avec des d&eacute;mandes utilisateurs terrain.
                </p>
                <p class="mt-4">
                  En dehors du travail, je d&eacute;veloppe des projets personnels comme
                  <strong>Nestify</strong>, une application bureau de streaming musical utilisant les APIs YouTube / SoundCloud.
                </p>
              </div>
              <div class="d-flex ga-3 mt-8 flex-wrap">
                <v-btn to="/projects" color="primary" class="font-display" prepend-icon="mdi-briefcase-outline" elevation="0">
                  Mes projets
                </v-btn>
                <v-btn href="/cv-lucas-deudon.pdf" target="_blank" color="secondary" variant="outlined" class="font-display" prepend-icon="mdi-file-account-outline">
                  T&eacute;l&eacute;charger le CV
                </v-btn>
              </div>
            </SectionReveal>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- BARRES DE COMPETENCES -->
    <section class="section-spacing" style="background: rgba(0,119,182,0.04)">
      <v-container>
        <SectionReveal>
          <div class="text-center mb-12">
            <h2 class="section-title font-display">Niveau de ma&icirc;trise</h2>
            <div class="section-underline mx-auto mt-3" />
            <p class="section-desc mt-3">Evaluation personnelle de mes comp&eacute;tences techniques</p>
          </div>
        </SectionReveal>
        <v-row>
          <v-col cols="12" md="6">
            <SectionReveal :delay="0" direction="right">
              <h3 class="font-display text-subtitle-1 font-weight-bold mb-5 skill-col-title">
                <v-icon color="success" size="18" class="mr-2">mdi-monitor-dashboard</v-icon>
                Front-End &amp; Web
              </h3>
              <SkillBar name="Vue 3 / Vuetify"   :level="82" color="success"   :delay="0"   />
              <SkillBar name="HTML5 / CSS3"       :level="85" color="secondary" :delay="80"  />
              <SkillBar name="JavaScript"         :level="74" color="info"      :delay="160" />
              <SkillBar name="VueX / Vue Router"  :level="78" color="primary"   :delay="240" />
            </SectionReveal>
          </v-col>
          <v-col cols="12" md="6">
            <SectionReveal :delay="100" direction="left">
              <h3 class="font-display text-subtitle-1 font-weight-bold mb-5 skill-col-title">
                <v-icon color="primary" size="18" class="mr-2">mdi-server-outline</v-icon>
                Back-End &amp; Infrastructure
              </h3>
              <SkillBar name="C# / .NET"            :level="80" color="primary"   :delay="0"   />
              <SkillBar name="ASP.NET Core"          :level="72" color="secondary" :delay="80"  />
              <SkillBar name="SQL Server / MySQL"    :level="75" color="accent"    :delay="160" />
              <SkillBar name="Windows Forms / WinUI" :level="68" color="warning"   :delay="240" />
            </SectionReveal>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CATEGORIES DE COMPETENCES -->
    <section class="section-spacing">
      <v-container>
        <SectionReveal>
          <div class="text-center mb-12">
            <h2 class="section-title font-display">Comp&eacute;tences techniques</h2>
            <div class="section-underline mx-auto mt-3" />
          </div>
        </SectionReveal>
        <v-row>
          <v-col v-for="(category, idx) in skillCategories" :key="category.name" cols="12" sm="6" lg="3">
            <SectionReveal :delay="idx * 80" direction="up">
              <v-card class="skill-category-card pa-5" rounded="xl" elevation="0" hover>
                <div class="d-flex align-center ga-3 mb-4">
                  <div :class="'skill-cat-icon bg-' + category.color + '-tonal'">
                    <v-icon :color="category.color" size="22">{{ category.icon }}</v-icon>
                  </div>
                  <h3 class="font-display text-subtitle-1 font-weight-bold" v-html="category.name" />
                </div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="skill in category.skills" :key="skill" size="small" :color="category.color" variant="tonal" class="font-display" v-html="skill" />
                </div>
              </v-card>
            </SectionReveal>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FORMATION & EXPERIENCE -->
    <section class="section-spacing" style="background: rgba(0,119,182,0.04)">
      <v-container>
        <SectionReveal>
          <div class="text-center mb-12">
            <h2 class="section-title font-display">Formation &amp; Exp&eacute;rience</h2>
            <div class="section-underline mx-auto mt-3" />
          </div>
        </SectionReveal>
        <v-row>
          <v-col cols="12" md="6">
            <SectionReveal :delay="0" direction="right">
              <h3 class="font-display text-h6 font-weight-bold mb-6 d-flex align-center ga-2">
                <v-icon color="primary">mdi-school-outline</v-icon>
                Formation
              </h3>
              <div class="timeline">
                <div v-for="item in formations" :key="item.period" class="timeline-item">
                  <div class="timeline-dot" />
                  <div class="timeline-content">
                    <div class="timeline-period font-display">{{ item.period }}</div>
                    <div class="timeline-title font-display" v-html="item.title" />
                    <div class="timeline-place" v-html="item.place" />
                    <div class="timeline-desc mt-1" v-html="item.desc" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          </v-col>
          <v-col cols="12" md="6">
            <SectionReveal :delay="100" direction="left">
              <h3 class="font-display text-h6 font-weight-bold mb-6 d-flex align-center ga-2">
                <v-icon color="secondary">mdi-briefcase-outline</v-icon>
                Exp&eacute;rience
              </h3>
              <div class="timeline">
                <div v-for="item in experiences" :key="item.period" class="timeline-item">
                  <div class="timeline-dot timeline-dot--secondary" />
                  <div class="timeline-content">
                    <div class="timeline-period font-display">{{ item.period }}</div>
                    <div class="timeline-title font-display" v-html="item.title" />
                    <div class="timeline-place" v-html="item.place" />
                    <div class="timeline-desc mt-1" v-html="item.desc" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- SOFT SKILLS -->
    <section class="section-spacing">
      <v-container>
        <SectionReveal>
          <div class="text-center mb-12">
            <h2 class="section-title font-display">Qualit&eacute;s personnelles</h2>
            <div class="section-underline mx-auto mt-3" />
          </div>
        </SectionReveal>
        <v-row justify="center">
          <v-col v-for="(soft, idx) in softSkills" :key="soft.title" cols="12" sm="6" md="4" lg="3">
            <SectionReveal :delay="idx * 70" direction="up">
              <v-card class="soft-card text-center pa-6" rounded="xl" elevation="0" hover>
                <div class="soft-icon-wrap mx-auto mb-4">
                  <v-icon :icon="soft.icon" size="30" color="primary" />
                </div>
                <h3 class="font-display text-subtitle-1 font-weight-bold mb-2">{{ soft.title }}</h3>
                <p class="text-body-2 soft-desc" v-html="soft.desc" />
              </v-card>
            </SectionReveal>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<script setup>
import SectionReveal from '@/components/SectionReveal.vue'
import SkillBar from '@/components/SkillBar.vue'

const quickInfos = [
  { icon: 'mdi-map-marker-outline',     label: 'Valenciennes, France',               color: 'secondary' },
  { icon: 'mdi-account-school-outline', label: 'BTS SIO SLAM &ndash; 2&egrave;me ann&eacute;e', color: 'primary' },
  { icon: 'mdi-domain',                 label: 'SKF Aeroengine France',              color: 'primary' },
  { icon: 'mdi-cake-variant-outline',   label: '20&nbsp;ans',                        color: 'secondary' },
  { icon: 'mdi-target',                 label: 'Futur Ing&eacute;nieur logiciel Full-Stack',        color: 'success' }
]

const skillCategories = [
  {
    name: 'Front-End',
    color: 'success',
    icon: 'mdi-monitor-dashboard',
    skills: ['Vue 3', 'Vuetify', 'VueX', 'Vue Router', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    name: 'Back-End',
    color: 'primary',
    icon: 'mdi-server-outline',
    skills: ['C#', '.NET 2.2 / 6 / 7 / 9', 'ASP.NET Core', 'REST API', 'Windows Forms', 'WinUI']
  },
  {
    name: 'Base de donn&eacute;es',
    color: 'secondary',
    icon: 'mdi-database-outline',
    skills: ['SQL Server', 'SSMS', 'MySQL', 'DataMax']
  },
  {
    name: 'Outils &amp; Infra',
    color: 'warning',
    icon: 'mdi-tools',
    skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'Visual Studio', 'IIS / Intranet']
  }
]

const formations = [
  {
    period: '2024 - 2026',
    title: 'BTS SIO option SLAM',
    place: 'Lyc&eacute;e &ndash; Valenciennes',
    desc: 'Solutions Logicielles et Applications M&eacute;tiers &ndash; formation en alternance'
  },
  {
    period: 'Oct. 2023 - Jui. 2024',
    title: 'BUT1 Informatique',
    place: 'IUT de Maubeuge, UPHF',
    desc: 'BUT Informatique générale, formation initiale.'
  },
  {
    period: 'Sep. 2023 - Oct. 2023',
    title: 'Licence Informatique L1',
    place: 'INSA Hauts-De-France',
    desc: 'Licence informatique générale, réorientation en milieu d\'Octobre'
  },
  {
    period: '2020 - 2023',
    title: 'Baccalaur&eacute;at g&eacute;n&eacute;ral',
    place: '',
    desc: 'Sp&eacute;cialit&eacute;s Math&eacute;matiques &amp; LLCER Anglais(Langues, Littérature et Civilisation Étrangères et Régionales)'
  }
]

const experiences = [
  {
    period: 'Septembre 2025 - Aujourd\'hui',
    title: 'D&eacute;veloppeur full-stack en alternance',
    place: 'SKF Aeroengine France &ndash; Valenciennes',
    desc: 'D&eacute;veloppement et maintenance d\'applications industrielles&nbsp;: RepairStation, CEBEX&nbsp;V2, outils internes.'
  },
  {
    period: 'Mai 2025 - Juin 2025',
    title: 'Stage de développeur full-stack',
    place: 'SKF Aeroengine France &ndash; Valenciennes',
    desc: 'D&eacute;veloppement et maintenance d\'applications &nbsp;: SECOM, Lettre d\'ordre.'
  },
  {
    period: '2026',
    title: 'Mission : Application mobile Dart, avec Flutter',
    place: 'Projet AP BTS SIO SLAM',
    desc: 'Description'
  },
  {
    period: '2026',
    title: 'Mission : API Rest Laravel',
    place: 'Projet AP BTS SIO SLAM',
    desc: 'Description'
  },
  {
    period: '2025',
    title: 'Mission&nbsp;: HoroquartzRH',
    place: 'Projet AP BTS SIO SLAM',
    desc: 'Application Windows Forms de gestion des cong&eacute;s en C# .NET&nbsp;6.0 avec MySQL.'
  }
]

const softSkills = [
  {
    icon: 'mdi-lightbulb-outline',
    title: 'Autonomie',
    desc: 'Capacit&eacute; &agrave; travailler ind&eacute;pendamment et &agrave; r&eacute;soudre des probl&egrave;mes complexes sans supervision.'
  },
  {
    icon: 'mdi-account-group-outline',
    title: 'Travail en équipe',
    desc: 'Collaboration &eacute;troite avec les &eacute;quipes m&eacute;tier et techniques pour livrer des solutions adapt&eacute;es.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Adaptabilité',
    desc: 'A l\'aise dans des environnements &eacute;volutifs, capable de monter en comp&eacute;tence rapidement sur de nouvelles technos.'
  },
  {
    icon: 'mdi-magnify',
    title: 'Rigueur',
    desc: 'Attention au d&eacute;tail, code propre et structur&eacute; pour des applications maintenables dans le temps.'
  },
  {
    icon: 'mdi-comment-text-outline',
    title: 'Communication',
    desc: 'Capacit&eacute; &agrave; vulgariser et communiquer clairement avec les utilisateurs et parties prenantes.'
  },
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'Initiative',
    desc: 'Force de proposition sur les am&eacute;liorations techniques, proactif face aux remontées terrain.'
  }
]
</script>

<style scoped>
.page-header {
  padding-top: 120px;
  padding-bottom: 60px;
  background: linear-gradient(160deg, #e8f4fd 0%, #caf0f8 100%);
}
.v-theme--aquaticDark .page-header { background: linear-gradient(160deg, #03045E, #023E8A); }

.page-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #023E8A;
}
.v-theme--aquaticDark .page-title { color: #CAF0F8; }

.section-title {
  font-size: clamp(1.7rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #023E8A;
}
.v-theme--aquaticDark .section-title { color: #90E0EF; }

.section-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0077B6, #00B4D8);
  border-radius: 4px;
}

.section-desc { color: #4A6785; font-size: 0.95rem; }
.v-theme--aquaticDark .section-desc { color: rgba(202, 240, 248, 0.65); }

/* Avatar */
.avatar-wrapper { position: relative; display: inline-block; }

.avatar-ring {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0077B6, #00B4D8, #90E0EF);
  padding: 4px;
  margin: 0 auto;
  animation: rotate-ring 8s linear infinite;
}

@keyframes rotate-ring {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate-ring 8s linear infinite reverse;
}
.v-theme--aquaticDark .avatar-inner { background: #0A1929; }

.avatar-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

/* Info */
.info-chip-card { border: 1px solid rgba(0,119,182,0.1) !important; text-align: left; }

.about-hello { color: #023E8A; }
.v-theme--aquaticDark .about-hello { color: #90E0EF; }

.about-text p { color: #2D4A6B; font-size: 1rem; line-height: 1.78; }
.v-theme--aquaticDark .about-text p { color: rgba(202, 240, 248, 0.85); }

.skill-col-title { color: #023E8A; }
.v-theme--aquaticDark .skill-col-title { color: #90E0EF; }

/* Skill categories */
.skill-category-card {
  border: 1px solid rgba(0,119,182,0.1) !important;
  height: 100%;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}
.skill-category-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-card-hover) !important; }

.skill-cat-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Timeline */
.timeline { position: relative; padding-left: 28px; }

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 4px;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #0077B6, #00B4D8, transparent);
  border-radius: 2px;
}

.timeline-item { position: relative; margin-bottom: 28px; }

.timeline-dot {
  position: absolute;
  left: -25px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0077B6;
  border: 2px solid white;
  box-shadow: 0 0 0 3px rgba(0,119,182,0.2);
}
.v-theme--aquaticDark .timeline-dot { border-color: #0A1929; }
.timeline-dot--secondary { background: #00B4D8; box-shadow: 0 0 0 3px rgba(0,180,216,0.2); }

.timeline-period { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #00B4D8; margin-bottom: 4px; }
.timeline-title { font-size: 1rem; font-weight: 700; color: #023E8A; }
.v-theme--aquaticDark .timeline-title { color: #90E0EF; }
.timeline-place { font-size: 0.88rem; color: #0077B6; font-weight: 500; }
.timeline-desc { font-size: 0.9rem; color: #4A6785; line-height: 1.65; }
.v-theme--aquaticDark .timeline-desc { color: rgba(202, 240, 248, 0.65); }

/* Soft skills */
.soft-card {
  border: 1px solid rgba(0,119,182,0.1) !important;
  height: 100%;
  transition: transform var(--transition-default), box-shadow var(--transition-default);
}
.soft-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-card-hover) !important; }

.soft-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0,119,182,0.1), rgba(0,180,216,0.15));
  display: flex;
  align-items: center;
  justify-content: center;
}

.soft-desc { color: #4A6785; line-height: 1.65; }
.v-theme--aquaticDark .soft-desc { color: rgba(202, 240, 248, 0.65); }
</style>
