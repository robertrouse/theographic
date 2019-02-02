/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  let urlSlug

  if (node && node.internal.type === `Airtable` && node.table === `places`) {
    urlSlug = `/place/${node.data.slug}/`
  } else if (node && node.internal.type === `Airtable` && node.table === `people`) {
    urlSlug = `/person/${node.data.slug}/`
  } else if (node && node.internal.type === `Airtable` && node.table === `events`) {
    urlSlug = `/period/${node.data.slug}/`
  } else if (node && node.internal.type === `Airtable` && node.table === `books`) {
    urlSlug = `/${node.data.slug}/`
  }
  createNodeField({node, name: `urlSlug`, value: urlSlug})
}

exports.createPages = ({graphql, actions}) => {

  const placesPages = makingPages(`src/templates/placeTemplate.js`, 'places', 'placeLookup', graphql, actions)
  const peoplePages = makingPages(`src/templates/personTemplate.js`, 'people', 'personLookup', graphql, actions)
  const periodPages = makingPages(`src/templates/periodTemplate.js`, 'events', 'eventGroup', graphql, actions)
  const passagePages = makingPages(`src/templates/passageTemplate.js`, 'books', 'bookName', graphql, actions)
  
  return peoplePages,placesPages,periodPages,passagePages;

}

function makingPages (templatePath, table, lookupName, graphql, actions) {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const template = path.resolve(templatePath)

    resolve(
      graphql(
        `
        {
          neo4j {
            ${lookupName} {
              slug
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error)
          })
          reject(result.errors)
        }
        
        var uniqueItems = [...new Set(result.data.allAirtable.edges)]
        uniqueItems.forEach(edge => {
          createPage({
            path: edge.node.fields.urlSlug, 
            component: template,
            context: {
              lookupName: edge.data[lookupName],
              wideMap: edge.data[lookupName].slug + "_wide.png"
            }
          })
        })
        return
      })
    )
  })
}