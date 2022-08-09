import React from "react";
import "./Donation.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MDBBox, MDBBtn, MDBTypography } from "mdbreact";

export default function Donation() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center text-white py-5">Donate Now</p>
      </div>
      <Container className="pb-5 pt-3">
        <MDBTypography blockquote bqColor="warning">
          <MDBBox tag="p" mb={0} className="bq-title">
            Why Donate?
          </MDBBox>
        </MDBTypography>
        <MDBTypography blockquote bqColor="primary">
          <MDBBox tag="p" mb={0} className="bq-title">
            Your contributions help us serve India’s most marginalized children
            and ensure that they are able to go to school, get proper nutrition
            and healthcare and stay protected from abuse and exploitation.
          </MDBBox>
        </MDBTypography>
        <MDBTypography blockquote bqColor="success">
          <MDBBox tag="p" mb={0} className="bq-title">
            We cannot do the work that we do without your support and it’ll need
            each and every one of us to come together to ensure happier
            childhoods for children everywhere!
          </MDBBox>
        </MDBTypography>

        <Card className="p-3 ">
          <Row>
            <Col md="7">
              <Card.Header className="supportOurCause">
                Support Our Cause
              </Card.Header>
              <Card.Body className="border border-info">
                <MDBTypography note noteColor="primary">
                  Bringing back dropout kids to school.
                </MDBTypography>
                <MDBTypography note noteColor="secondary">
                  Giving underprivileged kids tablets and smartphones so they
                  may continue to learn.
                </MDBTypography>
                <MDBTypography note noteColor="success">
                  Giving underprivileged kids the essential supplies,
                  stationery, and assistance.
                </MDBTypography>
                <MDBTypography note noteColor="danger">
                  Maintaining children's engagement with helpline services and
                  one-on-one monitoring sessions.
                </MDBTypography>
                <MDBTypography note noteColor="warning">
                  Parents are often counselled to ensure the youngster attends
                  school.
                </MDBTypography>
                <MDBTypography note noteColor="info">
                  Training for teachers is necessary to prepare them for the
                  changing digital learning environment.
                </MDBTypography>
              </Card.Body>
            </Col>
            <Col md="5">
              <Card.Header className="donateNow">Donate Now</Card.Header>
              <Card.Body className="border border-info m-auto justify-content-center">
                <MDBTypography note noteColor="info">
                  Giving to the charities that represent the causes you care
                  about benefits both the charity and you personally.
                </MDBTypography>
                <MDBTypography note noteColor="success">
                  Millions of individuals regularly donate to charities to
                  support issues they care about and for the benefits it brings
                  to their own lives.
                </MDBTypography>
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
            "Your contributions are eligible for upto 50% tax benefit under
            section 80g as Sarvvilay foundation is registered as non profit
            organization"<br/> PAN: ABDCS7556C | 80G NUMBER: ABDCS7556CF20221.
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
