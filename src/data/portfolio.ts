import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  navigation: [
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Knowledge' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    roles: [
      'React + Vite + TypeScript',
      'Node.js + Express',
      'REST API Design',
      'Deployment Ready Delivery',
    ],
    stats: [
      { label: 'Core Role', value: 'Full Stack' },
      { label: 'Focus', value: 'End-to-End' },
      { label: 'Mindset', value: 'Maintainable' },
    ],
    principles: [
      'Clear architecture over accidental complexity',
      'Strong contracts between interface and API',
      'Delivery that supports long-term product evolution',
    ],
  },
  about: {
    copy: [
      'I build applications across the entire flow, from product-oriented front-end architecture to scalable back-end services, API integration and production readiness.',
      'I currently work as a Mid-Level Developer at Kafnet, where I contribute to complete end-to-end systems, connecting architecture, interface, back-end services and delivery.',
      'I value thoughtful interfaces, disciplined implementation and systems that feel cohesive from the first interaction to production.',
      'My work is centered on clean architecture, modular structure, maintainability and software that can keep growing without turning into chaos.',
    ],
    credentials: [
      {
        label: 'Education',
        value: 'Information Systems Degree',
        description:
          'Graduated in Information Systems, building a solid base across software engineering, systems thinking and product-oriented development.',
      },
      {
        label: 'Current Role',
        value: 'Mid-Level Developer at Kafnet',
        description:
          'Working on complete end-to-end systems, from interface decisions and API integration to business rules and production-focused implementation.',
      },
    ],
    highlights: [
      {
        title: 'Product Thinking',
        description:
          'Interfaces are designed around real workflows, not isolated screens or decorative patterns.',
      },
      {
        title: 'System Design',
        description:
          'Every layer needs clear responsibilities, from React components to service boundaries and business rules.',
      },
      {
        title: 'API Discipline',
        description:
          'Contracts, consistency and predictable integration matter as much as raw implementation speed.',
      },
      {
        title: 'Production Readiness',
        description:
          'I care about delivery quality, scalability over time and codebases that teams can actually maintain.',
      },
      {
        title: 'Interaction Quality',
        description:
          'I pay attention to pacing, atmosphere and hierarchy so interfaces feel intentional while staying clear and professional.',
      },
    ],
  },
  expertise: [
    {
      title: 'Front-End',
      description:
        'Modern interface engineering with React, Vite and TypeScript, balancing experience, maintainability and performance.',
      items: [
        'Component architecture',
        'Responsive UI systems',
        'Interactive dashboards',
        'Tailwind and design tokens',
      ],
    },
    {
      title: 'Back-End',
      description:
        'Structured services with Node.js, Express and TypeScript, designed for business rules, API quality and future scale.',
      items: [
        'REST APIs',
        'Service modularization',
        'Authentication flows',
        'Integration-ready design',
      ],
    },
    {
      title: 'Delivery',
      description:
        'From repository organization to deployment mindset, I focus on clean handoff, predictable evolution and real product shipping.',
      items: [
        'Git and collaboration',
        'Deploy-minded implementation',
        'Code quality discipline',
        'Scalable project structure',
      ],
    },
  ],
  projects: [
    {
      title: 'Resource & Hours Management System',
      category: 'Operations Platform',
      summary:
        'A structured platform to manage people allocation, hour tracking, planning visibility and operational flow across teams.',
      stack: ['React', 'TypeScript', 'Node.js'],
      metrics: ['Allocation logic', 'Time tracking', 'Operational dashboards'],
      repoHref: '#',
    },
    {
      title: 'Fiscal Invoice Portal',
      category: 'Enterprise Workflow',
      summary:
        'A portal designed to centralize fiscal note flows, validation steps and operational visibility with reliable business logic.',
      stack: ['React', 'Express', 'REST API'],
      metrics: ['Validation flow', 'Document handling', 'Back-office control'],
      repoHref: '#',
    },
    {
      title: 'Complete Spotify Clone',
      category: 'Experience-Driven Interface',
      summary:
        'A full interface recreation focused on immersive navigation, player interactions and polished UI behavior inspired by music products.',
      stack: ['React', 'TypeScript', 'Tailwind'],
      metrics: ['Player experience', 'Motion details', 'Playlist structure'],
      repoHref: '#',
    },
    {
      title: 'Prada Recommerce Platform',
      category: 'Luxury Commerce',
      summary:
        'A recommerce experience combining elevated visual treatment, structured catalog flow and scalable interface architecture.',
      stack: ['React', 'Node.js', 'TypeScript'],
      metrics: ['Catalog flow', 'Luxury UI', 'Scalable modularity'],
      repoHref: '#',
    },
    {
      title: 'Logistics & Reverse Logistics System',
      category: 'Supply Chain Operations',
      summary:
        'A platform for handling shipping, return routes and process monitoring with clear operational visibility and reliable tracking.',
      stack: ['TypeScript', 'Express', 'REST API'],
      metrics: ['Route control', 'Reverse flow', 'Tracking visibility'],
      repoHref: '#',
    },
    {
      title: 'Complete CRM & Financial Management Panel',
      category: 'Business Intelligence',
      summary:
        'A complete CRM with financial visibility, management workflows and a decision-focused dashboard for day-to-day operation.',
      stack: ['React', 'Node.js', 'Dashboards'],
      metrics: ['Lead pipeline', 'Financial overview', 'Management panel'],
      repoHref: '#',
    },
  ],
  contacts: [
    {
      label: 'GitHub',
      value: 'github.com/pedromzn',
      href: 'https://github.com/pedromzn',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/pedromzn',
      href: 'https://www.linkedin.com/in/pedro-menzinger/',
    },
    {
      label: 'Email',
      value: 'pedromenzinger@gmail.com',
      href: 'mailto:pedromenzinger@gmail.com',
    },
  ],
}
