const axios = require("axios")

exports.handler = async (event, context) => {
  try {
    const {
      email,
      subscribed,
      firstName,
      lastName,
    } = event.queryStringParameters
    const status = subscribed === "true" ? "subscribed" : "pending"
    console.log({ subscribed, status, email })

    await axios({
      method: "post",
      url: `https://${process.env.MC_REGION}.api.mailchimp.com/3.0/lists/${propcess.env.MAILCHIMP_LIST_ID}/members`,
      auth: {
        username: "anystring",
        password: process.env.MAILCHIMP_API_TOKEN,
      },
      data: {
        status,
        email_address: email,
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
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
