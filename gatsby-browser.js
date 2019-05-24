const React = require("react")
const { AuthProvider } = require("./src/components/AuthProvider.tsx")

exports.wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>
}
