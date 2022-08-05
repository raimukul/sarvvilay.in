import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Homepage.css";
import Slide1 from "../images/sarvvilay Foundation (21).jpg";
import Slide2 from "../images/sarvvilay Foundation (11).jpg";
import Slide3 from "../images/sarvvilay Foundation (9).jpg";
import { FcReadingEbook } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

export default function OurWork() {
  return (
    <div>
      <Container>
        <p>
          Following a lifecycle approach, Our Foundation, among the top NGO in
          India, works intensively through focused welfare projects in four
          major areas – child education for poor children, healthcare for
          families, skills training and livelihood for youth, and community
          engagement through women empowerment. So far, we have been able to
          directly impact the lives of over 1 million children and families.
        </p>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="First slide" />
            <Carousel.Caption className="crousel-service">
              <p>
                Organises various book distribution campaigns throughout the
                year to provide free books and stationery to children.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide2} alt="Second slide" />

            <Carousel.Caption className="crousel-service">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide3} alt="Third slide" />

            <Carousel.Caption className="crousel-service">
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="service-area section-padding30">
        <Container>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle text-center mb-5">
                <span>What we are doing</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-null-1">
                    <FcReadingEbook />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Free Education</a>
                  </h5>
                  <p>
                    The sea freight service has grown conside rably in recent
                    years. We spend timetting to know your processes to.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat active text-center mb-50">
                <div className="cat-icon">
                  <span>
                    <GiMedicines />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Free Medication</a>
                  </h5>
                  <p>
                    The sea freight service has grown conside rably in recent
                    years. We spend timetting to know your processes to.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span>
                    <FaHandHoldingWater />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Clean Water</a>
                  </h5>
                  <p>
                    The sea freight service has grown conside rably in recent
                    years. We spend timetting to know your processes to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
