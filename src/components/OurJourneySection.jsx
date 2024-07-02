import PropTypes from "prop-types";
import img1 from "../assets/image2@2x.png"

const OurJourneySection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-gray-950 flex flex-row items-start justify-center py-16 pr-[37px] pl-24 box-border gap-[47.8px] max-w-full text-left text-base text-white font-h2 lg:pl-12 lg:box-border mq750:gap-[24px] mq750:pl-6 mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:flex-wrap ${className}`}
    >
      <div className="h-[576px] w-[1280px] relative rounded-xl bg-gray-100 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[488.2px] max-w-full mq450:pt-[42px] mq450:box-border mq750:min-w-full mq1050:flex-1">
        <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
          <b className="relative tracking-[2px] uppercase inline-block min-w-[129px] z-[1] ">{`OUR JOURNEY `}</b>
          <h1 className="m-0 relative text-6xl leading-[58px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq450:leading-[35px] mq1050:text-12xl mq1050:leading-[46px]">
            How we raised 34M
          </h1>
          <div className=" relative  text-gray-200 inline-block max-h-[130px] [word-break:break-word] z-[1] mq450:text-base">{`The advent of online fundraising platforms and digital payment systems has made it easier for individuals from all walks of life to contribute to causes they care about and have the ability to make their small donations count and go far. Digital donations have expanded the reach of our organisation. `}</div>
          <div className="w-[276px] flex flex-row items-start justify-between gap-[20px] text-5xl mq450:mt-24">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[160%] font-medium inline-block min-w-[62px] z-[1] mq450:text-xl mq450:leading-[31px]">
                34M+
              </div>
              <div className="relative text-xs leading-[160%] font-medium text-gray-200 inline-block min-w-[101px] z-[1]">
                Donation Received
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[160%] font-medium inline-block min-w-[55px] z-[1] mq450:text-xl mq450:leading-[31px]">
                400+
              </div>
              <div className="relative text-xs leading-[160%] font-medium text-gray-200 inline-block min-w-[52px] z-[1]">
                Volunters
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[160%] font-medium inline-block min-w-[56px] z-[1] mq450:text-xl mq450:leading-[31px]">
                15K+
              </div>
              <div className="relative text-xs leading-[160%] font-medium text-gray-200 inline-block min-w-[39px] z-[1]">
                {" "}
                Events
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[448px] flex-1 relative rounded-md max-w-full overflow-hidden object-cover min-w-[397px] z-[1] mq750:min-w-full"
        loading="lazy"
        alt=""
        src={img1}
      />
    </div>
  );
};

OurJourneySection.propTypes = {
  className: PropTypes.string,
};

export default OurJourneySection;
