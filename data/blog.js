const sanityClient = require("@sanity/client")({
  projectId: "3589as9m", // you can find this in sanity.json
  dataset: "portfolio", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
})

const imageUrlBuilder = require("@sanity/image-url")

const builder = imageUrlBuilder(sanityClient)

module.exports = {
  getPosts: async function() {
    let posts = await sanityClient.fetch(
      "*[_type == 'post']{..., 'mainImageUrl': mainImage.asset->url}"
    )
    //console.log(posts)
    return posts
  },
  getPost: async function(id) {
    return await sanityClient.getDocument(id)
  },
  urlFor: source => {
    return builder.image(source)
  },
}
