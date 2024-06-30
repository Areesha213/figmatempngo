import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch m-14 flex flex-row items-start justify-center pt-0 px-5 pb-24 box-border max-w-full text-left text-xs text-gray-400 font-h2 mq750:pb-[62px] mq750:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-start justify-start gap-[31.5px] max-w-full mq450:gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[239px] max-w-full mq450:gap-[15px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="relative text-black leading-[160%] inline-block min-w-[60px] text-lg ">
                First Name
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  className="w-[34px] [border:none] [outline:none] font-h2 text-base bg-[transparent] h-[26px] relative leading-[160%] text-primary-text text-left inline-block p-0"
                  placeholder="Arpit"
                  type="text"
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-border" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="relative text-black leading-[160%] inline-block min-w-[44px] text-lg ">
                Email Id
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  className="w-[197px] [border:none] [outline:none] font-h2 text-base bg-[transparent] h-[26px] relative leading-[160%] text-primary-text text-left inline-block whitespace-nowrap p-0"
                  placeholder="arpitsingh1132@gmail.com"
                  type="text"
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-border" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[239px] max-w-full mq450:gap-[15px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="relative text-black leading-[160%] inline-block min-w-[58px] text-lg ">
                Last Name
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  className="w-[41px] [border:none] [outline:none] font-h2 text-base bg-[transparent] h-[26px] relative leading-[160%] text-primary-text text-left inline-block p-0"
                  placeholder="Singh"
                  type="text"
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-border" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
              <b className="relative text-black leading-[160%] inline-block min-w-[41px] text-lg ">
                Subject
              </b>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-border" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <b className="relative text-black text-lg leading-[160%] inline-block min-w-[50px]">
            Message
          </b>
          <textarea
            className="bg-[transparent] h-[157px] w-auto [outline:none] self-stretch rounded box-border flex flex-row items-start justify-start p-5 font-h2 text-base text-gray-500 z-[1] border-[1px] border-solid border-border"
            placeholder="Type your Messege"
            rows={8}
            cols={38}
          />
        </div>
        <div className="w-[748px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <button className="cursor-pointer [border:none] py-4 px-8 bg-blueviolet [backdrop-filter:blur(80px)] rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkorchid">
            <div className="relative text-lg rounded p-3 font-medium font-h2 text-white text-right inline-block min-w-[106px] bg-purple-600">
              Send message
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
