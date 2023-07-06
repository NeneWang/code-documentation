const {
  description
} = require('../../package')

module.exports = {
  title: 'Docs',
  publicPath: './',
  extendsMarkdown: (md) => {
    md.use('markdown-it-task-lists')
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },

  description: description,
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    // ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vue/dist/vue.js` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js` }],
  ],

  // docs/.vuepress/dist

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: ' 👩‍💻 Code',
        link: '/code/',
      },
      {
        text: ' 🏗 Project',
        link: '/projects/'
      }, {
        text: ' 📓 Journal',
        link: '/journal/'
      },
      {
        text: "Admin",
        link: "https://project.wangnelson.xyz/public/prod"
      }
    ],
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["vuepress-plugin-auto-sidebar", {
      // sort: {
      //   readmeFirstForce: true,
      // },
      title: {
        mode: "titlecase",
        map: {
          "/code/mobile/": "mobile",
          "/code/web/": "web"
        }
      },
      sidebarDepth: 1,
      collapse: {
        open: true,
        collapseList: ["/code/web/"],
        uncollapseList: ["/code/game/"]
      },
    }]
  ],

}