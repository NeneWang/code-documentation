import comp from "C:/github/testing/code-documentation/docs/.vuepress/.temp/pages/posts/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/guide/\",\"title\":\"✍️ Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"✍️ Guide\"},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Organization\",\"slug\":\"organization\",\"link\":\"#organization\",\"children\":[]},{\"level\":2,\"title\":\"Disclaimer\",\"slug\":\"disclaimer\",\"link\":\"#disclaimer\",\"children\":[]},{\"level\":2,\"title\":\"Biologic Stats\",\"slug\":\"biologic-stats\",\"link\":\"#biologic-stats\",\"children\":[]}],\"git\":{\"updatedTime\":1710098392000,\"contributors\":[{\"name\":\"NelsonWang\",\"email\":\"wangnelson2@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/guide/Readme.md\",\"excerpt\":\"\\n<h2>Introduction</h2>\\n<ul>\\n<li>Using my programming experience, this is going to be biased towards programmers.</li>\\n<li>Also Will use my Skills to create tools to help people.</li>\\n<li>This is a work in progress, so it will be updated as I learn more.</li>\\n<li>Examples will be provided for the current time I am writing this, but I hope to make each tip/principle as time independent as possible.</li>\\n</ul>\"}")
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
