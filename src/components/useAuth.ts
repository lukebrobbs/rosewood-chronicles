import auth0 from "auth0-js"

const useAuth = () => {
  const Auth0 = new auth0.WebAuth({
    clientID: process.env.CLIENT_ID || "",
    domain: process.env.AUTH_DOMAIN || "",
    redirectUri: process.env.AUTH_REDIRECT_URI,
    responseType: "token id_token",
    scope: "openid",
  })

  return {
    login: () => Auth0.authorize(),
  }
}

export default useAuth
