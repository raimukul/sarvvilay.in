import { MDBBtn } from "mdbreact";
import React from "react";
import "./Donation.css";

export default function DonationButton() {
  return (
    <div className="container">
      <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_K2Nz3WfWBFAV9b"
          async=""
        ></script>
        <MDBBtn
          className="donation-btnA "
          target="_blank"
          rel="noopener noreferrer"
          href="https://razorpay.com/payment-button/pl_K2le2xi0zb4kjN/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
        >
          Donate Now
        </MDBBtn>
      </form>
    </div>
  );
}
