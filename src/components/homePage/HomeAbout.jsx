import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIframe } from "mdbreact";
import Card from "react-bootstrap/Card";

export default function HomeAbout() {
  return (
    <div>
      <MDBContainer className="pt-5 mb-3">
        <MDBRow>
          <MDBCol md="8">
            <Card>
              <Card.Header className="card-hbghg">
                <Card.Title>About SARVVILAY FOUNDATION</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Sarvvilay Foundation help individuals to serve their right, as
                  education is our right. Only education can empowers an
                  individual to take aware, and make aware others from health
                  and different kinds of social behaviours and social
                  responsibilities. Currently Sarvvilay Foundation serve
                  education and health facilities for many children in their
                  education system, by distributing free school uniform and
                  study materials for children. We take care of all children in
                  a very well manner, so that we can empowers and cultivate
                  better citizens in our nation.
                </Card.Text>
                <MDBBtn color="orange">Know More</MDBBtn>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol md="4">
            <Card>
              <Card.Header className="card-hbghg">
                <Card.Title>Story of the day</Card.Title>
              </Card.Header>
              <Card.Body className="pt-5">
                <MDBIframe
                  className="w-100"
                  src="https://www.youtube.com/embed/omQbqjmWHpIc"
                />
              </Card.Body>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
