import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  vaadininstitution,
  conductsWorkshops,
  initiatingSelfEmploymentV,
  propGap,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const initiatingSelfEmploymentVenStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-5xl text-primary-text font-h2 ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[24px]">
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[2]"
          loading="lazy"
          alt=""
          src={vaadininstitution}
        />
        <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lgi">
          {conductsWorkshops}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base text-secondary-text">
        <div
          className="w-[632px] relative leading-[160%] inline-block shrink-0 max-w-full z-[1]"
          style={initiatingSelfEmploymentVenStyle}
        >
          {initiatingSelfEmploymentV}
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  vaadininstitution: PropTypes.string,
  conductsWorkshops: PropTypes.string,
  initiatingSelfEmploymentV: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default FrameComponent;
