import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useEffect } from 'react';

const CheckoutForm = (props) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentFinished, setPaymentFinished] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if(error){
        setPaymentError(error.message);
        setPaymentFinished(null);
    }else{
        setPaymentFinished(paymentMethod);
        setPaymentError(null);
        
    }
    
  };

  useEffect(() => {
    props.markAsPaid(paymentFinished) 
},[props, paymentFinished])

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <div className="text-center">
      <button className="btn btn-danger mt-3" type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p className="text-danger">{paymentError}</p>
          
      }
      {
          paymentFinished && <p className="text-success">Payment Successful!</p>
      }
      </div>
    </form>
  );
};

export default CheckoutForm;