import React from "react";
//components
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import FrameComponent1 from "../components/FrameComponent11";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import Main1 from "../components/Main1"


function EventReadMore() {
  return (
    <div>
      <Navbar1 />
      <Main1 />
      <FrameComponent1 />
      <FrameComponent />
      <FrameComponent5 />
      <Footer className="bg-gray-200 mt-6" />
    </div>
  );
}

export default EventReadMore;
