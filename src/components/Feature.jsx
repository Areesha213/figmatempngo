import { useMemo } from "react";
import PropTypes from "prop-types";

const Feature = ({
  className = "",
  iconlyBulkEditSquare,
  eventsIn1Week,
  moreThan100EventsWereCond,
  propDisplay,
}) => {
  const eventsIn1Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={`self-stretch  flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-5xl text-primary-text font-h2 ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[20px]">
        <img
          className="h-8 w-8 relative"
          loading="lazy"
          alt=""
          src={iconlyBulkEditSquare}
        />
        <h3
          className="m-0 relative text-2xl leading-[160%] font-bold font-inherit mq450:text-lgi mq450:leading-[31px]"
          style={eventsIn1Style}
        >
          {eventsIn1Week}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base text-secondary-text">
        <div className="w-[436px] relative leading-[160%] inline-block shrink-0 max-w-full">
          {moreThan100EventsWereCond}
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
  iconlyBulkEditSquare: PropTypes.string,
  eventsIn1Week: PropTypes.string,
  moreThan100EventsWereCond: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default Feature;
