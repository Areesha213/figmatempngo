import PropTypes from "prop-types";
import img1 from "../assets/section-title6@2x.png";
import img2 from "../assets/image6@2x.png";

const Content1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[23px] box-border max-w-full text-left text-primary-text font-h2 ${className}`}
    >
      <div className=" flex flex-row items-start justify-between max-w-full gap-[24px] mq1300:flex-wrap">
        <div className="w-[690px] flex flex-col items-start justify-start gap-[33px] max-w-full  mq800:min-w-full mq1300:flex-1">
          <img
            className="w-[212px] h-[19px] relative object-contain"
            loading="lazy"
            alt=""
            src={img1}
          />
          <div className=" flex flex-row items-start justify-center py-0  box-border max-w-full">
            <h1 className="m-0 w-[461px] relative text-5xl leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-3xl mq450:leading-[40px] mq800:text-5xl mq800:leading-[54px]">
              We are working for the society
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base text-secondary-text">
            <div className="w-[594px]  relative leading-[160%] inline-block shrink-0 max-w-full">
              <p className="m-0">
                We work for the development of the Bastis in the Varanasi region
                of UP, helping in education, health and finance.
              </p>
              <p className="m-0">
                We continuously organize events and awareness sessions in those
                areas, making them aware of government schemes, scholarships and
                health. We aim to uplift those underprivileged sections of
                society.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-full">
          <img
            className="w-[480px] h-auto relative rounded-xl object-cover max-w-full mq1300:flex-1"
            loading="lazy"
            alt=""
            src={img2}
          />
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
