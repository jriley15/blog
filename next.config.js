const projects = require("./util/data").projects

module.exports = {
  exportPathMap: function() {
    const pathMap = {
      "/": { page: "/" },
      "/projects": { page: "/index", query: { section: 2 } },
      "/blog": { page: "/blog" },
    }

    projects.map(project => {
      pathMap[`/project/${project.projectId}`] = {
        page: "/project",
        query: { id: project.projectId },
      }
    })

    return pathMap
  },
}
