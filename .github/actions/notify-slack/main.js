const message = process.env.INPUT_MESSAGE;
const slackWebhookUrl = process.env.INPUT_SLACK_WEBHOOK_URL;
const messageType = process.env.INPUT_TYPE;

if (!message) {
  console.error("missing 'message' required param");
  process.exit(1);
}

if (!slackWebhookUrl) {
  console.error("missing 'slack_webhook_url' required param");
  process.exit(1);
}

const main = async () => {
  const response = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      attachments: [{ text: message, color: messageType }],
    }),
  });

  console.log(response);
};

main();
