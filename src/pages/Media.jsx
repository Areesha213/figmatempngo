import React from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import News from "../components/News";
import Events from "../components/Events";
//images
import img1 from "../assets/section-title4@2x.png"
import img2 from "../assets/image3@2x.png"
import img3 from "../assets/image-11@2x.png"
import img4 from "../assets/image-21@2x.png"
import img5 from "../assets/frame-2-1@2x.png"


function Media() {
  return (
    <div>
      <Navbar1 />
      <section className="self-stretch bg-gray-200 flex flex-row items-start justify-start pt-0 px-0 pb-[131px] box-border max-w-full text-left  text-black font-h2  mq750:box-border mq1050:pb-[85px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full mq450:pt-5 mq450:box-border mq1050:pt-[29px] mq1050:box-border">
          <div className="self-stretch bg-ghostwhite flex flex-row items-start justify-start  px-[110px] box-border relative gap-[96px] max-w-full lg:flex-wrap   lg:pl-[16px] lg:pr-[20px] lg:box-border mq450:pt-10 mq450:pb-10 mq450:box-border  mq750:box-border mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border">
            <div className="h-[768px] w-[1500px] relative bg-ghostwhite hidden max-w-full z-[0]" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[385px] max-w-full lg:flex-1 mq750:min-w-full">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4">
                <img
                  className="h-[19px] w-[190px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src={img1}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full ">
                <h1 className="m-0 h-[201px] w-[496px] relative text-5xl leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-4xl mq450:leading-[40px] mq1050:text-26xl mq1050:leading-[54px]">
                  Our goal is to make education available for everyone
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[42px] box-border max-w-full text-base text-secondary-text mq450:pb-6">
                <div className="  relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
                  We want our youth to be fully educated and achieve the success
                </div>
              </div>
              <div className=" flex flex-row items-start justify-start  box-border max-w-full mq450:ml-0">
                <button className="cursor-pointer [border:none] [backdrop-filter:blur(80px)] rounded flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] ">
                  <div className="self-stretch flex-1 relative text-lg  font-normal font-h2 text-white text-right rounded bg-purple-600 p-3">
                    Read more
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-[0.9189]  min-h-full rounded-xl bg-white flex flex-row items-start justify-start p-9  box-border min-w-[420px] max-w-full z-[1] text-xl   mq750:box-border mq750:min-w-full">
              <div className="h-[576px] w-[612px] relative rounded-xl bg-white hidden max-w-full" />
              <div className="w-[512px] flex flex-col items-start justify-start gap-[30px] max-w-full z-[1]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
                  <img
                    className="h-40 w-48 relative rounded-lg object-cover mq750:flex-1"
                    loading="lazy"
                    alt=""
                    src={img2}
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[192px]">
                    <div className="self-stretch h-[120px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex-1 relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                        Our goal is to make education available for everyone
                      </div>
                      <div className="self-stretch flex-1 relative text-base leading-[160%] text-secondary-text">
                        We want our youth to be fully educated and achieve the
                        success
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
                  <img
                    className="h-40 w-48 relative rounded-lg object-cover mq750:flex-1"
                    loading="lazy"
                    alt=""
                    src={img3}
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[192px]">
                    <div className="self-stretch h-[120px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex-1 relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                        Our goal is to make education available for everyone
                      </div>
                      <div className="self-stretch flex-1 relative text-base leading-[160%] text-secondary-text">
                        We want our youth to be fully educated and achieve the
                        success
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
                  <img
                    className="h-40 w-48 relative rounded-lg object-cover mq750:flex-1"
                    loading="lazy"
                    alt=""
                    src={img4}
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[192px]">
                    <div className="self-stretch h-[120px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex-1 relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                        Our goal is to make education available for everyone
                      </div>
                      <div className="self-stretch flex-1 relative text-base leading-[160%] text-secondary-text">
                        We want our youth to be fully educated and achieve the
                        success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>
      <News />
      <Events />
      <Footer className="bg-gray-200 mt-6" />
    </div>
  );
}

export default Media;
