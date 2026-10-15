// Tout le texte du portfolio, en francais et en anglais.

export type Lang = 'fr' | 'en'

export type Project = {
  id: string
  name: string
  context: string
  summary: string
  highlights: string[]
  stack: string[]
  accent: string
  links: { site?: string; code: string; extra?: { label: string; href: string } }
}

export type Experience = { role: string; company: string; place: string; period: string; text: string; stack: string }
export type Degree = { title: string; school: string; period: string; note?: string; proof?: { label: string; href: string } }

/** Ce que je recherche : type de contrat, date et precision. */
export type Search = { kind: string; when: string; text: string; proof?: { label: string; href: string } }

export const ATTESTATION = '/attestation-enic-naric-diplome-ingenieur.pdf'

export const CONTACT = {
  email: 'taguefranck0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tague-franck',
  github: 'https://github.com/TAGUE-GITH',
}

const STACKS = {
  dits: ['Java 21', 'Spring Boot 4', 'Spring Security', 'JWT', 'PostgreSQL', 'React 19', 'Vite', 'Docker', 'GitHub Actions'],
  floreevent: ['Java 21', 'Spring Boot 4', 'Spring Security', 'PostgreSQL', 'Flyway', 'React 19', 'TypeScript', 'Tailwind', 'Stripe', 'Docker', 'GitHub Actions'],
  milatech: ['Java 21', 'Spring Boot 4', 'Spring Security', 'PostgreSQL', 'React 19', 'TypeScript', 'Tailwind', 'OpenPDF', 'Brevo', 'Docker'],
  devmanager: ['Java 21', 'Spring Boot 4', 'JWT', 'PostgreSQL', 'React 19', 'React Native', 'Expo', 'Docker', 'GitHub Actions'],
  shoemanager: ['Python', 'Django REST', 'PostgreSQL', 'React', 'Tailwind', 'i18n', 'OpenAPI', 'Docker', 'pytest'],
}

const LINKS = {
  dits: { site: 'https://dits-group.vercel.app', code: 'https://github.com/TAGUE-GITH/DITS_Group' },
  floreevent: { site: 'https://flore-event.vercel.app', code: 'https://github.com/TAGUE-GITH/FloreEvent' },
  milatech: { site: 'https://milatech-one.vercel.app', code: 'https://github.com/TAGUE-GITH/MilaTech' },
  devmanager: { site: 'https://devmanager-five.vercel.app', code: 'https://github.com/TAGUE-GITH/DevManager' },
  shoemanager: { site: 'https://shoe-manager.vercel.app', code: 'https://github.com/TAGUE-GITH/ShoeManager' },
}
const APK = 'https://github.com/TAGUE-GITH/DevManager/releases/latest/download/DevManager.apk'

