import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'
import Events from '../components/Events'
import News from '../components/News'
import Contribution from '../components/Contribution';
import Projects from '../components/Projects';

import img3 from "../assets/5.png"
import Content1 from '../components/Content1';
import FrameComponent6 from '../components/FrameComponent6';

export default function WhatWeDo() {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
   <>
   <div>
    <Navbar1 />
    <Content1 className='m-6' />
    <FrameComponent6 className='bg-gray-200' />
    <div>
    <Projects />
    </div>
   
    <Contribution image={img3} 
        onNavButtonClick={onSecondaryButtonClick} />
    <News className="m-3"/>
    <Events className='m-4' />
    <Footer className='bg-gray-200 mt-6' />
   </div>
   </>
  )
}
