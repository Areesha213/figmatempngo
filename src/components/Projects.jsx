import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Project from "./Project";
import PropTypes from "prop-types";
import "../styles/Projects.css"
import img1 from "../assets/section-title-2@2x.png";
import img2 from "../assets/1.png";
import img3 from "../assets/2.png";
import img4 from "../assets/3.png";

const Projects = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/project-read-more");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[61.6px] box-border max-w-full shrink-0 text-left  text-primary-text font-h2 mq450:pb-[26px] mq450:box-border mq1050:pb-10 mq1050:box-border ${className}`}
    >
      <div className="w-[1280px] flex flex-col items-start justify-start gap-[65.6px] max-w-full mq450:gap-[16px] mq750:gap-[33px]">
        <div className="w-[749px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <img
            className="w-[332px] relative max-h-full object-contain max-w-full mt-9"
            loading="lazy"
            alt=""
            src={img1}
          />
          <div className="self-stretch flex flex-row items-start justify-end max-w-full pb-20">
            <h1 className="m-0  relative text-5xl leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-base mq520:text-lg ">
              We are Creating sustainable developed society, for everyone and
              forever.
            </h1>
          </div>
        </div>
        <div className="project self-stretch grid flex-row items-start justify-start gap-[23.5px] max-w-full  sm:flex grid-cols-[repeat(3,_minmax(308px,_1fr))] text-1xl text-white">
          <Project
            image={img2}
            missionDevelopedVillages="Mission: Developed Villages"
            organizedActivitiesAndEve="Organized activities and events for developing villages at a faster pace."
          />
          <Project
            image={img3}
            missionDevelopedVillages="Weekly Workshop programs in city"
            organizedActivitiesAndEve="Conducted several workshops for making people aware of government schemes, scholarships and health"
            propGap="64px"
            propBackgroundColor="rgba(11, 7, 6, 0.8)"
            propHeight="78px"
          />
          <Project
            image={img4}
            missionDevelopedVillages="Education Awareness Program 2023"
            organizedActivitiesAndEve="Organized several education awareness programmes in almost every region of Kashi in 2023"
            propGap="64px"
            propBackgroundColor="rgba(11, 7, 6, 0.5)"
            propHeight="78px"
            onSecondaryButtonClick={onSecondaryButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
