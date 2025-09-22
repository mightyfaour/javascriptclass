const twilio require('twilio');
const client = new twilio("ACCOUNT_SID", "AUTH_TOKEN");

client.messages.create({
    body: "Hello from Node.js",
    to: "+1234567890",  // Text this number
    from: "+0987654321" 
});
