import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // セント換算
  const priceForStripe = price * 100;
  // サイトからコピペ
  const publishbleKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  // 本来ここでサーバ側へトークンを送るなどする
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay NOW'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://firebasestorage.googleapis.com/v0/b/crwn-db-da161.appspot.com/o/crown.svg?alt=media&token=a0097cd3-0ce1-4721-9efc-79f278d07fe5'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay NOW'
      token={onToken}
      stripeKey={publishbleKey}
    />
  );
};

export default StripeCheckoutButton;
