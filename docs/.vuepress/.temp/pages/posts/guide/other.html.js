import comp from "C:/github/testing/code-documentation/docs/.vuepress/.temp/pages/posts/guide/other.html.vue"
const data = JSON.parse("{\"path\":\"/posts/guide/other.html\",\"title\":\"Others\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Others\"},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]}],\"git\":{\"updatedTime\":1710098392000,\"contributors\":[{\"name\":\"NelsonWang\",\"email\":\"wangnelson2@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/guide/other.md\",\"excerpt\":\"\\n<h2>Introduction</h2>\\n<p>Here more miscalaneous tips such as:</p>\\n<ul>\\n<li>Giving presentations</li>\\n<li>Writing Blogs</li>\\n<li>Being Creative.</li>\\n</ul>\\n\"}")
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
