import React, { useState } from 'react';
import axios from 'axios';

const PayButton = () => {
  const [orderID, setOrderID] = useState(null);

  const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/payment/create-order', null, {
        params: { amount: 500 }
      });
      setOrderID(response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    await createOrder();

    const options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount in paise (50000 = 500 INR)
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      order_id: orderID, // Pass the order ID generated from backend
      handler: function (response){
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <button onClick={handlePayment}>
      Pay with Razorpay
    </button>
  );
};

export default PayButton;
