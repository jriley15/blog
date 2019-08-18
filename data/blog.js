const client = require("contentful").createClient({
  space: "i4tg1odi6szf", //process.env.SPACE_ID,
  accessToken: "dyYpdf5QLOErJecEzpBQDxEJWOj4Pj8W71aU3gedPCY", //process.env.ACCESS_TOKEN
})

const sanityClient = require("@sanity/client")({
  projectId: "3589as9m", // you can find this in sanity.json
  dataset: "projects", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
})

module.exports = {
  getPosts: async function() {
    const posts = await client.getEntries({
      content_type: "blogPost",
    })
    return posts.items
  },
  getPost: async function(id) {
    const post = await client.getEntry(id)

    return post
  },

  getSanityPosts: async function(id) {},
}
