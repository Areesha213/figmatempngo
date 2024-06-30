import TeamMember from "./TeamMember";
import PropTypes from "prop-types";
import img1 from "../assets/image-1@2x.png";
import img2 from "../assets/image-2@2x.png";
import img6 from "../assets/image-3@2x.png";
import img7 from "../assets/image-4@2x.png";
import img8 from "../assets/image-5@2x.png";
import img9 from "../assets/image-6@2x.png";
import img10 from "../assets/image-7@2x.png";
import img11 from "../assets/image-8@2x.png";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[23px] box-border max-w-full text-center text-29xl text-primary-text font-h2 ${className}`}
    >
      <div className="w-[1280px] flex flex-col items-end justify-start gap-[54px] max-w-full mq750:gap-[27px]">
        <div className="w-[1268px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[448px] flex flex-col items-center justify-center gap-[11px] max-w-full">
            <div className="flex flex-row items-center justify-center py-0 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h1 className="m-0 relative text-3xl leading-[58px] font-normal font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                Meet our team
              </h1>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[2px] border-solid border-black" />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start  min-h-[910px] text-xl mq750:gap-[2px]">
          <TeamMember
            image={img1}
            anushkaSrivastava="Anushka Srivastava"
            cofounderCEO="Cofounder, CEO"
          />
          <TeamMember
            image={img2}
            anushkaSrivastava="Arpit Singh"
            cofounderCEO="Vice Chairman"
          />
          <TeamMember
            image={img6}
            anushkaSrivastava="Poonam Singh"
            cofounderCEO="Head of Authority"
          />
          <TeamMember
            image={img7}
            anushkaSrivastava="Shalini Singh"
            cofounderCEO="Support Executive"
          />
          <TeamMember
            image={img8}
            anushkaSrivastava="Sidharth Gund"
            cofounderCEO="Project Manager"
          />
          <TeamMember
            image={img9}
            anushkaSrivastava="Ram Goel"
            cofounderCEO="Accountant, Finance"
          />
          <TeamMember
            image={img10}
            anushkaSrivastava="Dheeraj Patel"
            cofounderCEO="Logistics Head"
          />
          <TeamMember
            image={img11}
            anushkaSrivastava="Sohan Singh"
            cofounderCEO="Organizing Head"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
