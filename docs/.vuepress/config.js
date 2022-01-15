module.exports = {
  title: 'f-test-ui文档库',
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/estibulish/fui' },
      { text: 'npm仓库', link: 'https://google.com' },
    ],
    sidebar: {
      '/guide/': ['/guide/', '/guide/select.md', '/guide/button.md'],
    }
  },
  plugins: ['demo-container'],
  head: [],
  markdown: {}
}