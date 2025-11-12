const message = process.env.INPUT_MESSAGE;
const slackWebhookUrl = process.env.INPUT_SLACK_WEBHOOK_URL;

if (!message) {
  console.error("missing 'message' required param");
  process.exit(1);
}

if (!slackWebhookUrl) {
  console.error("missing 'slack_webhook_url' required param");
  process.exit(1);
}

console.log(message);
