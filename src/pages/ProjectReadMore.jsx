import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//components
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Contribution from "../components/Contribution";
import Projects from "../components/Projects";
import FrameComponent41 from "../components/FrameComponent41";
import FrameComponent31 from "../components/FrameComponent31";



//images
import img3 from "../assets/5.png";

export default function ProjectReadMore() {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
    <div>
      <Navbar1 />
      <FrameComponent41 />
      <FrameComponent31 />

      <Projects />

      <Contribution
        image={img3}
        className="m-5"
        onNavButtonClick={onSecondaryButtonClick}
      />
      <Footer className="bg-gray-200 mt-6" />
    </div>
  );
}
