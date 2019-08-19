const sanityClient = require("@sanity/client")({
  projectId: "3589as9m", // you can find this in sanity.json
  dataset: "portfolio", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
})

module.exports = {
  getProjects: async function() {
    return await sanityClient.fetch("*[_type == 'project']")
  },
  getProject: async function(id) {
    return await sanityClient.getDocument(id)
  },
}
