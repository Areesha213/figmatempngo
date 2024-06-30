import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import img1 from "../assets/about.png"
import img2 from "../assets/video.svg"

const About = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full shrink-0 text-left text-29xl text-primary-text font-h2 ${className}`}
    >
      <div className="w-[1283px] flex flex-col items-end justify-start gap-[64px] max-w-full mq450:gap-[16px] mq750:gap-[32px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[96px] max-w-full mq450:gap-[24px] mq750:gap-[48px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[74px] min-w-[460px] max-w-full mq450:gap-[18px] mq750:gap-[37px] mq750:min-w-full">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[30px]">
              <img
                className="h-[19px] w-[246px] relative object-contain"
                loading="lazy"
                alt=""
                src={img1}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[608px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                  <h1 className="m-0 h-[116px] flex-1 relative text-inherit leading-[120%] font-normal font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[35px] mq750:text-19xl mq750:leading-[46px]">
                    We help underprivileged sections of society to uplift
                  </h1>
                </div>
                <div className="self-stretch h-[130px] relative text-base leading-[160%] text-secondary-text inline-block">
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
            <div className="w-[346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button
                className="cursor-pointer [border:none] py-4 px-8 bg-ghostwhite [backdrop-filter:blur(80px)] rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray"
                onClick={onPrimaryButtonClick}
              >
                <a className="[text-decoration:none] relative text-base font-medium font-h2 text-black1 text-right">
                  Learn more
                </a>
              </button>
            </div>
          </div>
          <div className="h-[588.3px] w-[480px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[480px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1050:self-stretch mq1050:w-auto"
              loading="lazy"
              alt=""
              src={img2}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
