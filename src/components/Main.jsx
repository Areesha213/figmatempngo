
import PropTypes from "prop-types";

import img1 from "../assets/section-title1@2x.png"
import img2 from "../assets/image1@2x.png"



const Main = ({ className = "" }) => {
  

  return (
    <section
      className={`self-stretch bg-gray-200 flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-left text-primary-text font-h2 mq750:pb-[62px] mq750:box-border ${className}`}
    >
      
      <div className="self-stretch bg-ghostwhite flex flex-row items-start justify-start py-24 px-[110px] box-border relative gap-[76px] max-w-full mt-[-23px] mq750:gap-[38px] mq750:pl-[55px] mq750:pr-[55px] mq750:pb-[62px] mq750:box-border mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:flex-wrap">
        <div className="h-[576px] w-[1500px] relative bg-ghostwhite hidden max-w-full z-[0]" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px] mq750:min-w-full">
          <img
            className="w-[168px] h-[19px] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src={img1}
          />
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[628px] flex flex-col items-start justify-start gap-[14px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-5xl leading-[120%] font-normal font-inherit inline-block max-w-full z-[1] mq750:text-3xl mq750:leading-[54px] mq450:text-2xl mq450:leading-[40px]">
                  Making a donation for Development.
                </h1>
              </div>
              <div className="w-[517px] relative text-base leading-[160%] text-secondary-text inline-block max-w-full z-[1]">
                When you donate, you’re supporting effective solutions to the
                development challenges—an investment in the future of our
                nation.
              </div>
            </div>
          </div>
          <div className="  flex flex-row items-center justify-center  box-border max-w-full">
            <button className="cursor-pointer [border:none] py-4 p bg-blueviolet [backdrop-filter:blur(80px)] rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkorchid">
              <div className="text-white px-5 py-4 rounded hover:bg-blue-600 no-underline bg-purple-600">
                Donate now
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[480px] relative rounded-xl max-h-full object-cover max-w-full z-[1] mq1250:flex-1"
          loading="lazy"
          alt=""
          src={img2}
        />
        
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
