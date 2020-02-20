const React = require("react")
const { ParallaxProvider } = require("react-scroll-parallax")
const { Helmet } = require("react-helmet")
const { Layout } = require("./src/components/layout/layout")
const { Navigation } = require("./src/components/Nav")

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Helmet>
      {element}
    </>
  )
}

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout page={props.path}>
      <Navigation />
      {element}
    </Layout>
  )
}
