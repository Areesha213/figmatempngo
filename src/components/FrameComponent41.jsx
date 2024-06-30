import PropTypes from "prop-types";
//images
import img1 from "../assets/section-title5@2x.png"
import img2 from "../assets/image5@2x.png"
import img3 from "../assets/image-12@2x.png"
import img4 from "../assets/image-22@2x.png"
import img5 from "../assets/image-31@2x.png"
import img6 from "../assets/image-41@2x.png"
import img7 from "../assets/image-51@2x.png"

const FrameComponent41 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch m-9 flex flex-row items-start justify-center pt-0 pb-[59px] pr-5 pl-7 box-border max-w-full text-left text-37xl text-primary-text font-h2 lg:pb-[38px] lg:box-border mq750:pb-[25px] mq750:box-border ${className}`}
    >
      <div className="w-[1100px] flex flex-col items-start justify-start gap-[75px] max-w-full lg:gap-[37px] mq750:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-7 pl-5 box-border max-w-full">
          <div className="w-[832px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq450:gap-[22px]">
              <img
                className="w-[222px] h-[19px] relative object-contain"
                loading="lazy"
                alt=""
                src={img1}
              />
              <h1 className="m-0 self-stretch relative text-6xl leading-[120%] font-normal font-inherit mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
                Education Awareness Program 2023
              </h1>
            </div>
            <div className="self-stretch relative text-base leading-[160%] text-secondary-text">
              <p className="m-0">
                The awareness initiatives, based on the theme ‘Let’s celebrate
                government schools’, will have one vehicle for every fifty
                schools in a district, which will be flagged off and tour the
                areas there. 
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                According to the circular, teachers, Illam Thedi Kalvi
                Volunteers, and education department officials involved in the
                enrollment drive should speak to parents about various
                initiatives of the education department, including providing
                textbooks, learning initiatives such as the Ennum Ezhuthum
                Mission, teachers, and the infrastructure that government
                schools are equipped with.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                In schools where student strength and enrollment rates are low,
                the teachers there in particular have been asked to put in
                special effort into raising awareness and encouraging parents to
                enrol their children. 
              </p>
              <p className="m-0">
                Every year, ahead of the upcoming academic year, teachers in
                government schools also carry out a door-to-door awareness
                programme, particularly in the neighbourhoods around the
                government schools, and encourage parents to admit children into
                primary classes. Following the pandemic, the school education
                department saw an increase in enrollments in government schools,
                particularly in high and higher secondary classes.  
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Following the pandemic, the school education department saw an
                increase in enrollments in government schools, particularly in
                high and higher secondary classes. 
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[34px_38px] min-h-[674px] max-w-full mq750:gap-[19px]">
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src={img2}
          />
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            alt=""
            src={img3}
          />
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            alt=""
            src={img4}
          />
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            alt=""
            src={img5}
          />
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            alt=""
            src={img6}
          />
          <img
            className="w-[340px] relative rounded-xl max-h-full object-cover max-w-full"
            alt=""
            src={img7}
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent41.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent41;
