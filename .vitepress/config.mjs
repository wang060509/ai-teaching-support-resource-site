import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Teaching Support Knowledge Base',
  description:
    'A teaching-support resource site for beginner-friendly AI literacy and reusable learning materials.',
  base: '/ai-teaching-support-resource-site/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Teaching Support',
    nav: [
      { text: 'Overview', link: '/project-overview' },
      { text: 'Guides & Modules', link: '/selected-deliverables' },
      { text: 'Workflow', link: '/workflow' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Knowledge Base',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Project Overview', link: '/project-overview' },
          { text: 'Workflow', link: '/workflow' },
          { text: 'About', link: '/about' }
        ]
      },
      {
        text: 'Guides & Modules',
        items: [
          { text: 'Overview', link: '/selected-deliverables/' },
          { text: 'AI Evaluation Beginner Guide', link: '/selected-deliverables/ai-evaluation-beginner-guide' },
          { text: 'AI Capabilities and Limitations', link: '/selected-deliverables/ai-capabilities-limitations' },
          { text: 'AI-Assisted Project Workflow', link: '/selected-deliverables/beginner-vibe-coding-guide' },
          { text: 'Codex Beginner Workflow', link: '/selected-deliverables/codex-beginner-workflow' },
          { text: 'Workshop Module Map', link: '/selected-deliverables/workshop-module-map' }
        ]
      }
    ],
    outline: {
      label: 'On this page',
      level: [2, 3]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [],
    footer: {
      message: 'Personal learning and teaching-support site. Not an official institutional website.',
      copyright: 'AI Teaching Support Knowledge Base'
    }
  }
})
