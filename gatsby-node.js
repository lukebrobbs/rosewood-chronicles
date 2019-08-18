const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const studentsComponent = path.resolve(
      "./src/components/Students/Students.tsx"
    )
    resolve(
      graphql(`
        {
          allContentfulMeetTheStudents {
            edges {
              node {
                house
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        createPage({
          path: "/students",
          component: studentsComponent,
          context: {
            slug: "students",
          },
        })
        // result.data.allContentfulMeetTheStudents.edges.forEach(edge => {
        //   createPage({
        //     path: edge.node.house,
        //     component: conchTemplate,
        //     context: {
        //       slug: edge.node.house,
        //     },
        //   })
        // })
        return
      })
    )
  })
}
