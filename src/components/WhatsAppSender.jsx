import React, { useState } from 'react';
import axios from 'axios';

function WhatsAppSender() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('/send-whatsapp', {
        phoneNumber,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  };

  return (
    <div>
      <h1>Send WhatsApp Message</h1>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={sendMessage}>Send WhatsApp Message</button>
    </div>
  );
}

export default WhatsAppSender;
