exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Incorrect HTTP method. " }),
    };
  }

  // Make twilio client
  const twilioApiKey = process.env.api_key_sid;
  const twilioApiSecret = process.env.api_key_secret;

  const client = require("twilio")(twilioApiKey, twilioApiSecret);

  // list rooms
  client.video.rooms
    .list({ status: "in-progress", limit: 10 })
    .then((rooms) => {
      return rooms;
    });
};
