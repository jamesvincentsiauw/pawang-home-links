export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Pawang AI (demo perbaikan beranda)',
      meta: [
        { name: 'description', content: 'Reproduksi dan perbaikan temuan audit pawang.io: tombol beranda jadi link dan katalog di-render server.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Space+Grotesk:wght@700&display=swap',
        },
      ],
    },
  },
})
