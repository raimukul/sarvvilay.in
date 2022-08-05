import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";
import {
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBBtn,
} from "mdbreact";

export default function About() {
  return (
    <div>
      <div>
        <Helmet>
          <title>About|SARVVILAY FOUNDATION</title>
          <meta
            name="description"
            content="Global online/offline educational institute."
          />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>
        <MDBView className="mb-0 view1">
          <MDBMask className="white-text gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <div className="text-center text-md-left mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5 font1">
                    About SARVVILAY FOUNDATION
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-2 font1">
                    Dedicated to do social development specialy in the field of
                    education and health care as well as livelihood and women’s
                    empowerment .
                  </h6>
                  <h6 className="font1">
                    We are national organization dedicated to serve our whole
                    nation from any corner of India. Either it’s remote villages
                    or it’s a urban slum. Sarvvilay Foundation help individuals
                    to serve their right, as education is our right. Only
                    education can empowers an individual to take aware, and make
                    aware others from health and different kinds of social
                    behaviours and social responsibilities. Currently Sarvvilay
                    Foundation serve education and health facilities for many
                    children in their education system, by distributing free
                    school uniform and study materials for children. We take
                    care of all children in a very well manner, so that we can
                    empowers and cultivate better citizens in our nation.
                  </h6>
                  <MDBBtn color="white">Donate Now</MDBBtn>
                  <MDBBtn outline color="white">
                    Know More
                  </MDBBtn>
                </MDBAnimation>
              </div>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <div className="mission gradient2">
          <MDBContainer className="d-flex justify-content-left white-text align-items-center">
            <div className="pt-5 ">
              <h2 className="h2-responsive font-weight-bold mt-sm-5 font1 pb-2">
                MISSION AND VISION
              </h2>
              <hr className="hr-light" />
              <li className="list-style h5">
                Make aware of rights and cultivate better citizens of our
                nation.
              </li>
              <li className="list-style h5">
                Serving free education to every child of our country.
              </li>
              <li className="list-style h5">
                Being poor and lack of money can’t be a cause of NO education
              </li>
            </div>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
