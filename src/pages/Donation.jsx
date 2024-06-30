import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

//components
import Navbar1 from '../components/Navbar1'
import Footer from "../components/Footer"
import Contribution from '../components/Contribution'
import Main from '../components/Main';

//images
import img3 from "../assets/5.png"


function Donation() {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
    <div>
      <Navbar1 className="!bg-gray-200" />
      <Main />
      <section className="self-stretch m-9 flex flex-row items-start justify-center pt-0 px-5 pb-24 box-border max-w-full text-left text-29xl text-primary-text font-h2 mq750:pb-[62px] mq750:box-border">
        <div className="w-[1280px] flex flex-col items-start justify-start gap-[95.5px] max-w-full mq750:gap-[48px] mq450:gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1250:flex-wrap">
            <div className="w-[592px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h1 className="m-0 self-stretch relative text-5xl leading-[120%] font-normal font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                How you can contribute to develop villages
              </h1>
              <div className="self-stretch relative text-base leading-[160%] text-secondary-text">
                One of the key aspects of village development is fostering
                economic empowerment in rural areas. Encouraging the growth of
                rural industries and promoting entrepreneurship can create
                employment opportunities and improve the standard of living for
                villagers.
              </div>
            </div>
            <div className="w-[592px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border max-w-full text-base text-secondary-text">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="w-[356px] flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative leading-[26px] font-medium text-primary-text inline-block min-w-[66px] border-purple-500">
                        Overview
                      </div>
                      <div className="relative leading-[26px] font-medium inline-block min-w-[50px]">
                        Impact
                      </div>
                      <div className="relative leading-[26px] font-medium inline-block min-w-[96px]">
                        What You get
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-0.5 relative">
                    <div className="absolute top-[0px] left-[0px] box-border w-[357px] h-px border-t-[1px]  border-solid border-border" />
                    <div className="absolute top-[0px] left-[0px] box-border w-[116px] h-0.5 border-t-[2px] border-solid border-purple-600" />
                  </div>
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Village development plays a vital role in shaping the
                  sustainable future of India. With a significant portion of the
                  population residing in rural areas, it is essential to focus
                  on creating sustainable communities that promote economic
                  growth, environmental conservation, and social well-being.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[3px] border-solid border-primary-text" />
          <div className="self-stretch m-9 flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-secondary-text mq1250:flex-wrap">
            <h1 className="m-0 w-[374px] relative text-5xl leading-[120%] font-normal font-inherit text-primary-text inline-block shrink-0 max-w-full mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              How we use your donation
            </h1>
            <div className="h-[156px] w-[338px] relative leading-[160%] inline-block shrink-0 max-w-full">
              <p className="m-0">
                We spend 40% of donation on conducting workshops and events and
                35% on training skills to the people and rest are used for the
                human aid related activites.
              </p>
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="w-[374px] relative leading-[160%] inline-block shrink-0 max-w-full">
              We also encourage donors to give unrestricted donations, which
              means we can spend them where the need is greatest.
            </div>
          </div>
        </div>
      </section>
      <Contribution image={img3} 
        onNavButtonClick={onSecondaryButtonClick} />
      <Footer className='bg-gray-200 mt-6' />

    </div>
  )
}

export default Donation
