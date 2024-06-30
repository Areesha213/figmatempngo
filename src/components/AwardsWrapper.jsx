import PropTypes from "prop-types";
import img1 from '../assets/award-badge.svg'
import img2 from "../assets/award-badge-1@2x.png"
import img3 from "../assets/Award badge.png"
import img4 from "../assets/award-badge-3@2x.png"

const AwardsWrapper = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full text-center text-29xl text-primary-text font-h2 ${className}`}
    >
      <div className="w-[1106.3px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-7 pl-5">
          <h1 className="m-0 relative text-5xl text-gray-900 leading-[58px] font-bold ">{`Awards & Recognitions`}</h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-5xl mq750:flex-wrap mq750:justify-center">
          <div className="w-[128.3px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[92px] flex-1 relative max-w-full overflow-hidden"
                  loading="lazy"
                  alt=""
                  src={img1}
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-8">
                  <b className="flex-1 relative leading-[160%] mq450:text-lgi mq450:leading-[31px]">
                    2021
                  </b>
                </div>
                <b className="relative text-base leading-[26px] inline-block min-w-[120px]">
                  Best NGO Award
                </b>
                <div className="flex flex-row items-start justify-end py-0 pr-2.5 pl-[11px] text-xs text-gray-400">
                  <div className="relative leading-[160%] uppercase font-medium inline-block min-w-[99px]">
                    new delhi, india
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[199px] w-[119px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[16px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src={img2}
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2">
                <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
                  <div className="flex flex-row items-start justify-center ">
                    <b className="relative flex justify-center leading-[160%]  ">
                      2018
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 text-base">
                    <b className="relative leading-[26px] inline-block min-w-[90px]">
                      Kashi Award
                    </b>
                  </div>
                  <div className="relative text-xs leading-[160%] uppercase font-medium text-gray-400 inline-block min-w-[95px]">
                    Varanasi, india
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[199px] w-[111px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="self-stretch flex-1 relative max-w-full  max-h-full object-cover"
              alt=""
              src={img3}
            />
            <div className="flex flex-row items-center justify-center py-0 px-[3px]">
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <div className="flex flex-row items-center justify-center py-0 ">
                  <b className="relative leading-[160%] inline-block min-w-[56px] mq450:text-lgi mq450:leading-[31px]">
                    2014
                  </b>
                </div>
                <b className="relative text-base leading-[26px] inline-block min-w-[104px]">
                  Foresto Award
                </b>
                <div className="flex flex-row items-start justify-start py-0 px-0.5 text-xs text-gray-400">
                  <div className="relative leading-[160%] uppercase font-medium inline-block min-w-[99px]">
                    New Delhi, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[148px] flex flex-col items-end justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18px] pl-[19px]">
              <img
                className="h-[92px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src={img4}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[4px]">
              <div className="flex flex-row items-center justify-center py-0">
                <b className="relative leading-[160%] inline-block min-w-[56px] mq450:text-lgi mq450:leading-[31px]">
                  2010
                </b>
              </div>
              <b className="relative text-base leading-[26px]">
                Society Saver Award
              </b>
              <div className="flex flex-row items-start justify-end py-0 pr-6 pl-[25px] text-xs text-gray-400">
                <div className="w-[99px] relative leading-[160%] uppercase font-medium inline-block min-w-[99px]">
                  Vienna, Austria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AwardsWrapper.propTypes = {
  className: PropTypes.string,
};

export default AwardsWrapper;
