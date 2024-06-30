import { useMemo } from "react";
import PropTypes from "prop-types";
import img4 from "../assets/group-117.svg"

const Supporters = ({ className = "", propAlignSelf, propGap, propWidth }) => {
  const supportersStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      width: propWidth,
    };
  }, [propAlignSelf, propGap, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[20.7px] max-w-full text-left text-base text-primary-text font-h2 ${className}`}
      style={supportersStyle}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
        <div className="relative tracking-[2px] uppercase font-medium">
          our Supporters
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[711px] max-w-full mq1050:min-w-full">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-primary-text border-gray-950" />
        </div>
      </div>
      <div className="w-[1256px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="w-[1060px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src={img4}
        />
      </div>
    </div>
  );
};

Supporters.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Supporters;
