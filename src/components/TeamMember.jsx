import { useMemo } from "react";
import PropTypes from "prop-types";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TeamMember = ({
  className = "",
  image,
  anushkaSrivastava,
  cofounderCEO,
  propFlex,
  propWidth,
  propDisplay,
  propMinWidth,
  propTextAlign,
  propMinWidth1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const anushkaSrivastavaStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const cofounderCEOStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      minWidth: propMinWidth1,
    };
  }, [propTextAlign, propMinWidth1]);

  return (
    <div
      className={`h-[431px] w-[296px] border rounded-lg flex flex-col items-start justify-start gap-[16px] text-center text-xl text-primary-text font-h2 ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[60px] pl-[59px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div
          className="flex-1 flex flex-col items-center justify-center gap-[8px]"
          style={frameDiv1Style}
        >
          <div
            className="relative leading-[160%] font-medium mq450:text-base mq450:leading-[26px]"
            style={anushkaSrivastavaStyle}
          >
            {anushkaSrivastava}
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[37px] pl-[38px] text-left text-xs text-gray-400">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-row items-center justify-center py-0 ">
                <div
                  className="relative leading-[160%] font-medium inline-block min-w-[85px]"
                  style={cofounderCEOStyle}
                >
                  {cofounderCEO}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[20px] opacity-[0.8] m-4">
                <FaFacebookF className="h-5 w-5" />
                <FaTwitter className="h-5 w-5" />
                <FaLinkedinIn className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  anushkaSrivastava: PropTypes.string,
  cofounderCEO: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextAlign: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default TeamMember;
