import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import './Homepage.css'
import Slide1 from '../images/sarvvilay Foundation (21).jpg'

export default function OurWork() {
  return (
    <div>
        <Container>
      <p>
        Following a lifecycle approach, Smile Foundation, among the top NGO in
        India, works intensively through focused welfare projects in four major
        areas – child education for poor children, healthcare for families,
        skills training and livelihood for youth, and community engagement
        through women empowerment. So far, we have been able to directly impact
        the lives of over 1 million children and families.
      </p>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption className="crousel-service">
            <h3>Book Distribution</h3>
            <p> Organises various book distribution campaigns throughout the year to provide free books and stationery to children.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="Second slide"
          />

          <Carousel.Caption className="crousel-service">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="Third slide"
          />

          <Carousel.Caption className="crousel-service">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    </div>
  );
}
