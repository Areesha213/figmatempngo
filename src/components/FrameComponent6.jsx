import PropTypes from "prop-types";
import img1 from "../assets/vector.svg"
import img2 from "../assets/materialsymbolsbrandawarenessrounded.svg"
import img3 from "../assets/foundationsocialskillshare1.svg"
import img4 from "../assets/zondiconseducation.svg"


const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-left text-29xl text-primary-text font-h2 ${className}`}
    >
      <div className="flex-1 bg-ghostwhite flex flex-col items-start justify-start pt-24 px-[110px] pb-[66px] box-border gap-[63px] max-w-full mq450:gap-[16px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[31px] mq800:pt-[62px] mq800:px-[55px] mq800:pb-[43px] mq800:box-border">
        <div className="w-[1500px] h-[574px] relative bg-ghostwhite hidden max-w-full" />
        <h1 className="m-0 relative text-5xl leading-[58px] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px]">
          What we do for the society
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full text-5xl">
          <div className="flex flex-col items-start justify-start gap-[121.7px]">
            <img
              className="w-7 h-[29.3px] relative z-[2]"
              loading="lazy"
              alt=""
              src={img1}
            />
            <img
              className="w-7 h-7 relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src={img2}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start  box-border min-w-[798px] max-w-full mq1125:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq1300:flex-wrap">
              <div className="w-[505px] flex flex-col items-center justify-center gap-[36px] min-w-[505px] max-w-full mq800:gap-[18px] mq800:min-w-full mq1300:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <h3 className="m-1 relative text-3xl font-medium font-inherit mq450:text-lgi">
                    Conducts Workshops
                  </h3>
                  <div className="self-stretch relative m-3 text-start text-base leading-[160%] text-secondary-text">
                    Initiating self-employment ventures (for men and women) and
                    organizing leadership/personality development programmes and
                    making them aware of government schemes, scholarships and
                    health.
                  </div>
                </div>
                <div className="w-[442px] flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <h3 className="m-0 relative text-3xl font-medium font-inherit inline-block max-w-full mq450:text-lgi">
                    Activites and Awareness Camps
                  </h3>
                  <div className="self-stretch relative text-base leading-[160%] text-dimgray-200">
                    Development of women and rural folks socially, economically,
                    politically through income generating activities, education
                    programmes, awareness camps, etc.
                  </div>
                </div>
              </div>
              <div className="w-[554px] flex flex-row items-start justify-start gap-[23px] min-w-[554px] max-w-full mq800:flex-wrap mq1125:min-w-full mq1300:flex-1">
                <div className="flex flex-col items-start justify-start gap-[122px]">
                  <img
                    className="w-7 h-7 relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src={img3}
                  />
                  <img
                    className="w-7 h-7 relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src={img4}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[36px] min-w-[327px] max-w-full mq800:gap-[18px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h3 className="m-0 relative text-3xl font-medium font-inherit mq450:text-lgi">{`Skills Training `}</h3>
                    <div className="self-stretch relative text-base leading-[160%] text-dimgray-200">
                      Eradicating poverty through generation of employment
                      opportunities, income generating activities, providing
                      skill based training, imparting new technology in
                      agriculture etc.
                    </div>
                  </div>
                  <div className="w-[477px] flex flex-col items-start justify-start gap-[8px] max-w-full">
                    <h3 className="m-0 relative text-3xl font-medium font-inherit inline-block max-w-full mq450:text-lgi">
                      Runs Educational Programmes
                    </h3>
                    <div className="self-stretch relative text-base leading-[160%] text-dimgray-200">
                      Running educational programmes like formal education,
                      non-formal education and adult education programmes to
                      decrease illiteracy rate and to improve human resources
                      for the development of a nation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
