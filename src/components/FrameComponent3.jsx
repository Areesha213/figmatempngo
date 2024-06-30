import PropTypes from "prop-types";
import img1 from "../assets/video1.svg"

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-left text-base text-primary-text font-h2 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="w-[1280px] relative max-h-full max-w-full z-[2]"
          loading="lazy"
          alt=""
          src={img1}
        />
      </div>
      <div className="self-stretch bg-ghostwhite flex flex-col items-center justify-start pt-80 pb-16 pr-5 pl-[21px] box-border gap-[96px] max-w-full mt-[-224px] mq450:gap-[24px] mq450:pb-[27px] mq450:box-border mq750:gap-[48px] mq1050:pb-[42px] mq1050:box-border">
        <div className="w-[1500px] h-[867px] relative bg-ghostwhite hidden max-w-full" />
        <div className="w-[1281px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <div className="w-[1088px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[496px] flex flex-col items-start justify-start gap-[15px] max-w-full">
              <b className="relative text tracking-[2px] uppercase inline-block min-w-[124px] z-[1]">
                our mission
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-2xl">
                <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit z-[1] mq450:text-3xl mq450:leading-[34px]">
                  We make the society we save our own humanity
                </h2>
                <div className="self-stretch relative text-base leading-[160%] text-gray-800 z-[1]">
                  Works for the development of the bastis in the Varanasi region
                  of UP, helping in education, health and finance. We
                  continuously organizes events and awareness sessions in those
                  areas, making them aware of government schemes, scholarships
                  and health. This organization aims to uplift those
                  underprivileged sections of society.
                </div>
              </div>
            </div>
            <div className="w-[496px] flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <b className="relative tracking-[2px] uppercase inline-block min-w-[108px] z-[1]">
                  our Vision
                </b>
                <h2 className="m-0 self-stretch relative text-2xl leading-[150%] font-normal font-inherit z-[1] mq450:text-3xl mq450:leading-[34px]">
                  Better today, brighter tomorrow
                </h2>
              </div>
              <div className="self-stretch relative leading-[160%] text-gray-800 whitespace-pre-wrap z-[1]">{`We seek a world of hope, tolerance and social justice, where poverty has been overcome and people live in dignity and security. The villages must be potential enough to develop at a faster pace, the  underprivileged sections of society must rise.  `}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
