// src/data/projects.js
// Donnees des projets de Lucas Deudon

const projects = [
  {
    id: 'repairstation',
    title: 'RepairStation',
    subtitle: 'Application web de gestion de r&eacute;paration de roulements',
    description:
      'Application compl&egrave;te de digitalisation des services commerciaux et de r&eacute;paration de SKF Aeroengine France. ' +
      'L\'application couvre les processus <strong>channel, repair et emballage</strong> sur la cha&icirc;ne de r&eacute;paration de roulements pour moteurs d\'avions. ' +
      'D&eacute;ploy&eacute;e sur un serveur intranet, accessible uniquement sur le site de Valenciennes via un lien d&eacute;di&eacute;.',
    longDescription:
      'Front-end en <strong>Vue&nbsp;3</strong> avec Vuetify, VueX et Vue-Router. ' +
      'Back-end en <strong>C#&nbsp;.NET&nbsp;9.0 LTS</strong> avec ASP.NET Core pour l\'API REST. ' +
      'Base de donn&eacute;es <strong>SQL Server (SSMS)</strong> h&eacute;berg&eacute;e sur un serveur intranet SKF. ' +
      'Application mise en production et accessible via un lien interne &agrave; l\'usine.',
    tech: ['Vue 3', 'Vuetify', 'VueX', 'Vue Router', 'C# .NET 9.0', 'ASP.NET Core', 'SQL Server (SSMS)', 'REST API'],
    category: 'Web Full-Stack',
    context: 'Mission alternance &ndash; SKF Aeroengine France',
    period: '2024 &ndash; 2025',
    color: 'primary',
    icon: 'mdi-cog-sync',
    images: [
      '/projects/repairstation/1.jpg',
      '/projects/repairstation/2.jpg',
      '/projects/repairstation/3.jpg'
    ],
    featured: true
  },
  {
    id: 'horoquartzrh',
    title: 'HoroquartzRH',
    subtitle: 'Application Windows de gestion des cong&eacute;s',
    description:
      'Application Windows Forms de gestion des cong&eacute;s avec deux modes d\'utilisation : ' +
      'un <strong>mode employ&eacute;</strong> pour soumettre des demandes de cong&eacute;s et un <strong>mode administrateur</strong> ' +
      'pour traiter, valider ou refuser les demandes. Interface intuitive et ergonomique.',
    longDescription:
      'D&eacute;velopp&eacute;e en <strong>C#</strong> avec le framework <strong>.NET&nbsp;6.0</strong> en Windows Forms. ' +
      'Base de donn&eacute;es <strong>MySQL</strong> pour la persistance des donn&eacute;es employes et conges. ' +
      'Gestion des droits d\'acc&egrave;s, validation des dates, historique des demandes et tableau de bord administrateur.',
    tech: ['C#', '.NET 6.0', 'Windows Forms', 'MySQL'],
    category: 'Application bureau',
    context: 'Mission BTS SIO SLAM',
    period: '2024',
    color: 'secondary',
    icon: 'mdi-calendar-clock',
    images: [
      '/projects/horoquartzrh/1.jpg',
      '/projects/horoquartzrh/2.jpg',
      '/projects/horoquartzrh/3.jpg'
    ],
    featured: false
  },
  {
    id: 'nestify',
    title: 'Nestify',
    subtitle: 'Lecteur de musique avec streaming YouTube &amp; SoundCloud',
    description:
      'Application de bureau compl&egrave;te d&eacute;di&eacute;e &agrave; la gestion et l\'&eacute;coute de musique. ' +
      'Nestify <strong>stream les pistes directement depuis YouTube et SoundCloud</strong> via leurs APIs respectives, ' +
      'avec un syst&egrave;me de <strong>troph&eacute;es et de r&eacute;compenses</strong> pour engager l\'utilisateur.',
    longDescription:
      'Application enti&egrave;rement en <strong>JavaScript</strong> avec <strong>Vue&nbsp;3</strong>, Vuetify et Vue-Router. ' +
      'Int&eacute;gration des APIs <strong>YouTube Data API</strong> et <strong>SoundCloud API</strong> pour le streaming audio. ' +
      'Syst&egrave;me de gamification avec troph&eacute;es, r&eacute;compenses et statistiques d\'&eacute;coute. ' +
      'Interface soign&eacute;e et animations fluides pour une exp&eacute;rience immersive.',
    tech: ['Vue 3', 'Vuetify', 'Vue Router', 'YouTube API', 'SoundCloud API', 'JavaScript'],
    category: 'Application bureau',
    context: 'Projet personnel',
    period: '2024',
    color: 'accent',
    icon: 'mdi-music-box-multiple',
    images: [
      '/projects/nestify/1.jpg',
      '/projects/nestify/2.jpg',
      '/projects/nestify/3.jpg'
    ],
    featured: true
  },
  {
    id: 'cebex',
    title: 'CEBEX V2',
    subtitle: 'Application d\'impression d\'&eacute;tiquettes d\'exp&eacute;dition',
    description:
      'Application Windows d&eacute;di&eacute;e &agrave; l\'impression des &eacute;tiquettes d\'exp&eacute;dition pour les roulements destin&eacute;s aux entreprises clientes. ' +
      'Interface connect&eacute;e aux <strong>imprimantes sp&eacute;cialis&eacute;es</strong> du r&eacute;seau SKF Valenciennes, ' +
      'avec des &eacute;tiquettes cod&eacute;es en <strong>langage DataMax</strong>.',
    longDescription:
      'D&eacute;velopp&eacute;e en <strong>C#&nbsp;.NET&nbsp;9.0</strong> avec WinUI. ' +
      'Connexion &agrave; un <strong>serveur SQL SSMS</strong> h&eacute;bergeant la base de donn&eacute;es. ' +
      'Impression via des imprimantes r&eacute;seau cod&eacute;es en <strong>DataMax</strong>. ' +
      'Ma mission comprend la <strong>maintenance</strong>, la <strong>s&eacute;curisation</strong> de l\'application ' +
      'et la r&eacute;ponse aux <strong>demandes utilisateurs</strong> (corrections de bugs, nouvelles fonctionnalit&eacute;s).',
    tech: ['C#', '.NET 9.0', 'WinUI', 'SQL Server (SSMS)', 'DataMax', 'Impression r&eacute;seau'],
    category: 'Application bureau',
    context: 'Maintenance &ndash; SKF Aeroengine France',
    period: '2024 &ndash; 2025',
    color: 'deep-ocean',
    icon: 'mdi-printer-outline',
    images: [
      '/projects/cebex/1.jpg',
      '/projects/cebex/2.jpg',
      '/projects/cebex/3.jpg'
    ],
    featured: false
  }
]

export { projects }
