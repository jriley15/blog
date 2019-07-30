const projects = require("./util/data").projects

module.exports = {
  exportPathMap: function() {
    const pathMap = {
      "/": { page: "/" },
      "/projects": { page: "/index", query: { section: 2 } },
    }

    projects.map(project => {
      pathMap[`/project/${project.projectId}`] = {
        page: "/project",
        query: { project: project },
      }
    })

    return pathMap
  },
}
