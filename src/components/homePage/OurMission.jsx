import React from 'react'
import { FcReadingEbook } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import "./Homepage.css";
import { Container } from "react-bootstrap";

export default function OurMission() {
  return (
    <div>
        <div className="service-area pt-5 pb-5">
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
  )
}
