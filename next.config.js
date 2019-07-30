const projects = require("./util/data").projects

module.exports = {
  exportPathMap: function() {
    const pathMap = {
      "/": { page: "/" },
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
