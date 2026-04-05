// src/data/projects.js
// Donnees des projets de Lucas Deudon

const projects = [
    {
    id: 'repairstation',
    title: 'RepairStation',
    subtitle: 'Application full-stack de gestion de r&eacute;paration de roulements',
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
    period: '2025 - 2026',
    color: 'primary',
    icon: 'mdi-cog-sync',
    featured: true,
    imageSections: [
      {
        title: 'Tableau de bord',
        icon: 'mdi-view-dashboard-outline',
        images: [
          '/projects/repairstation/dashboard/dashboard.png'
        ]
      },
      {
        title: 'RMA &ndash; Demandes de r&eacute;paration',
        icon: 'mdi-clipboard-list-outline',
        images: [
          '/projects/repairstation/rmas/rma_new_pt1.png',
          '/projects/repairstation/rmas/rma_new_pt2.png',
          '/projects/repairstation/rmas/rma_details_pt1.png',
          '/projects/repairstation/rmas/rma_details_status.png',
          '/projects/repairstation/rmas/rma_details_status_change.png'
        ]
      },
      {
        title: 'Inspection',
        icon: 'mdi-magnify-scan',
        images: [
          '/projects/repairstation/inspection/inspection_homepage.png',
          '/projects/repairstation/inspection/inspection_start.png',
          '/projects/repairstation/inspection/inspection_step1.png',
          '/projects/repairstation/inspection/inspection_step2.png',
          '/projects/repairstation/inspection/inspection_edit_progression.png'
        ]
      },
      {
        title: 'Clients',
        icon: 'mdi-account-group-outline',
        images: [
          '/projects/repairstation/customers/customer_homepage.png',
          '/projects/repairstation/customers/customer_details.png',
          '/projects/repairstation/customers/customer_new.png',
          '/projects/repairstation/customers/customer_edit.png'
        ]
      },
      {
        title: 'Devis',
        icon: 'mdi-file-document-outline',
        images: [
          '/projects/repairstation/quotations/quotation_homepage.png',
          '/projects/repairstation/quotations/quotation_new.png',
          '/projects/repairstation/quotations/quotation_edit.png'
        ]
      },
      {
        title: 'Produits',
        icon: 'mdi-package-variant-closed',
        images: [
          '/projects/repairstation/products/product_new.png',
          '/projects/repairstation/products/product_edit.png'
        ]
      },
      {
        title: 'Annonces',
        icon: 'mdi-bullhorn-outline',
        images: [
          '/projects/repairstation/announcement/announcement_main.png',
          '/projects/repairstation/announcement/announcement_new.png',
          '/projects/repairstation/announcement/announcement_edit.png'
        ]
      },
      {
        title: 'Notifications',
        icon: 'mdi-bell-outline',
        images: [
          '/projects/repairstation/notifs/notif_preview.png',
          '/projects/repairstation/notifs/notif_dial.png'
        ]
      },
      {
        title: 'Administration',
        icon: 'mdi-shield-account-outline',
        images: [
          '/projects/repairstation/admin/admin_user_dashboard.png',
          '/projects/repairstation/admin/admin_roles_overview.png',
          '/projects/repairstation/admin/admin_roles_dashboard.png',
          '/projects/repairstation/admin/admin_roles_new.png',
          '/projects/repairstation/admin/admin_roles_edit_user.png'
        ]
      },
      {
        title: 'Param&egrave;tres du compte',
        icon: 'mdi-cog-outline',
        images: [
          '/projects/repairstation/account_settings/account_settings_main.png',
          '/projects/repairstation/account_settings/account_settings_appearance.png',
          '/projects/repairstation/account_settings/account_settings_others.png'
        ]
      },
      {
        title: 'Base de donn&eacute;es',
        icon: 'mdi-database-outline',
        images: [
          '/projects/repairstation/misc/bdd/bdd_overview_pixelized.png',
          '/projects/repairstation/misc/bdd/infos_bdd.png',
          '/projects/repairstation/misc/bdd/snippet_bdd.png'
        ]
      },
      {
        title: 'Extraits de code',
        icon: 'mdi-code-braces',
        images: [
          '/projects/repairstation/misc/snippet/create_letter_fonction_service.png',
          '/projects/repairstation/misc/snippet/peek_def_dto.png'
        ]
      }
    ]
  },
  {
    id: 'horoquartzrh',
    title: 'GSB Congés C#',
    subtitle: 'Application Windows de gestion des cong&eacute;s',
    description:
      'Application Windows Forms de gestion des cong&eacute;s avec deux modes d\'utilisation : ' +
      'un <strong>mode employ&eacute;</strong> pour soumettre des demandes de cong&eacute;s et un <strong>mode administrateur</strong> ' +
      'pour traiter, valider ou refuser les demandes. Interface intuitive et ergonomique.',
    longDescription:
      'D&eacute;velopp&eacute;e en <strong>C#</strong> avec le framework <strong>.NET&nbsp;6.0</strong> en Windows Forms. ' +
      'Base de donn&eacute;es <strong>MySQL</strong> pour la persistance des donn&eacute;es employ&eacute;s et cong&eacute;s. ' +
      'Gestion des droits d\'acc&egrave;s, validation des dates, historique des demandes et tableau de bord administrateur.',
    tech: ['C#', '.NET 6.0', 'Windows Forms', 'MySQL'],
    category: 'Application bureau',
    context: 'Mission BTS SIO SLAM',
    period: '2025',
    color: 'secondary',
    icon: 'mdi-calendar-clock',
    featured: false,
    imageSections: [
      {
        title: 'Connexion',
        icon: 'mdi-login',
        images: [
          '/projects/gsb_conges/login_page.png'
        ]
      },
      {
        title: 'Mode employ&eacute;',
        icon: 'mdi-account-outline',
        images: [
          '/projects/gsb_conges/demander_des_conges.PNG'
        ]
      },
      {
        title: 'Mode administrateur',
        icon: 'mdi-shield-account-outline',
        images: [
          '/projects/gsb_conges/admin_homepage.png',
          '/projects/gsb_conges/admin_homepage_par_filtres.png'
        ]
      }
    ]
  },
  {
    id: 'gsb_flutter',
    title: 'GSB Praticien',
    subtitle: 'Application mobile de recherche et notation de praticiens',
    description:
      'Application mobile de gestion et consultation de praticiens m&eacute;dicaux. ' +
      'Permet de <strong>rechercher des praticiens</strong> avec des filtres avanc&eacute;s, ' +
      'de leur attribuer une <strong>note</strong> et de laisser des <strong>commentaires</strong>. ' +
      'Base de donn&eacute;es h&eacute;berg&eacute;e sur un serveur Ubuntu accessible via adresse IP locale.',
    longDescription:
      'D&eacute;velopp&eacute;e en <strong>Flutter</strong> (Dart) pour Android et iOS. ' +
      'Base de donn&eacute;es <strong>MySQL</strong> h&eacute;berg&eacute;e sur un serveur <strong>Ubuntu 24.04</strong> ' +
      'install&eacute; en salle de classe, accessible via une <strong>adresse IP d&eacute;di&eacute;e</strong>. ' +
      'Fonctionnalit&eacute;s de recherche multi-crit&egrave;res (sp&eacute;cialit&eacute;, nom, localisation&hellip;), ' +
      'syst&egrave;me de notation par &eacute;toiles et ajout de commentaires par praticien.',
    tech: ['Flutter', 'Dart', 'MySQL', 'Ubuntu 24.04', 'REST API'],
    category: 'Application mobile',
    context: 'Mission BTS SIO SLAM',
    period: '2025',
    color: 'teal',
    icon: 'mdi-doctor',
    featured: false,
    imageSections: [
      {
        title: 'Interface utilisateur',
        icon: 'mdi-cellphone-screenshot',
        images: [
          '/projects/gsb_flutter/home.png',
          '/projects/gsb_flutter/home_filters.png',
          '/projects/gsb_flutter/home_recherche.png',
          
        ]
      },
      {
        title: 'Détails du praticien',
        icon: 'mdi-doctor',
        images: [
          '/projects/gsb_flutter/avis.png'
        ]
      },
      {
        title: 'Base de donn&eacute;es (MLD)',
        icon: 'mdi-database-outline',
        images: [
          '/projects/gsb_flutter/bdd_mld.png'
        ]
      },
      {
        title: 'Extraits de code',
        icon: 'mdi-code-braces',
        images: [
          '/projects/gsb_flutter/code/fonction_recherche.png',
          '/projects/gsb_flutter/code/list_practiciens.png'
        ]
      }
    ]
  },
  {
    id: 'nestify',
    title: 'Nestify',
    subtitle: 'Lecteur de musique avec streaming YouTube &amp; SoundCloud',
    description:
      'Application de bureau compl&egrave;te d&eacute;di&eacute;e &agrave; la gestion et l\'&eacute;coute de musique. ' +
      'Nestify <strong>stream les pistes directement depuis YouTube et SoundCloud</strong> via leurs APIs respectives, ' +
      'avec un syst&egrave;me de <strong>troph&eacute;es et de r&eacute;compenses</strong> pour engager l\'utilisateur. ' +
      'Application actuellement &agrave; <strong>90&nbsp;%</strong> d\'ach&egrave;vement, non encore d&eacute;ploy&eacute;e.',
    longDescription:
      'Application enti&egrave;rement en <strong>JavaScript</strong> avec <strong>Vue&nbsp;3</strong>, Vuetify et Vue-Router. ' +
      'Int&eacute;gration des APIs <strong>YouTube Data API</strong> et <strong>SoundCloud API</strong> pour le streaming audio. ' +
      'Syst&egrave;me de gamification avec troph&eacute;es, r&eacute;compenses et statistiques d\'&eacute;coute. ' +
      'Interface soign&eacute;e et animations fluides pour une exp&eacute;rience immersive. ' +
      '<br/><br/>' +
      '<strong>Architecture des donn&eacute;es&nbsp;:</strong> l\'application ne poss&egrave;de <strong>aucune base de donn&eacute;es</strong>. ' +
      'Toutes les donn&eacute;es r&eacute;actives (playlists, musiques aim&eacute;es, troph&eacute;es, pr&eacute;f&eacute;rences) ' +
      'sont persist&eacute;es dans le <strong>localStorage</strong> du navigateur. ' +
      'Les contenus musicaux sont r&eacute;cup&eacute;r&eacute;s en temps r&eacute;el via les APIs <strong>YouTube</strong> et <strong>SoundCloud</strong>.',
    tech: ['Vue 3', 'Vuetify', 'Vue Router', 'YouTube API', 'SoundCloud API', 'JavaScript', 'localStorage'],
    category: 'Application bureau',
    context: 'Projet personnel &ndash; 90&nbsp;% finalis&eacute;, non d&eacute;ploy&eacute;',
    period: '2026',
    color: 'accent',
    icon: 'mdi-music-box-multiple',
    featured: true,
    imageSections: [
      {
        title: 'Accueil',
        icon: 'mdi-home-outline',
        images: [
          '/projects/nestify/home/home.png'
        ]
      },
      {
        title: 'Playlists',
        icon: 'mdi-playlist-music-outline',
        images: [
          '/projects/nestify/playlists/playlists_overview.png',
          '/projects/nestify/playlists/playlists_details.png',
          '/projects/nestify/playlists/new.png'
        ]
      },
      {
        title: 'Musiques',
        icon: 'mdi-music-note-outline',
        images: [
          '/projects/nestify/songs/add_from_home.png',
          '/projects/nestify/songs/liked_songs.png'
        ]
      },
      {
        title: 'Troph&eacute;es &amp; r&eacute;compenses',
        icon: 'mdi-trophy-outline',
        images: [
          '/projects/nestify/trophies/trophies_all.png',
          '/projects/nestify/trophies/trophies_with_filters.png'
        ]
      }
    ]
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
      'et la r&eacute;ponse aux <strong>demandes utilisateurs</strong> (corrections de bugs, nouvelles fonctionnalit&eacute;s). ' +
      '<br/><br/><em><v-icon size="14">mdi-lock-outline</v-icon> Pour des raisons de confidentialit&eacute; avec SKF Aeroengine France, ' +
      'le mod&egrave;le complet de la base de donn&eacute;es ne peut pas &ecirc;tre divulgu&eacute;.</em>',
    tech: ['C#', '.NET 9.0', 'WinUI', 'SQL Server (SSMS)', 'DataMax', 'Impression r&eacute;seau'],
    category: 'Application bureau',
    context: 'Maintenance &ndash; SKF Aeroengine France',
    period: '2025 - 2026',
    color: 'deep-ocean',
    icon: 'mdi-printer-outline',
    featured: false,
    confidentialNote: 'Le mod&egrave;le complet de la base de donn&eacute;es ne peut pas &ecirc;tre divulgu&eacute; pour des raisons de confidentialit&eacute; avec SKF Aeroengine France.',
    imageSections: [
      {
        title: 'Interface principale',
        icon: 'mdi-monitor-outline',
        images: [
          '/projects/cebexv2/cebex_empty.png',
          '/projects/cebexv2/cebex_of_rempli_censored.png'
        ]
      },
      {
        title: 'Gestion des erreurs',
        icon: 'mdi-alert-circle-outline',
        images: [
          '/projects/cebexv2/dialog_erreur.png'
        ]
      },
      {
        title: 'Extraits de code',
        icon: 'mdi-code-braces',
        images: [
          '/projects/cebexv2/snippet/fonction_of_ou_rma.png'
        ]
      }
    ]
  }
]

export { projects }
