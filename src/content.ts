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
export type Degree = { title: string; school: string; period: string }

export const CONTACT = {
  email: 'taguefranck3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tague-franck',
  github: 'https://github.com/TAGUE-GITH',
}

const STACKS = {
  floreevent: ['Java 21', 'Spring Boot 4', 'Spring Security', 'PostgreSQL', 'Flyway', 'React 19', 'TypeScript', 'Tailwind', 'Stripe', 'Docker', 'GitHub Actions'],
  milatech: ['Java 21', 'Spring Boot 4', 'Spring Security', 'PostgreSQL', 'React 19', 'TypeScript', 'Tailwind', 'OpenPDF', 'Brevo', 'Docker'],
  devmanager: ['Java 21', 'Spring Boot 4', 'JWT', 'PostgreSQL', 'React 19', 'React Native', 'Expo', 'Docker', 'GitHub Actions'],
  shoemanager: ['Python', 'Django REST', 'PostgreSQL', 'React', 'Tailwind', 'i18n', 'OpenAPI', 'Docker', 'pytest'],
}

const LINKS = {
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
      badge: 'Disponible en alternance · 24 mois dès octobre 2026',
      hello: 'Bonjour, je suis',
      title: 'Développeur full-stack Java · Python · React',
      text: 'Je conçois des applications web complètes, de l’analyse des besoins à la mise en ligne : API sécurisées, interfaces soignées sur ordinateur et téléphone, et tests automatisés.',
      school: 'Élève-ingénieur Expert en architecture et développement logiciel · 3IL Limoges',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
      stats: [
        { value: '4', label: 'applications en ligne' },
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
        { title: 'Diplôme d’ingénieur en génie informatique et télécommunications', school: 'École nationale supérieure polytechnique de Douala', period: '2020 – 2025' },
        { title: 'Licence de mathématiques et informatique', school: 'Université de Yaoundé I', period: '2017 – 2019' },
      ] satisfies Degree[],
      languages: 'Langues : français (langue maternelle), anglais (B1), allemand (débutant)',
      mobility: 'Permis B · mobile partout en France',
    },
    contact: {
      kicker: 'Contact',
      title: 'Travaillons ensemble',
      text: 'Je recherche une alternance de 24 mois à partir d’octobre 2026 en développement logiciel. Écrivez-moi, je réponds rapidement.',
      email: 'Écrire un e-mail',
      copy: 'Copier l’adresse',
      copied: 'Adresse copiée',
    },
    footer: 'Conçu et développé par Franck Tague',
  },
  en: {
    nav: { projects: 'Projects', skills: 'Skills', journey: 'Background', contact: 'Contact' },
    hero: {
      badge: 'Open to a 24-month work-study position from October 2026',
      hello: 'Hi, I’m',
      title: 'Full-stack developer Java · Python · React',
      text: 'I build complete web applications, from requirements analysis to production: secure APIs, polished interfaces on desktop and mobile, and automated tests.',
      school: 'Software engineering student, software architecture and development · 3IL Limoges',
      cta: 'See my projects',
      contact: 'Contact me',
      stats: [
        { value: '4', label: 'applications in production' },
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
        { title: 'Engineering degree in computer science and telecommunications', school: 'National Advanced School of Engineering, Douala', period: '2020 – 2025' },
        { title: 'Bachelor’s degree in mathematics and computer science', school: 'University of Yaoundé I', period: '2017 – 2019' },
      ] satisfies Degree[],
      languages: 'Languages: French (native), English (B1), German (beginner)',
      mobility: 'Driving licence · willing to relocate anywhere in France',
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s work together',
      text: 'I’m looking for a 24-month work-study position in software development starting October 2026. Drop me a line, I reply quickly.',
      email: 'Send an e-mail',
      copy: 'Copy address',
      copied: 'Address copied',
    },
    footer: 'Designed and built by Franck Tague',
  },
}

export type Content = (typeof CONTENT)['fr']
