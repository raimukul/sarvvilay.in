import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-0">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">SARVVILAY FOUNDATION</h6>
            <p className='font-weight-bolder'>
            DEDICATED TO DO SOCIAL DEVELOPMENTS
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful Links
            </h6>
            <p>
              <a
              className="ext2 h6"
                rel="noopener noreferrer"
                href="/"
                target="_blank"
              >
                Link 1
              </a>
            </p>
            <p>
              <a
              className="ext2 h6"
                rel="noopener noreferrer"
                href="/"
                target="_blank"
              >
                  Link 2
              </a>
            </p>
            <p>
              <a
              className="ext2 h6"
                rel="noopener noreferrer"
                href="/"
                target="_blank"
              >
                  Link 3
              </a>
            </p>
           
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">More</h6>
            <p>
              <a
              className="ext2 h6" rel="noopener noreferrer" href="/career">
                Career
              </a>
            </p>
            <p>
              <a
              className="ext2 h6" rel="noopener noreferrer" href="/policy">
                Website Policy
              </a>
            </p>
            <p>
              <a
              className="ext2 h6"
                rel="noopener noreferrer"
                href="/"
                target="_blank"
              >
                Webmail
              </a>
            </p>
          
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" />
              124, Nautan Road Marachhi, Siwan ( Bihar) India 841243
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> srvillay01@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" />+ 91 7320857665
            </p>
          
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a
              className="ext2 h6" rel="noopener noreferrer" href="https://www.sarvvilay.in">
                sarvvilay.in
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                  rel="noopener noreferrer"
                    className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                    href="/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                  rel="noopener noreferrer"
                    className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                    href="/"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                    href="/"
                  >
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                    href="/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
  )
}
