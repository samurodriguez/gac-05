const message = process.env.INPUT_MESSAGE;

if (!message) {
  process.exit(1);
}

console.log(message);
