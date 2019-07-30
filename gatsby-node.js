/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const path = require("path")

const readJsonAsync = (filepath, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", function(err, data) {
      if (err) {
        reject(err)
      } else {
        const result = JSON.parse(data)
        if (result) {
          resolve(result)
        } else {
          throw new Error("Json parse error")
        }
      }
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templateComponent = path.resolve(`src/templates/project.js`)

    readJsonAsync(path.resolve(`src/data.json`)).then(data => {
      data.projects.forEach(pageData => {
        const pagePath = pageData.pagePath
        createPage({
          path: pagePath,
          component: templateComponent,
          context: pageData,
        })
      })
      resolve()
    })
  })
}
