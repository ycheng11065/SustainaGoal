import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { connect } from 'react-redux';
// import * as actions from '../actions';

const key = "pk_test_51M6B0bGEB24q42CAGBnkIEv9kdWmCCKuy7tCVuiHWUgRDNm8eHf1puytAK6Ero9ioUOQLn965ySQzNKliX8tAc9M00Fk1Sb1KC";

const Payment = () => {
  return (
    <StripeCheckout
      name="Emailify"
      description="$5 for 5 credits"
      amount={500}
      token={(token) => this.props.handleToken(token)}
      stripeKey={key}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payment;