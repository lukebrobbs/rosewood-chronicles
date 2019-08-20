const axios = require("axios")

exports.handler = async (event, context) => {
  try {
    const { email, subscribed } = event.queryStringParameters
    await axios.post(
      "https://us3.api.mailchimp.com/3.0/lists/2eccb994d3/members",
      {
        headers: {
          Authorization: `freefocusmgmt:${process.env.MAILCHIMP_API_TOKEN}`,
        },
        body: {
          status_if_new: subscribed ? "subscribed" : "unsubscribed",
          email_address: email,
        },
      }
    )
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `User subscribed successfully` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
