import React from "react";
import "./Donation.css";
import { Card, Container } from "react-bootstrap";

export default function Donation() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center text-white py-5">Donate Now</p>
      </div>
      <Container className="pb-5 pt-3">
        <p className="h5 text-center pb-3">Why Donate?</p>
        <p>
          Your contributions help us serve India’s most marginalized children
          and ensure that they are able to go to school, get proper nutrition
          and healthcare and stay protected from abuse and exploitation.
        </p>
        <p>
          We cannot do the work that we do without your support and it’ll need
          each and every one of us to come together to ensure happier childhoods
          for children everywhere!
        </p>
        <Card className="p-3">
          <p className="h5">Bank Account Details For Donation</p>
          <hr color="red"/>
          <p>Account Number : <i>1234567890</i><br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; IFSC : <i>PUNB0474500</i><br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Name : <i>SARVVILAY FOUNDATION</i>
          
          </p>
        </Card>
      </Container>
    </div>
  );
}
