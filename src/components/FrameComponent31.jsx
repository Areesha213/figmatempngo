import Feature from "./Feature";
import PropTypes from "prop-types";
// images
import img1 from "../assets/iconlybulkedit-square.svg";
import img2 from "../assets/iconlybulkimage@2x.png";
import img3 from "../assets/iconlybulkcategory@2x.png";
import img4 from "../assets/iconlybulkdiscovery.svg";

const FrameComponent31 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-200 flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full text-left text-5xl text-primary-text font-h2 ${className}`}
    >
      <div className="flex-1 bg-ghostwhite flex flex-row items-start justify-center py-24 px-5 box-border max-w-full mq450:pt-[62px] mq450:pb-[62px] mq450:box-border">
        <div className="h-[436px] w-[1500px] relative bg-ghostwhite hidden max-w-full" />
        <div className="w-[1024px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full z-[1] mq750:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[48px] min-w-[317px] max-w-full mq750:gap-[24px]">
            <Feature
              iconlyBulkEditSquare={img1}
              eventsIn1Week="100+ Events in 1 week"
              moreThan100EventsWereCond="More than 100 events were conducted to increase the participation of people."
            />
            <Feature
              iconlyBulkEditSquare={img2}
              eventsIn1Week="300+ People joined"
              moreThan100EventsWereCond="More than 300 people enthusiastically participated in this awareness program."
              propDisplay="unset"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[48px] min-w-[317px] max-w-full mq750:gap-[24px]">
            <Feature
              iconlyBulkEditSquare={img3}
              eventsIn1Week="230+ People have donated"
              moreThan100EventsWereCond="Almost more than 230 people have donated for this initiative and helped our organisation."
              propDisplay="unset"
            />
            <Feature
              iconlyBulkEditSquare={img4}
              eventsIn1Week="Rs.7,21,000 Raised for this initiative"
              moreThan100EventsWereCond="Almost more than 7 Lakh Rupees were raised for this initiative for the smooth conduction of the program."
              propDisplay="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent31.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent31;
