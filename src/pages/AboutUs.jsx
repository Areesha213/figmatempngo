import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//components
import News from '../components/News'
import Events from '../components/Events'
import Supporters from '../components/Supporters'
import Navbar1 from '../components/Navbar1'
import Footer from "../components/Footer"
import Contribution from '../components/Contribution'
import AwardsWrapper from '../components/AwardsWrapper';
import FrameComponent3 from '../components/FrameComponent3';
import FrameComponent4 from '../components/FrameComponent4';
import OurJourneySection from '../components/OurJourneySection';
import FrameComponent2 from '../components/FrameComponent2';

//images
import img3 from "../assets/5.png"





export default function AboutUs() {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
    <div>
      
      <Navbar1 />
      <FrameComponent4 className='m-5'/>
      <FrameComponent3 className='m-5'/>
      <Supporters className='m-5'/>
      <AwardsWrapper className='m-8' />
      <OurJourneySection className='m-8' />
      <FrameComponent2 />
      <Contribution image={img3} className=''
        onNavButtonClick={onSecondaryButtonClick} />
      <News />
    <Events />
      <Footer className='bg-gray-200 mt-6' />
    </div>
  )
}
