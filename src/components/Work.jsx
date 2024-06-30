import img1 from "../assets/section-title-1@2x.png"
import img2 from "../assets/foundationsocialskillshare.svg"
import img3 from "../assets/Image.png"
import PropTypes from "prop-types";

const Work = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[61.6px] box-border max-w-full shrink-0 text-left text-29xl text-primary-text font-h2 mq750:pb-[26px] mq750:box-border mq1050:pb-10 mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-ghostwhite flex flex-row items-end justify-center pt-24 pb-[42.8px] pr-[75px] pl-[110px] box-border gap-[40px] max-w-full mq450:pl-5 mq450:pt-10 mq450:pb-5 mq450:box-border mq750:gap-[20px] mq750:pl-[55px] mq750:pr-[37px] mq750:box-border mq1050:pt-[62px] mq1050:pb-7 mq1050:box-border mq1225:flex-wrap">
        <div className="h-[901px] w-[1500px] relative bg-ghostwhite hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[32.3px] min-w-[517px] max-w-full mq450:gap-[16px] mq750:min-w-full">
          <img
            className="w-[212px] h-[19px] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src={img1}
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full">
            <div className="w-[608px] flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="text-5xl">
                We organizes events and awareness sessions
              </h1>
              <div className="self-stretch h-[52px] relative text-base leading-[160%] text-secondary-text inline-block shrink-0 z-[1]">
                Works for the development of the bastis in the Varanasi region
                of UP, helping in education, health and finance.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center max-w-full text-5xl">
            <div className="w-[699px] flex  items-start justify-center max-w-full mq750:flex-wrap">
              <div className="h-[442px] w-px relative box-border z-[1] border-r-[1px] border-solid border-border mq750:w-full mq750:h-px" />
              <div className="flex-1 flex flex-col items-start justify-start  min-w-[445px] max-w-full ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.3px] max-w-full m-9">
                  
                  <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[2]"
                      loading="lazy"
                      alt=""
                      src={img2}
                    />
                    <h3 className="m-0 relative text-2xl font-medium leading-loose">{`Runs Educational Programmes `}</h3>
                  </div>
                  <div className="self-stretch  flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-base text-secondary-text">
                    <div className="h-[52px] w-[632px] pl-14 relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
                      Eradicating poverty through generation of employment
                      opportunities, income generating activities, providing
                      skill based training, imparting new technology in
                      agriculture etc.
                    </div>
                  </div>
                </div>
                <div className="self-stretch m-9 flex flex-col items-start justify-start gap-[15.3px] max-w-full shrink-0">
                  
                  <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[2]"
                      loading="lazy"
                      alt=""
                      src={img2}
                    />
                    <h3 className="m-0 relative text-2xl font-medium leading-loose">{`Skills Training `}</h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-base text-secondary-text">
                    <div className="h-[52px] w-[632px] pl-14 relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
                      Eradicating poverty through generation of employment
                      opportunities, income generating activities, providing
                      skill based training, imparting new technology in
                      agriculture etc.
                    </div>
                  </div>
                </div>
                <div className="self-stretch m-9 flex flex-col items-start justify-start gap-[15.3px] max-w-full shrink-0">
                  
                  <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[2]"
                      loading="lazy"
                      alt=""
                      src={img2}
                    />
                    <h3 className="m-0 relative text-2xl font-medium leading-loose">{`Activites and Awareness Camps `}</h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-base text-secondary-text">
                    <div className="h-[52px] w-[632px] pl-14 relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
                      Eradicating poverty through generation of employment
                      opportunities, income generating activities, providing
                      skill based training, imparting new technology in
                      agriculture etc.
                    </div>
                  </div>
                </div>
                <div className="self-stretch m-9 flex flex-col items-start justify-start gap-[15.3px] max-w-full shrink-0">
                  
                  <div className="flex flex-row items-center justify-start gap-[24px] ">
                    <img
                      className="h-7 w-7   relative overflow-hidden shrink-0 min-h-[28px] z-[2]"
                      loading="lazy"
                      alt=""
                      src={img2}
                    />
                    <h3 className="m-0 relative text-2xl leading-loose font-medium ">{`Conducts Workshops `}</h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-base text-secondary-text">
                    <div className="h-[52px] w-[632px] pl-14 relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
                    Initiating self-employment ventures (for men and women) and organizing leadership/personality development programmes and making them aware of government schemes, scholarships and health.
                    </div>
                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
          
          
        </div>
        <div className="h-[800px] w-[480px] flex flex-col items-start justify-end pt-14 px-5 pb-[18.6px] box-border min-w-[480px] ">
          <img
            className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover mr-9"
            loading="lazy"
            alt=""
            src={img3}
          />
        </div>
      </div>
    </section>
  );
};

Work.propTypes = {
  className: PropTypes.string,
};

export default Work;
