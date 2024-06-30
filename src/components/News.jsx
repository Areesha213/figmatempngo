import React from "react";
import CardGallery from "./CardGallery";

function News() {
  return (
    <div>
      <div className="w-fit  flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-right text-lg">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[35px] max-w-full">
          <div className="relative font-normal text-3xl z-[1] text-black">
            Read Our News
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[14.1px] pb-0 pr-[9px] pl-0 box-border min-w-[567px] max-w-full mq750:min-w-full">
            <div className="self-stretch h-[3px] p-4 m-2 relative [backdrop-filter:blur(30px)] box-border z-[1] border-t-[4px] border-solid border-border border-gray-300" />
          </div>

          <main>
            <div className="p-4 ">
              <CardGallery />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default News;
