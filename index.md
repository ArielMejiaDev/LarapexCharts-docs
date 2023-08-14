---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "LarapexCharts"
  text: "Render Charts Faster"
  image:
    src: /assets/icon.png
    alt: LarapexCharts logo
  tagline: Create charts writing only PHP in your Laravel app
  actions:
    - theme: brand
      text: Installation
      link: /installation
    - theme: alt
      text: First Chart
      link: /first-chart

# Features section
features:
  - icon: ⚡️
    title: Create charts in seconds
    details: The package provides an artisan command to generate charts in seconds
  - icon: 🎉
    title: Power of Vue & Blade Templates
    details: You can choose to render charts in Blade (PHP) or VueJS templates using Inertia.
  - icon: 🔥
    title: Tons of customizations
    details: You can create a pretty minimalistic chart or make it as complex as you need

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Adocs
  - - meta
    - property: og:image
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - meta
    - property: og:url
      content: https://vitejs.dev/blog/announcing-vite3
  - - meta
    - name: title
      content: Adocs
  - - meta
    - name: twitter:card
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---

<!-- Custom home layout -->
<div class="custom-layout">
  <h1 class="emoji">🎉</h1>
  <h1>More than 100,000 Downloads!!!</h1>
  <!-- <p>This section was added using plain HTML and CSS.</p> -->
  <a href="/installation" class="btn">Get Started</a>
</div>