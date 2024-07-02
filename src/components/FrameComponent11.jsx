import PropTypes from "prop-types";

//images 
import img1 from "../assets/image4@2x.png"

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={` m-11 flex flex-row items-start justify-center pt-0 px-5 pb-24 box-border max-w-full text-left text-29xl text-primary-text font-h2 mq1050:pb-[62px] mq1050:box-border mq750:pb-10 mq750:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
        <h1 className="m-0 relative text-4xl leading-[58px] font-normal font-inherit inline-block min-w-[128px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          About
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[27px] text-base text-secondary-text">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch relative leading-[160%]">
              <p className="m-0">
                If the role you intend to assume is that of facilitator rather
                than authority figure, you'll want to make the space as
                welcoming and informal as possible. Sometimes that simply can't
                be done; a school classroom with desks bolted to the floor (yes,
                they still exist, although there aren't many of them) isn't
                particularly flexible, for instance. But where you can,
                arranging chairs in a circle or similar configuration, where
                everyone can see everyone else and there's no head of the table,
                can do a lot to set a tone as soon as people walk in.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Don't forget about food, coffee, etc., if you're providing them
                or having them provided. You either need to arrange beforehand
                to have what you need in the room when you get there, or your
                coffeemaker, coffee, creamer, paper cups, etc. should be in your
                back seat along with everything else the night before. (Get the
                doughnuts fresh in the morning.
              </p>
            </div>
            <img
              className="self-stretch h-[339px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src={img1}
            />
          </div>
          <div className="self-stretch relative leading-[160%]">
            There may be circumstances under which you might not want to make
            people comfortable. At a conference, a workshop called "Separate
            Tables" divided participants up as they came in, with the majority
            asked to sit on the floor. A small number were seated at an
            elegantly appointed table and served an appetizing meal. The others
            about 20? were given a loaf of bread and told to divide it up.
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