export const CONTENT = {
  fr: {
    nav: { projects: 'Projets', skills: 'Compétences', journey: 'Parcours', contact: 'Contact' },
    hero: {
      badge: 'Disponible dès maintenant · CDI, alternance ou stage de fin d’études',
      hello: 'Bonjour, je suis',
      title: 'Développeur full-stack Java · Python · React',
      text: 'Je conçois des applications web complètes, de l’analyse des besoins à la mise en ligne : API sécurisées, interfaces soignées sur ordinateur et téléphone, et tests automatisés.',
      school: 'Ingénieur en génie informatique (niveau 7, équivalent Master, reconnu par ENIC-NARIC France) · 3IL Limoges',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
      stats: [
        { value: '5', label: 'applications en ligne' },
        { value: '600+', label: 'tests automatisés' },
        { value: '100 %', label: 'déployé en intégration continue' },
      ],
    },
    projects: {
      kicker: 'Réalisations',
      title: 'Des applications en ligne, pour de vraies entreprises',
      text: 'Chaque projet part d’un besoin réel : cahier des charges, conception, développement en TDD, puis mise en ligne avec intégration continue.',
      site: 'Voir en ligne',
      code: 'Code source',
      highlights: 'Points forts',
    },
    list: [
      {
        id: 'dits',
        name: 'DITS Group',
        context: 'Stage · conseil en bases de données · Livry-sur-Seine',
        summary:
          'Plateforme web d’une société de conseil en systèmes d’information : site vitrine, espace client avec documents partagés, recrutement avec dépôt de CV et tableau de bord d’administration pour gérer tous les contenus.',
        highlights: [
          'Connexion sécurisée par jetons JWT, rôles client et administrateur',
          'Documents, CV et images conservés en base malgré l’hébergement gratuit',
          'Audit de sécurité : secrets retirés du code, comptes de test neutralisés',
          'Intégration continue : serveur, site et image Docker testés à chaque envoi',
        ],
        stack: STACKS.dits,
        accent: '#b4881a',
        links: LINKS.dits,
      },
      {
        id: 'floreevent',
        name: 'FloreEvent',
        context: 'Location événementielle · Melun',
        summary:
          'Application de location de matériel et de services événementiels : catalogue avec disponibilités par dates, devis calculé en ligne, acompte par carte, factures PDF, planning des livraisons et gestion de la caution.',
        highlights: [
          'Disponibilités vérifiées sous verrou : jamais de double réservation',
          'Paiement Stripe validé uniquement par webhook signé',
          'Devis, factures et bons de livraison en PDF, numérotation sans trou',
          'Planning logistique, état des lieux au retour, casse retenue sur la caution',
        ],
        stack: STACKS.floreevent,
        accent: '#059669',
        links: LINKS.floreevent,
      },
      {
        id: 'milatech',
        name: 'MilaTech Management',
        context: 'Électronique : vente, réparation, formation · Yaoundé',
        summary:
          'Outil de gestion d’une boutique d’électronique : caisse et reçus PDF, stock avec alertes, suivi des réparations, formations, boutique en ligne et devis de réparation demandés par les clients.',
        highlights: [
          '5 rôles (gérant, vendeur, technicien, formateur, client) et leurs droits',
          'Règles métier : stock jamais négatif, prix figés, suivi des acomptes',
          'Démonstration en ligne avec un compte par rôle',
          '183 tests (JUnit, Mockito, Vitest)',
        ],
        stack: STACKS.milatech,
        accent: '#0e7490',
        links: LINKS.milatech,
      },
      {
        id: 'devmanager',
        name: 'DevManager',
        context: 'SaaS de gestion d’entreprise · web et Android',
        summary:
          'Projets et tâches en Kanban, suivi budgétaire, messagerie interne et tableau de bord. Chaque entreprise a son espace isolé, avec une offre gratuite et une offre Pro, et une application Android partage les mêmes données.',
        highlights: [
          'Multi-entreprise : données de chaque client isolées',
          'Application mobile React Native (Expo), APK publié',
          'Graphiques, thème clair et sombre, démo sans inscription',
          '72 tests automatisés',
        ],
        stack: STACKS.devmanager,
        accent: '#4f46e5',
        links: { ...LINKS.devmanager, extra: { label: 'Application Android', href: APK } },
      },
      {
        id: 'shoemanager',
        name: 'ShoeManager',
        context: 'Boutique de chaussures · Douala · projet en équipe de 3',
        summary:
          'Boutique en ligne et gestion d’un magasin de chaussures : stock par pointure et couleur, commande avec livraison ou retrait, réservation pour essayage, caisse en boutique et tableau de bord, en français et en anglais.',
        highlights: [
          'Stock calculé par pointure et couleur, réservations de 48 h',
          'Site bilingue français / anglais',
          'API documentée (OpenAPI) et 229 tests (pytest, Vitest)',
          'Travail en équipe : Scrum, Kanban et TDD',
        ],
        stack: STACKS.shoemanager,
        accent: '#c2410c',
        links: LINKS.shoemanager,
      },
    ] satisfies Project[],
    skills: {
      kicker: 'Compétences',
      title: 'Du besoin au déploiement',
      groups: [
        { title: 'Back-end', items: ['Java 21', 'Spring Boot', 'Spring Security · JWT', 'Python', 'Django REST', 'Flask', 'API REST', 'Flyway'] },
        { title: 'Front-end et mobile', items: ['React 19', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query', 'React Native · Expo'] },
        { title: 'Données', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Elasticsearch', 'Scrapy'] },
        { title: 'Qualité et tests', items: ['TDD', 'JUnit 5', 'Mockito', 'pytest', 'Vitest', 'Testing Library', 'Tests de bout en bout'] },
        { title: 'DevOps et cloud', items: ['Docker', 'GitHub Actions', 'Render', 'Vercel', 'Neon', 'AWS', 'Terraform', 'Ansible'] },
        { title: 'Méthodes', items: ['Analyse des besoins', 'Cahier des charges', 'Conception technique', 'Scrum', 'Kanban', 'Jira'] },
      ],
    },
    journey: {
      kicker: 'Parcours',
      title: 'Expériences et formation',
      experience: 'Expériences',
      education: 'Formation',
      jobs: [
        {
          role: 'Développeur full-stack · Stage',
          company: 'DITS group',
          place: 'Livry-sur-Seine',
          period: 'Juin – sept. 2026',
          text: 'Plateforme web d’entreprise avec site vitrine, espace client et tableau de bord d’administration : cahier des charges, API REST sécurisée, gestion des utilisateurs, des rôles, des e-mails et des documents, interface responsive.',
          stack: 'Java 21 · Spring Boot · React · PostgreSQL · Docker · GitHub Actions',
        },
        {
          role: 'Développeur full-stack · Stage',
          company: 'Yamo Group Sarl',
          place: 'Yaoundé',
          period: 'Févr. – juil. 2025',
          text: 'Moteur de recherche interne basé sur l’IA : analyse des besoins, architecture, fonctionnalités de recherche et interface web, sécurisation des services, tests TDD et conteneurisation.',
          stack: 'Python · Flask · React · Elasticsearch · Scrapy · Docker',
        },
      ] satisfies Experience[],
      degrees: [
        { title: 'Expert en architecture et développement logiciel', school: '3IL Ingénieurs, Limoges', period: 'Depuis sept. 2025' },
        {
          title: 'Diplôme d’ingénieur en génie informatique et télécommunications',
          school: 'École nationale supérieure polytechnique de Douala',
          period: '2020 – 2025',
          note: 'Reconnu niveau 7 (équivalent Master) par ENIC-NARIC France',
          proof: { label: 'Voir l’attestation', href: ATTESTATION },
        },
        { title: 'Licence de mathématiques et informatique', school: 'Université de Yaoundé I', period: '2017 – 2019' },
      ] satisfies Degree[],
      languages: 'Langues : français (langue maternelle), anglais (B1), allemand (débutant)',
      mobility: 'Permis B · mobile partout en France',
    },
    contact: {
      kicker: 'Contact',
      title: 'Travaillons ensemble',
      text: 'Développement logiciel, full-stack Java, Python et React. Écrivez-moi, je réponds rapidement.',
      searchTitle: 'Ce que je recherche',
      searches: [
        {
          kind: 'CDI',
          when: 'Dès maintenant',
          text: 'Développeur full-stack ou back-end. Diplôme d’ingénieur reconnu niveau 7 (équivalent Master).',
          proof: { label: 'Attestation ENIC-NARIC', href: ATTESTATION },
        },
        { kind: 'Alternance', when: 'Dès maintenant · 12 à 24 mois', text: 'En parallèle de mon cursus Expert en architecture et développement logiciel à 3IL Limoges.' },
        { kind: 'Stage de fin d’études', when: 'À partir de février 2027', text: 'Développement d’applications web, API sécurisées et tests automatisés.' },
      ] satisfies Search[],
      email: 'Écrire un e-mail',
      copy: 'Copier l’adresse',
      copied: 'Adresse copiée',
    },
    footer: 'Conçu et développé par Franck Tague',
  },
  en: {
    nav: { projects: 'Projects', skills: 'Skills', journey: 'Background', contact: 'Contact' },
    hero: {
      badge: 'Available now · permanent job, work-study or final-year internship',
      hello: 'Hi, I’m',
      title: 'Full-stack developer Java · Python · React',
      text: 'I build complete web applications, from requirements analysis to production: secure APIs, polished interfaces on desktop and mobile, and automated tests.',
      school: 'Computer engineering degree (level 7, Master’s equivalent, recognised by ENIC-NARIC France) · 3IL Limoges',
      cta: 'See my projects',
      contact: 'Contact me',
      stats: [
        { value: '5', label: 'applications in production' },
        { value: '600+', label: 'automated tests' },
        { value: '100%', label: 'shipped with continuous integration' },
      ],
    },
    projects: {
      kicker: 'Work',
      title: 'Live applications for real businesses',
      text: 'Each project starts from a real need: specifications, design, test-driven development, then deployment with continuous integration.',
      site: 'Live site',
      code: 'Source code',
      highlights: 'Highlights',
    },
    list: [
      {
        id: 'dits',
        name: 'DITS Group',
        context: 'Internship · database consulting · Livry-sur-Seine, France',
        summary:
          'Web platform for an IT consulting company: showcase website, customer area with shared documents, recruitment with CV upload and an admin dashboard to manage all content.',
        highlights: [
          'Secure sign-in with JWT tokens, customer and admin roles',
          'Documents, CVs and images kept in the database despite free hosting',
          'Security audit: secrets removed from the code, test accounts disabled',
          'Continuous integration: server, website and Docker image tested on every push',
        ],
        stack: STACKS.dits,
        accent: '#b4881a',
        links: LINKS.dits,
      },
      {
        id: 'floreevent',
        name: 'FloreEvent',
        context: 'Event rentals · Melun, France',
        summary:
          'Rental app for event equipment and services: catalog with date-based availability, instant online quotes, card deposits, PDF invoices, delivery planning and security deposit handling.',
        highlights: [
          'Availability checked under lock: no double booking',
          'Stripe payments confirmed only by signed webhooks',
          'PDF quotes, invoices and delivery notes with gapless numbering',
          'Logistics planning, return inspection, damages charged on the deposit',
        ],
        stack: STACKS.floreevent,
        accent: '#059669',
        links: LINKS.floreevent,
      },
      {
        id: 'milatech',
        name: 'MilaTech Management',
        context: 'Electronics: sales, repairs, training · Yaoundé',
        summary:
          'Management tool for an electronics shop: point of sale with PDF receipts, stock alerts, repair tracking, training courses, online shop and repair quotes requested by customers.',
        highlights: [
          '5 roles (manager, seller, technician, trainer, customer) with their own rights',
          'Business rules: stock never negative, frozen prices, deposit tracking',
          'Live demo with one account per role',
          '183 tests (JUnit, Mockito, Vitest)',
        ],
        stack: STACKS.milatech,
        accent: '#0e7490',
        links: LINKS.milatech,
      },
      {
        id: 'devmanager',
        name: 'DevManager',
        context: 'Business management SaaS · web and Android',
        summary:
          'Kanban projects and tasks, budget tracking, internal messaging and dashboards. Each company gets its own isolated space with Free and Pro plans, and an Android app shares the same data.',
        highlights: [
          'Multi-tenant: each customer’s data is isolated',
          'React Native (Expo) mobile app, APK released',
          'Charts, light and dark themes, demo without sign-up',
          '72 automated tests',
        ],
        stack: STACKS.devmanager,
        accent: '#4f46e5',
        links: { ...LINKS.devmanager, extra: { label: 'Android app', href: APK } },
      },
      {
        id: 'shoemanager',
        name: 'ShoeManager',
        context: 'Shoe shop · Douala · team of 3',
        summary:
          'Online store and shop management for a shoe store: stock by size and colour, delivery or pickup orders, fitting reservations, in-store point of sale and dashboard, in French and English.',
        highlights: [
          'Stock computed by size and colour, 48-hour reservations',
          'Bilingual French / English website',
          'Documented API (OpenAPI) and 229 tests (pytest, Vitest)',
          'Teamwork: Scrum, Kanban and TDD',
        ],
        stack: STACKS.shoemanager,
        accent: '#c2410c',
        links: LINKS.shoemanager,
      },
    ] satisfies Project[],
    skills: {
      kicker: 'Skills',
      title: 'From requirements to deployment',
      groups: [
        { title: 'Back end', items: ['Java 21', 'Spring Boot', 'Spring Security · JWT', 'Python', 'Django REST', 'Flask', 'REST APIs', 'Flyway'] },
        { title: 'Front end and mobile', items: ['React 19', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query', 'React Native · Expo'] },
        { title: 'Data', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Elasticsearch', 'Scrapy'] },
        { title: 'Quality and testing', items: ['TDD', 'JUnit 5', 'Mockito', 'pytest', 'Vitest', 'Testing Library', 'End-to-end tests'] },
        { title: 'DevOps and cloud', items: ['Docker', 'GitHub Actions', 'Render', 'Vercel', 'Neon', 'AWS', 'Terraform', 'Ansible'] },
        { title: 'Methods', items: ['Requirements analysis', 'Specifications', 'Technical design', 'Scrum', 'Kanban', 'Jira'] },
      ],
    },
    journey: {
      kicker: 'Background',
      title: 'Experience and education',
      experience: 'Experience',
      education: 'Education',
      jobs: [
        {
          role: 'Full-stack developer · Internship',
          company: 'DITS group',
          place: 'Livry-sur-Seine, France',
          period: 'June – Sept. 2026',
          text: 'Company web platform with a showcase site, customer area and admin dashboard: specifications, secure REST API, user, role, e-mail and document management, responsive interface.',
          stack: 'Java 21 · Spring Boot · React · PostgreSQL · Docker · GitHub Actions',
        },
        {
          role: 'Full-stack developer · Internship',
          company: 'Yamo Group Sarl',
          place: 'Yaoundé, Cameroon',
          period: 'Feb. – July 2025',
          text: 'AI-based internal search engine: requirements analysis, architecture, search features and web interface, service security, TDD and containerisation.',
          stack: 'Python · Flask · React · Elasticsearch · Scrapy · Docker',
        },
      ] satisfies Experience[],
      degrees: [
        { title: 'Software architecture and development expert programme', school: '3IL Engineering School, Limoges', period: 'Since Sept. 2025' },
        {
          title: 'Engineering degree in computer science and telecommunications',
          school: 'National Advanced School of Engineering, Douala',
          period: '2020 – 2025',
          note: 'Recognised at level 7 (Master’s equivalent) by ENIC-NARIC France',
          proof: { label: 'See the certificate', href: ATTESTATION },
        },
        { title: 'Bachelor’s degree in mathematics and computer science', school: 'University of Yaoundé I', period: '2017 – 2019' },
      ] satisfies Degree[],
      languages: 'Languages: French (native), English (B1), German (beginner)',
      mobility: 'Driving licence · willing to relocate anywhere in France',
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s work together',
      text: 'Software development, full-stack Java, Python and React. Drop me a line, I reply quickly.',
      searchTitle: 'What I’m looking for',
      searches: [
        {
          kind: 'Permanent job (CDI)',
          when: 'Available now',
          text: 'Full-stack or back-end developer. Engineering degree recognised at level 7 (Master’s equivalent).',
          proof: { label: 'ENIC-NARIC certificate', href: ATTESTATION },
        },
        { kind: 'Work-study', when: 'Available now · 12 to 24 months', text: 'Alongside my software architecture and development programme at 3IL Limoges.' },
        { kind: 'Final-year internship', when: 'From February 2027', text: 'Web application development, secure APIs and automated testing.' },
      ] satisfies Search[],
      email: 'Send an e-mail',
      copy: 'Copy address',
      copied: 'Address copied',
    },
    footer: 'Designed and built by Franck Tague',
  },
}

export type Content = (typeof CONTENT)['fr']
