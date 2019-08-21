const axios = require("axios")

exports.handler = async (event, context) => {
  try {
    const { email, subscribed } = event.queryStringParameters
    const status = subscribed === "true" ? "subscribed" : "pending"
    console.log({ subscribed, status, email })

    await axios({
      method: "post",
      url: "https://us3.api.mailchimp.com/3.0/lists/2eccb994d3/members",
      auth: {
        username: "anystring",
        password: process.env.MAILCHIMP_API_TOKEN,
      },
      data: {
        status,
        email_address: email,
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `User subscribed successfully` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
