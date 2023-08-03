import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LarapexCharts",
  description: "Documentation Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'First Chart', link: '/first-chart' },
          { text: 'More Charts', link: '/more-charts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ArielMejiaDev/larapex-charts' }
    ]
  }
})
