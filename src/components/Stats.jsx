import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Contribution from "./Contribution";
import PropTypes from "prop-types";

//images
import img1 from "../assets/chart.svg"
import img2 from "../assets/xsdsds@2x.png"
import img3 from "../assets/5.png"

const Stats = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/donation");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[61.6px] box-border gap-[96px] max-w-full shrink-0 text-left  text-black1 font-h2 mq450:gap-[24px] mq750:gap-[48px] mq750:pb-[26px] mq750:box-border mq1225:pb-10 mq1225:box-border ${className}`}
    >
      <div className="self-stretch bg-ghostwhite flex flex-row items-end justify-between py-24 px-[110px] box-border max-w-full gap-[20px] ">
        <div className="h-[567px] w-[1500px] relative bg-ghostwhite hidden max-w-full" />
        <div className="w-[611px] flex flex-col items-start justify-start box-border mq750:hidden">
          <div className="self-stretch flex flex-col items-start justify-start  max-w-full ">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <h1 className="m-6  text-4xl font-normal  z-[1]">
                How we spend your donations and where it goes
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start  text-gray-700 m-8">
                <div className="   max-w-full z-[1]">
                  We understand that when you make a  donation, you want to know
                  exactly where your money is going and we pledge to be
                  transparent.
                </div>
              </div>
            </div>
            <div className="w-[556px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base">
              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px] max-w-full mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[248px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[19px] max-w-full ">
                      <div className="flex flex-row items-start justify-start gap-[8px] ">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0  ">
                          <input
                            className="m-0 w-4 h-4 relative rounded z-[1]"
                            type="checkbox"
                          />
                        </div>
                        <div className="relative leading-[160%] z-[1]">
                          40% Oraganizing Events
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-4 h-4 relative rounded bg-mediumpurple z-[1]" />
                        </div>
                        <div className="relative leading-[160%] z-[1]">{`35% Skills Training `}</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[55px] mq450:flex-wrap mq450:gap-[27px]">
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-4 h-4 relative rounded bg-khaki z-[1]" />
                        </div>
                        <div className="relative leading-[160%] z-[1]">
                          10% Human safety
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-4 h-4 relative rounded bg-palevioletred z-[1]" />
                        </div>
                        <div className="relative leading-[160%] z-[1]">
                          5% Feeding the poor
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <input
                    className="m-0 w-4 h-4 relative rounded z-[1]"
                    type="checkbox"
                  />
                </div>
                <div className="relative leading-[160%] z-[1]">
                  10% Helping people
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[375px] w-[375px] relative min-w-[375px] max-w-full mq750:hidden flex-1 flex-col">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
            alt=""
            src={img1}
          />
          <img
            className="absolute top-[138px] left-[160px] rounded-xl w-[100px] h-[100px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src={img2}
          />
        </div>
      </div>
      <Contribution
        image={img3}
        onNavButtonClick={onSecondaryButtonClick}
      />
    </section>
  );
};

Stats.propTypes = {
  className: PropTypes.string,
};

export default Stats;
