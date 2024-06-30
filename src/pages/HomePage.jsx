import React from 'react'
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
//components
import Navbar from '../components/Navbar'
import Supporters from '../components/Supporters';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import News from '../components/News';
import Events from '../components/Events';
//images
import bg from "../assets/bg.png"
import img2 from "../assets/about.png"
import img3 from "../assets/video.svg"




export default function HomePage() {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);
  return (
    <>
 <div className="relative w-full min-h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url(${bg})` }} >
      
      <Navbar />
     <main >
      <h1 className='text-white font-roboto font-bold text-6xl m-20 p-20'>Nurturing society <br></br>
      for a better tomorrow</h1>
      <Link to="/what-we-do" className="bg-gray-100 font-semibold text-black px-4 py-2 m-40 rounded hover:bg-blue-600 no-underline leading-loose">
          What We Do
        </Link>
        <div className='mt-80 p-7 flex justify-center align-middle '>
        <div className="w-[1381px] flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-right text-lg">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[35px] max-w-full">
            <div className="relative font-extrabold z-[1] text-white">
              1923 Workshops Conducted
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[14.1px] pb-0 pr-[9px] pl-0 box-border min-w-[567px] max-w-full mq750:min-w-full">
              <div className="self-stretch h-[3px] relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[3px] border-solid border-border" />
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
              <div className="relative font-extrabold z-[1] text-white">
                5840 donations collected
              </div>
            </div>
          </div>
        </div>
        </div>
     </main>
    </div>

    <div>
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full shrink-0 text-left text-29xl text-primary-text font-h2 `}
    >
      <div className="w-[1283px] flex flex-col items-end justify-start gap-[64px] max-w-full mq450:gap-[16px] mq750:gap-[32px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[96px] max-w-full mq450:gap-[24px] mq750:gap-[48px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[74px] min-w-[460px] max-w-full mq450:gap-[18px] mq750:gap-[37px] mq750:min-w-full">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[30px] mt-9">
              <img
                className="h-[19px] w-[246px] relative object-contain"
                loading="lazy"
                alt=""
                src={img2}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[608px]  flex flex-col items-start justify-start  max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start  pr-0 pl-px  pb-24 box-border max-w-full">
                  <h1 className="m-0 h-[116px] text-5xl md:text-10xl leading-[120%] font-normal font-inherit inline-block max-w-full md:leading-[35px] xl:text-19xl xl:leading-[46px]">
                    We help underprivileged sections of society to uplift
                  </h1>
                </div>
                <div className="self-stretch h-[130px]  relative text-base leading-[160%] text-secondary-text inline-block">
                  <p className="m-0">
                    We work for the development of the Bastis in the Varanasi
                    region of UP, helping in education, health and finance.
                  </p>
                  <p className="m-0">
                    We continuously organizes events and awareness sessions in
                    those areas, making them aware of government schemes,
                    scholarships and health. We aims to uplift those
                    underprivileged sections of society.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[346px] flex flex-row items-start justify-start px-16 box-border max-w-full">
              <button
                className="cursor-pointer [border:none]  px-8 bg-ghostwhite [backdrop-filter:blur(80px)] rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray"
                onClick={onSecondaryButtonClick}
              >
                <a className="[text-decoration:none]  text-base font-medium font-h2 text-black1 text-right bg-gray-200 p-4 rounded" >
                  Learn more
                </a>
              </button>
            </div>
          </div>
          <div className="h-[588.3px] w-[480px] flex flex-col items-start justify-start mt-32 pt-2.5 px-0 pb-0 box-border min-w-[480px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1050:self-stretch mq1050:w-auto"
              loading="lazy"
              alt=""
              src={img3}
            />
          </div>
        </div>
        <Supporters  />
        
      </div>
    </section>
    </div>
    <Work className='bg-gray-200 mt-6'/>
    <Projects />
    <Stats className='bg-gray-200 mt-6' />
    <News />
    <Events />
    <Footer className='bg-gray-200 mt-6' />
  


    </>
   
  )
}
