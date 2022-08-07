import React from "react";
import "./Donation.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

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
        <Card className="p-3 ">
          <Row>
            <Col md="7">
              <Card.Header className="supportOurCause">Support Our Cause</Card.Header>
              <Card.Body className="border border-info">
                <li className="pt-2">Bringing back dropout kids to school.</li>
                <li className="pt-2">
                  Giving underprivileged kids tablets and smartphones so they
                  may continue to learn.
                </li>
                <li className="pt-2">
                  Giving underprivileged kids the essential supplies,
                  stationery, and assistance.
                </li>
                <li className="pt-2">
                  Maintaining children's engagement with helpline services and
                  one-on-one monitoring sessions.
                </li>
                <li className="pt-2">
                  Parents are often counselled to ensure the youngster attends
                  school.
                </li>
                <li className="pt-2">
                  Training for teachers is necessary to prepare them for the
                  changing digital learning environment.
                </li>
              </Card.Body>
            </Col>
            <Col md="5">
              <Card.Header className="donateNow">Donate Now</Card.Header>
              <Card.Body className="border border-info m-auto justify-content-center">
                <p>
                  YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 6
                  MONTHS
                </p>
                <Row>
                  <Col>
                    <form>
                      <script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_K2Nz3WfWBFAV9b"
                        async=""
                      ></script>
                      <MDBBtn
                        className="btn-grad-pay"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://razorpay.com/payment-button/pl_K2lFnVNeRtpSZP/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
                      >
                        ₹ 1000
                      </MDBBtn>
                    </form>
                  </Col>
                  <Col>
                    <form>
                      <script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_K2Nz3WfWBFAV9b"
                        async=""
                      ></script>
                      <MDBBtn
                        className="btn-grad-pay"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://razorpay.com/payment-button/pl_K2laRuVZ0kTPA8/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
                      >
                        ₹ 5000
                      </MDBBtn>
                    </form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <form>
                      <script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_K2Nz3WfWBFAV9b"
                        async=""
                      ></script>
                      <MDBBtn
                        className="btn-grad-pay"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://razorpay.com/payment-button/pl_K2lcHmTITkGZC9/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
                      >
                        ₹ 10000
                      </MDBBtn>
                    </form>
                  </Col>
                  <Col>
                    <form>
                      <script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_K2Nz3WfWBFAV9b"
                        async=""
                      ></script>
                      <MDBBtn
                        className="btn-grad-pay"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://razorpay.com/payment-button/pl_K2le2xi0zb4kjN/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
                      >
                        Pay Now
                      </MDBBtn>
                      *You can pay upto ₹ 1,00,000.
                    </form>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
          <Card.Footer className="text-muted">
            YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER
            SECTION 80G AS SMILE FOUNDATION IS REGISTERED AS NON PROFIT
            ORGANIZATION" PAN: ABDCS7556C | 80G NUMBER: ABDCS7556CE20215
          </Card.Footer>
        </Card>
        <Card className="p-3">
          <p className="h5">Bank Account Details For Donation</p>
          <hr color="red" />
          <p>
            Account Number : <i>39449964127</i>
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; IFSC : <i>SBIN0000133</i>
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            Name : <i>SARVVILAY FOUNDATION</i>
          </p>
        </Card>
      </Container>
    </div>
  );
}
