const sanityClient = require("@sanity/client")({
  projectId: "3589as9m", // you can find this in sanity.json
  dataset: "posts", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
})

const imageUrlBuilder = require("@sanity/image-url")

const builder = imageUrlBuilder(sanityClient)

module.exports = {
  getPosts: async function() {
    return await sanityClient.fetch(
      "*[_type == 'post']{..., 'mainImageUrl': mainImage.asset->url}"
    )
  },
  getPost: async function(id) {
    return await sanityClient.getDocument(id)
  },
  urlFor: source => {
    return builder.image(source)
  },
}
