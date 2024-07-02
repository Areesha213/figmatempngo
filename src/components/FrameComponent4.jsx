import PropTypes from "prop-types";
import img1 from "../assets/section-title3@2x.png"

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full text-left text-37xl text-primary-text font-h2 ${className}`}
    >
      <div className="w-[1280px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <img
          className="w-[247px] h-[19px] relative object-contain"
          loading="lazy"
          alt=""
          src={img1}
        />
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[1184px] flex flex-row items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px] mq1050:flex-wrap">
            <h1 className="m-0 flex-1 relative text-5xl leading-[120%] font-normal font-inherit inline-block min-w-[406px] max-w-full mq450:text-10xl mq450:leading-[55px] mq750:min-w-full mq1050:text-26xl mq1050:leading-[54px]">
              We are a nonprofit team working worldwide
            </h1>
            <div className="w-[496px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[496px] max-w-full text-xl mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <div className="self-stretch relative text-2xl leading-[150%] mq450:text-base mq450:leading-[24px]">
                  We help underprivileged sections of society to uplift
                </div>
                <div className="self-stretch relative text-base leading-[160%] text-dimgray-200">
                  <p className="m-0">
                    We work for the development of the Bastis in the Varanasi
                    region of UP, helping in education, health and finance.
                  </p>
                  <p className="m-0">
                    We continuously organizes events and awareness sessions in
                    those areas, making them aware of government schemes,
                    scholarships and health. We aims to uplift those
                    underprivileged sections of society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
