import React from "react";
import Carousel from "./Carousel";
import HomeAbout from "./HomeAbout";
import OurWork from "./OurWork";

export default function Index() {
  return (
    <div>
      <Carousel />
      <HomeAbout/>
      <OurWork/>
    </div>
  );
}
