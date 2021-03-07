exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Incorrect HTTP method. " }),
    };
  }

  // Make twilio client
  const twilioAccountSid = process.env.account_sid;
  const twilioApiKey = process.env.api_key_sid;
  const twilioApiSecret = process.env.api_key_secret;

  const client = require("twilio")(twilioApiKey, twilioApiSecret, {
    accountSid: twilioAccountSid,
  });

  // list rooms
  const rooms = await client.video.rooms.list({
    status: "in-progress",
    limit: 10,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(rooms),
  };
};
