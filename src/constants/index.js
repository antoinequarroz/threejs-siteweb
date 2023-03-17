import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vue,
    tailwind,
    bootstrapp,
    wordpress,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Projet",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Médiamaticien",
      icon: creator,
    },
    {
      title: "Développeur web",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Intégrateur Wordpress",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Bootstrap",
      icon:  bootstrapp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Apprenti médiamaticien",
      company_name: "Médiathèque Valais-Wallis",
      icon: starbucks,
      iconBg: "#383E56",
      date: "août 2017 - juin 2021",
      points: [
        "Développement de site web et d'application mobile.",
        "Collaboration technique avec l'équipe de médiation culturelle.",
        "Création d'affiches, flyers et autres visuels et autres projets audiovisuels.",
        "Participation à la gestion des réseaux sociaux.",
      ],
    },
    {
      title: "Moniteur de ski",
      company_name: "ESS-Nax",
      icon: shopify,
      iconBg: "#383E56",
      date: "décembre 2021 - mars 2022",
      points: [
        "Moniteur de ski pour les enfants de 3 à 12 ans.",
        "Moniteur de ski pour adultes.",
      ],
    },
    {
      title: "Manoeuvre en charpente",
      company_name: "Pralong-Moix SA",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "avril 2022 - juin 2022",
      points: [
        "Manoeuvre en charpente.",
      ],
    },
    {
      title: "Étudiant en développement",
      company_name: "École 42",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "juin 2022 - juillet 2022",
      points: [
        "Développement en language C.",
        "Création de projets en groupe.",
        "Utilisation de la méthode SCRUM.",
        "Travail en équipe et utilisation de Git.",
      ],
    },
    {
      title: "Job d'étudiant",
      company_name: "Commune de Saint-Martin",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "juillet 2022 - août 2022",
      points: [
        "Refonte des archives de la commune de Saint-Martin.",
        "Tris et classement des archives.",
      ],
    },
    {
      title: "Médiamaticien",
      company_name: "HES-SO Valais-Wallis",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "décembre 2022 - présent",
      points: [
        "Création de capsule vidéo pour des eLearning. Et de contenu multimédia",
        "Collaborateur technique pour la simulation en soins infirmiers.",
        "Création de contenu pour les médias sociaux de l'HEdS.",
        "Développement web et VR.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ski-club de Saint-Martin",
      description:
        "Site de présentation du ski-club de Saint-Martin.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://skiclub-stmartin.ch/",
    },
    {
      name: "RestoBar",
      description:
        "Site de présentation du restaurant-bar de Le Saint-Martin.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://lesaintmartin.ch/",
    },
    {
      name: "Thibault Rossier",
      description:
        "Site du fans-club Thibault Rossier.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://thibaultrossier.ch/",
    },
    {
      name: "Makerspace",
      description:
          "Application web pour le Makerspace à la Médiathèque-Valais.",
      tags: [
        {
          name: "Grav",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://thibaultrossier.ch/",
    },
    {
      name: "Clone de Chat-GPT",
      description:
          "Clone de Chat-GPT en utilisant l'API de GPT-3.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://thibaultrossier.ch/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };