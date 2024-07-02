import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//images
import img1 from "../assets/line.svg";
import img2 from "../assets/arrow-button.svg";
import img3 from "../assets/arrow-button-1.svg";

const FrameComponent5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEventContainerClick = useCallback(() => {
    navigate("/event-read-more");
  }, [navigate]);

  return (
    <section
      className={`w-[1476px] flex flex-row items-start justify-center pt-0 px-5 pb-[135px] box-border max-w-full text-left text-21xl text-primary-text font-h2 mq750:pb-[88px] mq750:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full mq450:gap-[12px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-0 relative text-4xl leading-[150%] font-bold font-inherit mq1050:text-13xl mq1050:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            Other events
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-[24px] px-0 pb-0 box-border min-w-[334px] max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain"
              loading="lazy"
              alt=""
              src={img1}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-2xl" >
          <div className="self-stretch bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-ghostwhite flex flex-row flex-wrap items-end justify-start pt-[25px] pb-[31.5px] pr-6 pl-[34px] box-border gap-[10px] max-w-full mq1050:pl-[17px] mq1050:pr-3 mq1050:box-border">
            <div className="w-[768px] relative rounded bg-ghostwhite hidden max-w-full" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative text-4xl leading-[29px] font-medium inline-block min-w-[55px] z-[1] mq1050:text-10xl mq1050:leading-[23px] mq450:text-2xl mq450:leading-[17.5px]">
                23
              </div>
              <div className="relative text-sm tracking-[2px] uppercase font-medium inline-block min-w-[41px] z-[1]">
                MAR
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[339px] max-w-full text-sm mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="h-[95px] flex flex-row items-start justify-start  box-border  z-[1]">
                  <div className="relative tracking-[2px] uppercase font-medium inline-block min-w-[125px]">
                    Next Events
                  </div>
                  <div className="self-stretch h-[3px] p-4 m-2 relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[4px] border-solid border-border border-gray-500" />
                  
                </div>
                <h2 className="m-0 self-stretch relative text-2xl leading-[30px] font-medium font-inherit z-[1] mq450:text-xl mq450:leading-[17px]">
                  Vikas Ki Raah
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <img
                className="w-14 h-14relative z-[1]"
                onClick={onEventContainerClick}
                loading="lazy"
                alt=""
                src={img2}
              />
            </div>
          </div>
          <div className="self-stretch bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-ghostwhite flex flex-row flex-wrap items-end justify-start pt-[27px] pb-[28.5px] pr-6 pl-[34px] box-border gap-[5px] max-w-full mq1050:pl-[17px] mq1050:pr-3 mq1050:box-border">
            <div className="h-[95.5px] w-[768px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-ghostwhite hidden max-w-full" />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.25">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[29px] text-4xl font-medium inline-block min-w-[55px] z-[1] mq1050:text-10xl mq1050:leading-[23px] mq450:text-2xl mq450:leading-[17.5px]">
                  25
                </div>
                <div className="relative text-sm tracking-[2px] uppercase font-medium inline-block min-w-[41px] z-[1]">
                  MAR
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[339px] max-w-full text-sm mq750:min-w-full">
              <div className="h-[95px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border gap-[10.5px] z-[1]">
                <div className="relative tracking-[2px] uppercase font-medium inline-block min-w-[125px]">
                  Next Events
                </div>
                <div className="self-stretch h-[3px] p-4 m-2 relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[4px] border-solid border-border border-gray-500" />
                
              </div>
              <h2 className="m-0 self-stretch relative text-2xl leading-[30px] font-medium font-inherit z-[1] mq450:text-xl mq450:leading-[17px]">
                Setu Sangham
              </h2>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3.25">
              <img
                className="w-14 h-14 relative z-[1]"
                onClick={onEventContainerClick}
                alt=""
                src={img3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
