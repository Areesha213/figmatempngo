import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Contribution = ({
  className = "",
  image,
  propHeight,
  propColor,
  propDisplay,
  propMinWidth,
  onNavButtonClick,
}) => {
  const bGStyle = useMemo(() => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }, [image]);

  const youCanContributeStyle = useMemo(() => {
    return {
      height: propHeight,
      color: propColor,
    };
  }, [propHeight, propColor]);

  const secondaryButtonTextStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-gray-900 font-h2 ${className}`}
    >
      <div
        className="w-[1280px] rounded-xl flex flex-col items-center justify-start pt-[93px] pb-[92px] pr-5 pl-[21px] box-border relative gap-[32px] bg-cover bg-no-repeat bg-center max-w-full mq450:pt-[60px] mq450:pb-[60px] mq450:box-border mq750:gap-[16px]"
        style={bGStyle}
      >
        <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 rounded-xl bg-gray-800 opacity-70 z-[1]" />
        <h1
          className="m-0 w-[631px] h-[116px] relative text-5xl leading-[120%] font-normal text-gray-200 inline-block max-w-full z-[2] mq450:text-2xl mq450:leading-[35px] mq750:text-4xl mq750:leading-[46px]"
          style={youCanContributeStyle}
        >
          You can contribute to make the society develop!
        </h1>
        <div className="w-[631px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-center gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <button className="cursor-pointer border-none py-4 px-8 bg-ghostwhite backdrop-filter-blur(80px) rounded flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-lightgray">
              <div className="relative  font-medium font-h2 text-lg text-primary-text text-right bg-slate-200 rounded-md p-5">
                Join as a volunteer
              </div>
            </button>
            <button
              className="cursor-pointer border-none py-4 px-8 bg-ghostwhite backdrop-filter-blur(80px) rounded flex flex-row items-start justify-start z-[2] hover:bg-lightgray"
              onClick={onNavButtonClick}
            >
              <div
                className="relative text-lg font-medium font-h2 text-primary-text text-right bg-slate-200 p-5 rounded-md"
                style={secondaryButtonTextStyle}
              >
                Donate
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Contribution.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onNavButtonClick: PropTypes.func,
};

export default Contribution;
