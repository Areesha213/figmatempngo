import PropTypes from "prop-types";
import img1 from "../assets/section-title6@2x.png";
import img2 from "../assets/image6@2x.png";

const Content1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[23px] box-border max-w-full text-left text-primary-text font-h2 ${className}`}
    >
      <div className="w-[1280px] flex flex-row items-start justify-between max-w-full gap-[24px] mq1300:flex-wrap">
        <div className="w-[690px] flex flex-col items-start justify-start gap-[33px] min-w-[690px] max-w-full mq800:gap-[16px] mq800:min-w-full mq1300:flex-1">
          <img
            className="w-[212px] h-[19px] relative object-contain"
            loading="lazy"
            alt=""
            src={img1}
          />
          <div className="w-[653px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 w-[461px] relative text-5xl leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-15xl mq450:leading-[40px] mq800:text-26xl mq800:leading-[54px]">
              We are working for the society
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base text-secondary-text">
            <div className="w-[594px] pl-24  relative leading-[160%] inline-block shrink-0 max-w-full ">
              <p className="m-0">
                We work for the development of the Bastis in the Varanasi region
                of UP, helping in education, health and finance.
              </p>
              <p className="m-0">
                We continuously organizes events and awareness sessions in those
                areas, making them aware of government schemes, scholarships and
                health. We aims to uplift those underprivileged sections of
                society.
              </p>
            </div>
            <div className="flex flex-col max-w-full ">
              <img
                className="w-[480px] relative rounded-xl max-h-full object-cover max-w-full mq1300:flex-1"
                loading="lazy"
                alt=""
                src={img2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
