import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LarapexCharts",
  description: "Documentation Site",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon.png"}],
    // ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    // ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicon.png"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    // ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    logo: '/assets/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'First Chart', link: '/first-chart' },
          { text: 'More Charts', link: '/more-charts' },
          { text: 'Customize Charts', link: '/customize-charts' }
        ]
      },
      {
        text: 'Advance',
        items: [
          { text: 'Using Eloquent', link: '/using-eloquent' },
          { text: 'Long Numbers', link: '/long-numbers' },
          { text: 'Chart Stubs', link: '/chart-stubs' },
          { text: 'Host JS', link: '/host-js' },
        ]
      },
      {
        text: 'Frontend',
        items: [
          { text: 'Build Charts With Vue', link: '/build-charts-with-vue' },
          { text: 'More JS Frameworks', link: '/more-js-frameworks' },
        ]
      },
      {
        text: 'Donate',
        items: [
          { text: 'Donate', link: '/donate' },
        ]
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present - Ariel Mejia Dev",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ArielMejiaDev/larapex-charts' },
      { icon: "twitter", link: "https://twitter.com/arielmejiadev" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/arielmejiadev" },
    ],
  }
})
