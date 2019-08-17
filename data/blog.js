const client = require("contentful").createClient({
  space: "i4tg1odi6szf", //process.env.SPACE_ID,
  accessToken: "dyYpdf5QLOErJecEzpBQDxEJWOj4Pj8W71aU3gedPCY", //process.env.ACCESS_TOKEN
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

  getSanityPosts: async() => {

  }
}
