import comp from "C:/github/testing/code-documentation/docs/.vuepress/.temp/pages/posts/projects/angular-pro.html.vue"
const data = JSON.parse("{\"path\":\"/posts/projects/angular-pro.html\",\"title\":\"Angular Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Angular Projects\",\"tags\":[\"Angular\",\".net\"]},\"headers\":[{\"level\":2,\"title\":\"Tik Tak Toe\",\"slug\":\"tik-tak-toe\",\"link\":\"#tik-tak-toe\",\"children\":[]},{\"level\":2,\"title\":\"CRUD Angular + .NET\",\"slug\":\"crud-angular-net\",\"link\":\"#crud-angular-net\",\"children\":[]}],\"git\":{\"updatedTime\":1710098392000,\"contributors\":[{\"name\":\"NelsonWang\",\"email\":\"wangnelson2@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/projects/angular-pro.md\",\"excerpt\":\"<p>Here some projects that could be used as templates as well.</p>\\n<h2>Tik Tak Toe</h2>\\n<p>Tutorial used: https://www.youtube.com/watch?v=G0bBLvWXBvc</p>\\n<p>Repository:</p>\\n<p>https://github.com/NeneWang/tictactoe</p>\\n<h2>CRUD Angular + .NET</h2>\\n<p>Tutorial used: https://www.youtube.com/watch?v=dtthbiP3SE0</p>\"}")
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
