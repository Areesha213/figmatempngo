import React from "react";

const Card = ({ title, content, imgSrc, link }) => {
  return (
    <a
      href={link}
      className="block p-2 rounded-lg bg-white shadow-md dark:bg-neutral-700 overflow-hidden"
    >
      <div >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg w-full" src={imgSrc} alt={title} />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </div>
        <div className="p-1">
          <h5 className="mb-2 text-start text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-start text-sm text-neutral-600 dark:text-neutral-200">
            {content}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
