import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import img1 from "../assets/arrow-button.svg"

const Events = ({
  className = "",
  propLineHeight,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propHeight,
  propPadding,
  propDisplay2,
  propMinWidth2,
  propLineHeight1,
  propDisplay3,
  propMinWidth3,
  propDisplay4,
  propMinWidth4,
  propHeight1,
  propPadding1,
  propDisplay5,
  propMinWidth5,
  eventsAlignSelf,
  eventsWidth,
}) => {
  const createNewTouchpointsStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propDisplay, propMinWidth]);

  const fEBStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const eventHeaderStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const nextEventsStyle = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const optimizeCoachingStrategiesStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
      display: propDisplay3,
      minWidth: propMinWidth3,
    };
  }, [propLineHeight1, propDisplay3, propMinWidth3]);

  const mARStyle = useMemo(() => {
    return {
      display: propDisplay4,
      minWidth: propMinWidth4,
    };
  }, [propDisplay4, propMinWidth4]);

  const eventHeader1Style = useMemo(() => {
    return {
      height: propHeight1,
      padding: propPadding1,
    };
  }, [propHeight1, propPadding1]);

  const nextEvents1Style = useMemo(() => {
    return {
      display: propDisplay5,
      minWidth: propMinWidth5,
    };
  }, [propDisplay5, propMinWidth5]);

  const eventsStyle = useMemo(() => {
    return {
      alignSelf: eventsAlignSelf,
      width: eventsWidth,
    };
  }, [eventsAlignSelf, eventsWidth]);

  const navigate = useNavigate();

  const onEventContainerClick = useCallback(() => {
    navigate("/event-read-more");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[96.6px] box-border max-w-full shrink-0 text-left text-21xl text-primary-text font-h2 mq450:pb-[63px] mq450:box-border ${className}`}
      style={eventsStyle}
    >
      <div className="w-[1280px]  flex flex-col items-start justify-start gap-[48px] max-w-full shrink-0 mq750:gap-[24px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full">
          <h1 className="m-0 relative text-4xl leading-[140%] font-normal font-inherit mq450:text-5xl mq450:leading-[34px] mq750:text-13xl mq750:leading-[45px]">
            Our Events
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[690px] max-w-full mq750:min-w-full">
            <div className="self-stretch h-px relative box-border border-t-[2px] border-solid border-primary-text border-gray-700" />
          </div>
        </div>
        <div className="self-stretch  flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-29xl">
          <div className="flex-1 bg-slate-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-ghostwhite flex flex-row items-end justify-start pt-[45px] px-10 pb-[65px] box-border gap-[24px] min-w-[408px] max-w-full mq750:flex-wrap mq750:min-w-full">
            <div className="h-[191px] w-[628px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-ghostwhite hidden max-w-full" />
            
            <div className="flex flex-col items-start justify-end pt-0 px-0 " onClick={onEventContainerClick}>
              <div className="flex flex-col items-start justify-start" >
                
                <div
                  className="relative text-4xl leading-[120%] font-medium z-[1] "
                  style={createNewTouchpointsStyle}
                >
                  29
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[11px]  text-base">
                  <div
                    className="relative text-xl tracking-[2px] uppercase font-normal z-[1]"
                    style={fEBStyle}
                  >
                    FEB
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[248px] max-w-full text-base">
              <div
                className="flex flex-row items-start justify-start gap-[23px]  z-[1]"
                style={eventHeaderStyle}
              >
                
                <div
                  className="relative tracking-[2px] uppercase font-medium"
                  style={nextEventsStyle}
                >
                  Next Events
                </div>
                <div className="self-stretch h-[3px]  p-4 m-2 relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[4px] border-solid border-border border-gray-500" />

                <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                  <div className="w-[46px] h-0.5 relative box-border border-t-[2px] border-solid border-primary-text" />
                </div>
              </div>
              <div className="self-stretch relative text-3xl leading-[150%] font-medium z-[1] mq450:text-3xl mq450:leading-[34px]">
                Amrit Bharat-2024
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <img
                className="w-14 h-14 relative z-[1]"
                loading="lazy"
                alt=""
                src={img1}
              />
            </div>
          </div>
          <div
            className="flex-1 bg-slate-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-ghostwhite flex flex-row items-end justify-start pt-[45px] px-10 pb-[65px] box-border gap-[24px] min-w-[408px] max-w-full cursor-pointer mq750:flex-wrap mq750:min-w-full"
            onClick={onEventContainerClick}
          >
            <div className="h-[191px] w-[628px] relative rounded-lg bg-ghostwhite hidden max-w-full" />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="flex flex-col items-start justify-start">
                <div
                  className="relative text-4xl leading-[120%] font-medium z-[1] "
                  style={optimizeCoachingStrategiesStyle}
                >
                  02
                </div>
                <div className="flex flex-row items-start justify-start py-0  text-base">
                  <div
                    className="relative text-xl tracking-[2px] uppercase font-normal z-[1]"
                    style={mARStyle}
                  >
                    MAR
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-full text-base">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div
                  className="flex flex-row items-start justify-start gap-[23px]  z-[1]"
                  style={eventHeader1Style}
                >
                  <div
                    className="relative tracking-[2px] uppercase font-medium"
                    style={nextEvents1Style}
                    
                  >
                    Next Events
                    
                  </div>
                  <div className="self-stretch h-[3px] p-4 m-2 relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[4px] border-solid border-border border-gray-500" />

                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="w-[46px] h-0.5 relative box-border border-t-[2px] border-solid border-primary-text" />
                  </div>
                </div>
              </div>
              <h2 className="m-0 self-stretch relative font-medium  text-2xl leading-[150%]  z-[1]">
                Weekly Education Program
              </h2>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <img
                className="w-14 h-14 relative z-[1]"
                loading="lazy"
                alt=""
                src={img1}
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

Events.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay2: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propLineHeight1: PropTypes.any,
  propDisplay3: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propDisplay4: PropTypes.any,
  propMinWidth4: PropTypes.any,
  propHeight1: PropTypes.any,
  propPadding1: PropTypes.any,
  propDisplay5: PropTypes.any,
  propMinWidth5: PropTypes.any,
  eventsAlignSelf: PropTypes.any,
  eventsWidth: PropTypes.any,
};

export default Events;
