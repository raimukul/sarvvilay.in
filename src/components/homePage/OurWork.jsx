import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Homepage.css";
import Card from "react-bootstrap/Card";
import Slide1 from "../images/sarvvilay Foundation (21).jpg";
import Slide2 from "../images/sarvvilay Foundation (11).jpg";
import Slide3 from "../images/sarvvilay Foundation (9).jpg";


export default function OurWork() {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Our Work</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text className="pb-3">
              Following a lifecycle approach, Our Foundation, among the top NGO
              in India, works intensively through focused welfare projects in
              four major areas – child education for poor children, healthcare
              for families, skills training and livelihood for youth, and
              community engagement through women empowerment. So far, we have
              been able to directly impact the lives of over 1 million children
              and families.
            </Card.Text>

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
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="Second slide"
                />

                <Carousel.Caption className="crousel-service">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Slide3} alt="Third slide" />

                <Carousel.Caption className="crousel-service">
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </Container>
     
    </div>
  );
}
