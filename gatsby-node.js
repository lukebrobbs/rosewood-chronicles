const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const studentsComponent = path.resolve(
      "./src/components/Students/Students.tsx"
    )
    const meetTheStudentsComponent = path.resolve(
      "./src/components/Students/MeetTheStudents.tsx"
    )
    resolve(
      graphql(`
        {
          allContentfulMeetTheStudents {
            edges {
              node {
                house
                houseDetails {
                  description {
                    description
                  }
                  desktopInsignia {
                    fluid {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                      tracedSVG
                    }
                  }
                  mobileInsignia {
                    fluid {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                      tracedSVG
                    }
                  }
                }
                studentDescriptions {
                  name
                  birthday(formatString: "MMMM Do")
                  favouriteThings {
                    favouriteThings
                  }
                  leastFavouriteThings {
                    leastFavouriteThings
                  }
                  inTheirBag {
                    inTheirBag
                  }
                  quote {
                    quote
                  }
                }
                studentsImage {
                  fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
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
        result.data.allContentfulMeetTheStudents.edges.forEach(edge => {
          const {
            house,
            houseDetails,
            studentDescriptions,
            studentsImage,
          } = edge.node
          createPage({
            path: `/students/${edge.node.house.toLowerCase()}`,
            component: meetTheStudentsComponent,
            context: {
              house,
              houseDetails,
              studentDescriptions,
              studentsImage,
              slug: edge.node.house.toLowerCase(),
            },
          })
        })
        return
      })
    )
  })
}
