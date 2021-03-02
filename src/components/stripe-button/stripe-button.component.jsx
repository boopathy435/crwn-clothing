import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IQCPhL8QMaCX1UeUQiS1Bm6ahFDHf0mTE0kh5A34GZTMd4n3Zc1s6ibUmkCjMJE2k6kkvOvN0CpleRgjfRLawPi00weQYJ6ew';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
    <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />);
}

export default StripeCheckoutButton;