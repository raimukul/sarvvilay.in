import { MDBContainer, MDBIframe } from "mdbreact";
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center text-white py-5">Contact Us</p>
      </div>
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p>
                <i className="fab fa-address" /> <span>Address:</span> 124,
                Nautan Road Marachhi, Siwan ( Bihar) India 841243
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <i className="fab fa-instagram" /> <span>Phone:</span>
                <a href="tel://+917320857665">+ 91 7320857665</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <i className="fab fa-google-plus" /> <span>Email:</span>
                <a href="mailto: srvillay01@gmail.com"> srvillay01@gmail.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <i className="fab fa-whatsapp" /> <span>Whatsapp</span>
                <a href="https://wa.me/917320857665">+ 91 7320857665</a>
              </p>
            </div>
          </div>
          {/* <div className="row block-9">
            <div className="col-md-10 pr-md-5">
              <div id="map">
                <MDBIframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.473339706292!2d85.23841491494048!3d25.52260538374574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a1a4cf43dbdf%3A0x21fad622b616668c!2sMirjapur%20Village%2C%20Mirzapur%2C%20Bihar%20803201!5e0!3m2!1sen!2sin!4v1659733738662!5m2!1sen!2sin"
                />
              </div>
            </div>
          </div> */}
          <MDBContainer>
            <MDBIframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.473339706292!2d85.23841491494048!3d25.52260538374574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a1a4cf43dbdf%3A0x21fad622b616668c!2sMirjapur%20Village%2C%20Mirzapur%2C%20Bihar%20803201!5e0!3m2!1sen!2sin!4v1659733738662!5m2!1sen!2sin"
            />
          </MDBContainer>
        </div>
      </section>
    </div>
  );
}
