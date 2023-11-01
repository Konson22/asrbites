const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = twilio(accountSid, authToken);

app.post('/send-whatsapp', async (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${phoneNumber}`,
    });
    res.status(200).send('WhatsApp message sent successfully.');
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).send('Error sending WhatsApp message');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
