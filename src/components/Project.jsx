import { useMemo } from "react";
import PropTypes from "prop-types";

const Project = ({
  className = "",
  image,
  missionDevelopedVillages,
  organizedActivitiesAndEve,
  propGap,
  propBackgroundColor,
  propHeight,
  onSecondaryButtonClick,
}) => {
  const projectStyle = useMemo(() => {
    return {
      gap: propGap,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }, [propGap, image]);

  const tintStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const organizedActivitiesAndStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`rounded-xl flex flex-col items-start justify-start pt-20 px-12 pb-12 box-border relative gap-[90px] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-9xl text-white font-h2 mq450:gap-[45px] mq450:pt-[52px] mq450:px-5 mq450:pb-[31px] mq450:box-border ${className}`}
      style={projectStyle}
    >
      <div
        className="w-full h-full absolute top-0 right-0 bottom-0 left-0 rounded-xl bg-gray-800 opacity-70 z-[1]"
        style={tintStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] z-[2]">
        <h2 className="m-0 self-stretch h-[84px] relative text-3xl font-bold mq1125:text-xl">
          {missionDevelopedVillages}
        </h2>
        <div
          className="self-stretch h-[52px] relative text-base leading-[160%] inline-block mq1125:leading-tight "
          style={organizedActivitiesAndStyle}
        >
          {organizedActivitiesAndEve}
        </div>
      </div>
      <button
        className="cursor-pointer border-none py-4 px-8 bg-white backdrop-filter-blur(80px) rounded flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-gainsboro"
        onClick={onSecondaryButtonClick}
      >
        <div className="relative text-base font-medium font-h2 text-black text-right">
          See more
        </div>
      </button>
    </div>
  );
};

Project.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  missionDevelopedVillages: PropTypes.string,
  organizedActivitiesAndEve: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onSecondaryButtonClick: PropTypes.func,
};

export default Project;
