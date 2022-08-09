import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import SLide1 from "../images/banner/banner4.jpg";
import SLide2 from "../images/banner/banner2.jpg";
import SLide3 from "../images/banner/banner3.png";
import SLide4 from "../images/banner/banner1.jpg";
// import DonationButton from "../donation/DonationButton";

export default function Carousel() {
  return (
    <div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={false}
          showIndicators={false}
          className="z-depth-1 max-vh-80"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img className="d-block w-100" src={SLide1} alt="First slide" />
                <MDBMask />
                {/* <DonationButton/> */}
              </MDBView>
              {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption> */}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={SLide2}
                  alt="Second slide"
                />
                <MDBMask />
                {/* <DonationButton/> */}
              </MDBView>
              {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption> */}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img className="d-block w-100" src={SLide3} alt="Third slide" />
                <MDBMask />
                {/* <DonationButton/> */}
              </MDBView>
              {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption> */}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img className="d-block w-100" src={SLide4} alt="Third slide" />
                <MDBMask />
                {/* <DonationButton/> */}
              </MDBView>
              {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption> */}
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
}
