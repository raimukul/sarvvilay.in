import { MDBBox, MDBContainer, MDBIframe, MDBTypography } from "mdbreact";
import React from "react";

export default function WorkWithUs() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center text-white py-5">Work With Us</p>
      </div>
      <MDBContainer className="pt-2">
        <MDBTypography blockquote bqColor="primary">
          <MDBBox tag="p" mb={0} className="bq-title">
            Be A Volunteer
          </MDBBox>
          <p>
            Sustainable change won't occur, according to SARVVILAY FOUNDATION,
            unless members of the civil society participate actively in the
            development process. We welcome and ask individuals to apply for
            volunteer opportunities, be an active member of our community, and
            share our mission of promoting the welfare of children and their
            families. Every organisations rely on its volunteers since they not
            only hold the organization's beliefs inside them but also spread the
            word widely, bringing attention to the cause. Spread some happiness
            by volunteering for an NGO or other service.<br></br>
            **Fill the below form , we will contact you regarding membership.
          </p>
        </MDBTypography>
      </MDBContainer>

      <MDBContainer>
        <MDBIframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2Zh1uz6qn_qc2ik8fp5rfd5A2pruAuN2BZg5cvMavIHFsAw/viewform?usp=sf_link"></MDBIframe>
      </MDBContainer>
    </div>
  );
}
