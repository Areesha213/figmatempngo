import PropTypes from "prop-types";
import img1 from '../assets/section-title2@2x.png';
import img2 from "../assets/frame-2-1@2x.png";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-left text-37xl text-primary-text font-h2 mq750:pb-[62px] mq750:box-border ${className}`}
    >
      
      <div className="self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-24 px-[110px] pb-40 box-border relative gap-[32px] max-w-full mt-[-23px] lg:pl-[55px] lg:pr-[55px] lg:box-border mq750:gap-[16px] mq750:pl-[27px] mq750:pr-[27px] mq750:pb-[104px] mq750:box-border">
        <div className="w-[1500px] h-[584px] relative bg-ghostwhite hidden max-w-full z-[0]" />
        <img
          className="w-[210px] h-[19px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={img1}
        />
        <div className="w-[1065px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[873px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[480.5px] flex flex-col items-start justify-start gap-[16px] min-w-[480.5px] max-w-full mq1050:flex-1 mq750:min-w-full">
              <h1 className="m-0 self-stretch relative text-5xl leading-[120%] font-normal font-inherit z-[1] mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
                We'd love to hear from you
              </h1>
              <div className="self-stretch relative text-base leading-[160%] text-gray-800 z-[1]">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </div>
            </div>
            <div className="w-[302px] flex flex-col items-start justify-start gap-[41px] min-w-[302px] text-5xl mq1050:flex-1 mq450:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <h3 className="m-0 relative text-inherit leading-[160%] font-normal font-inherit inline-block min-w-[101px] z-[1] mq450:text-lgi mq450:leading-[31px]">{`Let's talk! `}</h3>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="relative leading-[28px] inline-block min-w-[122px] whitespace-nowrap z-[1]">
                        +91 9430849382
                      </div>
                      <div className="relative leading-[28px] whitespace-nowrap z-[1]">
                        hello@kashiutthan.com
                      </div>
                    </div>
                    <div className="w-[280px] h-px relative box-border z-[1] border-t-[1px] border-solid border-border" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
                  <div className="relative text-4xl leading-[160%] inline-block min-w-[97px] z-[1] mq450:text-base mq450:leading-[26px]">
                    Headoffice
                  </div>
                  <div className="self-stretch relative text-base leading-[160%] z-[1]">
                    114 Krishna lane, Arya Nagar, Varanasi-231133
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <div className="flex flex-row items-start justify-start gap-[20px] opacity-[0.8] z-[1]">
                  <FaFacebook className="h-5 w-5" />
                  <FaTwitter className="h-5 w-5" />
                  <FaLinkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
