import comp from "C:/github/testing/code-documentation/docs/.vuepress/.temp/pages/posts/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/projects/\",\"title\":\"Projects Glossary\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects Glossary\"},\"headers\":[{\"level\":2,\"title\":\"A Guide into Building any Projects\",\"slug\":\"a-guide-into-building-any-projects\",\"link\":\"#a-guide-into-building-any-projects\",\"children\":[]}],\"git\":{\"updatedTime\":1710098392000,\"contributors\":[{\"name\":\"NelsonWang\",\"email\":\"wangnelson2@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/projects/Readme.md\",\"excerpt\":\"<p>While individual problems will be tackled on the journal.\\nHere will I will be having the larger projects on it.</p>\\n<p>e.g.</p>\\n<ul>\\n<li>The database design, Architecture Design</li>\\n<li>and the stack choice,</li>\\n<li>as well as global variables</li>\\n</ul>\\n\"}")
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
