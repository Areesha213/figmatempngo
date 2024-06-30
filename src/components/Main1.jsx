import PropTypes from "prop-types";

//images
import img1 from "../assets/icon.svg"
import img2 from "../assets/icon-1.svg"


const Main1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-200 flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-left text-37xl text-primary-text font-h2 mq750:pb-[62px] mq750:box-border ${className}`}
    >
      
      <div className="self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[147px] pb-24 pr-5 pl-[354px] box-border relative gap-[64px] max-w-full mt-[-23px] mq750:gap-[16px] mq750:pl-[88px] mq750:box-border mq450:pl-5 mq450:pb-[62px] mq450:box-border mq1150:gap-[32px] mq1150:pl-[177px] mq1150:box-border">
        <div className="w-[1500px] h-[400px] relative bg-ghostwhite hidden max-w-full z-[0]" />
        <h1 className="m-0 w-[768px] relative text-5xl text-gray-900 leading-[120%] font-bold font-inherit inline-block max-w-full z-[1] mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
          Weekly Education Program
        </h1>
        <div className="flex flex-row items-start justify-start gap-[47px] max-w-full text-base mq750:flex-wrap mq750:gap-[23px]">
          <div className="flex flex-row items-start justify-start gap-[8px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[19.6px] h-6 relative z-[1]"
                loading="lazy"
                alt=""
                src={img1}
              />
            </div>
            <div className="relative leading-[26px] font-medium z-[1]">
              Jigani Khas, Ramnagar, Varanasi-123121
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[21.6px] h-6 relative z-[1]"
                alt=""
                src={img2}
              />
            </div>
            <div className="relative leading-[26px] font-medium whitespace-nowrap z-[1]">
              March 02, 2024 8:30 AM
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

Main1.propTypes = {
  className: PropTypes.string,
};

export default Main1;
