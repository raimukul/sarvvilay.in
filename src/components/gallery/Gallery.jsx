import React from "react";
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
import Book1 from "../images/book/book (4).jpg";
import Book2 from "../images/book/book (3).jpg";
import Book3 from "../images/book/book (1).jpg";
import Education1 from "../images/education/education (1).jpg";
import Education2 from "../images/education/education (2).jpg";
import Education3 from "../images/education/education (3).jpg";

export default function Gallery() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center text-white py-5">Gallery</p>
      </div>
      <MDBContainer>
        <MDBTypography blockquote bqColor="success">
          <MDBBox tag="p" mb={0} className="bq-title">
            Help a poor child with books and supplies
          </MDBBox>
          <p>
            The SARVVILAY FOUNDATION works to provide education and literacy to
            underprivileged rural households. A youngster will be able to
            acquire books and resources to supplement his education thanks to
            your donation to this initiative.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
              <img src={Book1} className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
              <img src={Book3} className="img-fluid z-depth-1-half" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
              <img src={Book2} className="img-fluid z-depth-2" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBTypography>
        <MDBTypography blockquote bqColor="primary">
          <MDBBox tag="p" mb={0} className="bq-title">
          Free Education Material for Poor Children
          </MDBBox>
          <p>
            The main factor in ensuring that children live safe lives is
            education. This project offers low-income kids up to elementary
            school level educational materials. SARVVILAY FOUNDATION's aim is to
            provide them with the fundamental education materials they need to
            continue their studies uninterrupted.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
              <img src={Education1} className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
              <img
                src={Education3}
                className="img-fluid z-depth-1-half"
                alt=""
              />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
              <img src={Education2} className="img-fluid z-depth-2" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBTypography>
   
      </MDBContainer>
    </div>
  );
}
