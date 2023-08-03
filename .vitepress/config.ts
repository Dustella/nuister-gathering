import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuisters',
  description: 'Nuist Geek Gathering',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '技术社群', link: '/orgs' },
      { text: '游戏社群', link: '/games' },
      { text: '个人开发者', link: '/links' },
    ],
    footer: {
      message: 'By Dustella, Under CC BY-NC-SA 4.0 License',
      copyright: '',
    },

  },
  vite: {
    plugins: [Unocss()],
  },
  head: [
    ['link', { rel: 'icon', href: 'https://img-cdn.dustella.net/wizard.ico' }],
    // meta
    ['meta', { name: 'author', content: 'Nuister' }],
    ['meta', { name: 'keywords', content: 'Nuist Geek Gathering' }],
    // meta for seo
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],

  ],
})
