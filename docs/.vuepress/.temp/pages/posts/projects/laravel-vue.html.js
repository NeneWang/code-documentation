import comp from "C:/github/testing/code-documentation/docs/.vuepress/.temp/pages/posts/projects/laravel-vue.html.vue"
const data = JSON.parse("{\"path\":\"/posts/projects/laravel-vue.html\",\"title\":\"Larave Vue Project\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Larave Vue Project\"},\"headers\":[{\"level\":2,\"title\":\"Features\",\"slug\":\"features\",\"link\":\"#features\",\"children\":[{\"level\":3,\"title\":\"Links\",\"slug\":\"links\",\"link\":\"#links\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710098392000,\"contributors\":[{\"name\":\"NelsonWang\",\"email\":\"wangnelson2@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/projects/laravel-vue.md\",\"excerpt\":\"<h2>Features</h2>\\n<ul>\\n<li>Integrated Laravel + Vue</li>\\n<li>Using Vite</li>\\n<li>Backend deployed with communciation with API</li>\\n</ul>\\n<h3>Links</h3>\\n<ul>\\n<li>Live: project.wangnelson.xyz</li>\\n<li>Github: https://github.com/NeneWang/projectsdoc</li>\\n</ul>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
