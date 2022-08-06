import React from "react";
import Carousel from "./Carousel";
import HomeAbout from "./HomeAbout";
import OurWork from "./OurWork";
import OurMission from "./OurMission";

export default function Index() {
  return (
    <div>
      <Carousel />
      <HomeAbout/>
      <OurWork/>
      <OurMission/>
    </div>
  );
}
