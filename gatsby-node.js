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
      contentfulYearbookLandingPage {
        students {
          displayName
          house
        }
      }
      allContentfulStory {
        edges {
          node {
            title
            id
            slug
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
        sorted: true,
      },
    })
    createPage({
      path: `/${house.toLowerCase()}`,
      component: path.resolve("./src/components/SortedHouse.tsx"),
      context: {
        house,
        sorted: false,
      },
    })
  })

  result.data.contentfulYearbookLandingPage.students.forEach(
    (student, index) => {
      const { students } = result.data.contentfulYearbookLandingPage
      createPage({
        path: `/yearbook/${student.displayName.toLowerCase()}`,
        component: path.resolve("./src/components/YearbookStudent.tsx"),
        context: {
          displayName: student.displayName,
          house: student.house.toLowerCase(),
          nextStudent:
            students[index + 1] &&
            students[index + 1].displayName.toLowerCase(),
          prevStudent:
            students[index - 1] &&
            students[index - 1].displayName.toLowerCase(),
        },
      })
    }
  )
  result.data.allContentfulStory.edges.forEach(({ node }) => {
    createPage({
      path: `/library/${node.slug}`,
      component: path.resolve("./src/components/Story.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}
