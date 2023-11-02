import React, { useState } from 'react';
import axios from 'axios';

export default function WhatsAppSender() {
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




export function CheckoutButton(){
  const [products, setProducts] = useState([]);  // Assuming products is an array of selected products

  const generateWhatsAppLink = () => {
    const baseWhatsAppURL = "https://wa.me/";
    const phoneNumber = "+249919913063";  // Replace with your number

    let message = "أود طلب:\n";
    products.forEach(product => {
      message += "- " + product.name + "\n";  // Assuming product has a 'name' property
    });

    const encodedMessage = encodeURIComponent(message);
    return baseWhatsAppURL + phoneNumber + "?text=" + encodedMessage;
  }
  setProducts([])

  const handleCheckoutClick = () => {
    const confirmationMessage = "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href = generateWhatsAppLink();
    }
  }

  return (
    <button onClick={handleCheckoutClick}>الدفع</button>
  );
}

