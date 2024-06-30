import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = ({ className = "", onContactTextClick, onNavButtonClick }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhatWeDoClick = useCallback(() => {
    navigate("/what-we-do");
  }, [navigate]);

  const onContactTextClick1 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/project-read-more");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/event-read-more");
  }, [navigate]);

  return (
    <footer
      className={`self-stretch bg-ghostwhite flex flex-col items-end justify-start pt-[97px] pb-16 pr-[498px] pl-56 box-border gap-[5px] max-w-full text-center text-sm text-gray-1000 font-inter mq750:pt-[63px] mq750:pb-[42px] mq750:pr-[249px] mq750:pl-28 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1500px] h-[554px] relative bg-ghostwhite hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left font-h2 mq1100:flex-wrap mq1100:justify-center">
        <div className="h-[220.4px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border gap-4">
          <FaFacebook className="w-8 h-8 text-gray-700" />
          <FaTwitter className="w-8 h-8 text-gray-700" />
          <FaInstagram className="w-8 h-8 text-gray-700" />
          <FaYoutube className="w-8 h-8 ttext-gray-700" />
        </div>
        <div className="w-[505px] flex flex-col items-start justify-start gap-[67px] max-w-full mq750:gap-[33px] mq450:gap-[17px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq450:flex-wrap">
            <div className="w-[102.1px] flex flex-col items-start justify-start gap-[31.1px]">
              <b className="w-[92.4px] relative text-base leading-[26px] inline-block text-gray-1100">
                Our team
              </b>
              <div
                className="w-[77.3px] relative leading-[23px] inline-block cursor-pointer"
                onClick={onAboutUsTextClick}
              >
                About us
              </div>
              <div
                className="w-[48.3px] relative leading-[23px] inline-block cursor-pointer"
                onClick={onAboutUsTextClick}
              >
                Team
              </div>
              <div
                className="self-stretch relative leading-[23px] cursor-pointer"
                onClick={onWhatWeDoClick}
              >
                What we do
              </div>
              <div
                className="w-[67.6px] relative leading-[25.7px] inline-block cursor-pointer"
                onClick={onContactTextClick1}
              >
                Contact
              </div>
            </div>
            <div className="w-[71.7px] flex flex-col items-start justify-start gap-[31.1px]">
              <b className="w-[52.4px] relative text-base leading-[26px] inline-block text-gray-1100">
                More
              </b>
              <div
                className="self-stretch relative leading-[23px] cursor-pointer"
                onClick={onProjectsTextClick}
              >
                Projects
              </div>
              <div
                className="w-[58px] relative leading-[23px] inline-block cursor-pointer"
                onClick={onEventsTextClick}
              >
                Events
              </div>
              <div
                className="w-[62.1px] relative leading-[23px] inline-block cursor-pointer"
                onClick={onNavButtonClick}
              >
                Donate
              </div>
              <div className="w-[38.6px] relative leading-[25.7px] inline-block">
                Blog
              </div>
            </div>
            <div className="w-[88.3px] flex flex-col items-start justify-start gap-[31.1px]">
              <b className="w-[82.8px] relative text-base leading-[26px] inline-block text-gray-1100">{`Connect `}</b>
              <div className="w-[84.2px] relative leading-[23px] inline-block">
                Facebook
              </div>
              <div className="self-stretch relative leading-[23px]">
                Instagram
              </div>
              <div className="w-[60.7px] relative leading-[23px] inline-block">
                Twitter
              </div>
              <div className="w-[62.1px] relative leading-[25.7px] inline-block">{`Linkdin `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[51px] text-xl text-gray-1100 font-inter">
            <div className="w-[142px] relative font-medium inline-block shrink-0 z-[1] mq450:text-base">
              SUBSCRIBE
            </div>
          </div>
        </div>
      </div>
      <div className="w-[504px] flex flex-row items-start justify-center pt-0 px-0 pb-1.5 box-border max-w-full text-mini text-white">
        <div className="w-[286px] rounded-xl bg-gray-1100 flex flex-row items-start justify-start pt-[5px] px-[18px] pb-[3px] box-border z-[1]">
          <div className="h-[27px] w-[286px] relative rounded-xl bg-gray-1100 hidden" />
          <div className="flex-1 relative text-lg font-light whitespace-nowrap z-[2] bg-slate-900 rounded-full p-2">
            hello@kashiutthan.com
          </div>
        </div>
      </div>
      <div className="w-[492px] flex flex-row items-start justify-center max-w-full text-smi text-gray-1100">
        <div className="w-[262px] relative inline-block shrink-0 z-[1]">
          Get new updates daily! Join now!
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onContactTextClick: PropTypes.func,
  onNavButtonClick: PropTypes.func,
};

export default Footer;
