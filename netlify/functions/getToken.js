exports.handler = (event, context, callback) => {
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Incorrect HTTP method. " }),
    };
  }

  const body = JSON.parse(event.body);
  const { username, roomName } = body;

  const AccessToken = require("twilio").jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  // Used when generating any kind of tokens
  const twilioAccountSid = process.env.twilio.account_sid;
  const twilioApiKey = process.env.twilio.api_key_sid;
  const twilioApiSecret = process.env.twilio.api_key_secret;

  // Create Video Grant
  const videoGrant = new VideoGrant({
    room: roomName,
  });

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    {
      identity: username,
    }
  );
  token.addGrant(videoGrant);

  return {
    statusCode: 200,
    body: {
      token: token.toJwt(),
    },
  };
};
