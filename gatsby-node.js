const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulHouseDescription {
        edges {
          node {
            house
          }
        }
      }
    }
  `)

  result.data.allContentfulHouseDescription.edges.forEach(({ node }) => {
    const { house } = node
    createPage({
      path: `/sorting-quiz/${house.toLowerCase()}`,
      component: path.resolve("./src/components/SortedHouse.tsx"),
      context: {
        house,
      },
    })
  })
}
