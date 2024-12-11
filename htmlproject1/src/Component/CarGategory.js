import * as React from "react";

export default function CarCategory({ title, description, buttonText, imageSrc }) {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-28 bg-zinc-800 bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} category background`}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center mb-0 max-w-full w-[409px] max-md:mb-2.5">
        <div className="text-4xl text-center text-white">{title}</div>
        <div className="self-stretch mt-12 text-3xl text-center text-white max-md:mt-10">
          {description}
        </div>
        <button 
          className="px-10 py-10 mt-32 max-w-full text-4xl font-bold text-white bg-red-700 rounded-[58px] w-[319px] max-md:px-5 max-md:mt-10"
          tabIndex="0"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}