import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Index from "./components/homePage/Index";
import About from "./components/about/About";
import Donation from "./components/donation/Donation";
import Policy from "./components/policy/Policy";
import Contact from "./components/contact/Contact";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import DonationButton from "./components/donation/DonationButton";
import Gallery from "./components/gallery/Gallery";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <DonationButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
