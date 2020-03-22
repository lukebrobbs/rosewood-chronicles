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

  const yearBookStudents = await graphql(`
    query {
      contentfulYearbookLandingPage {
        students {
          displayName
          house
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

  yearBookStudents.data.contentfulYearbookLandingPage.students.forEach(
    (student, index) => {
      const { students } = yearBookStudents.data.contentfulYearbookLandingPage
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
}
