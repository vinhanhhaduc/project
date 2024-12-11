import * as React from "react";

export default function NewsletterForm() {
  return (
    <form className="pl-12 mt-16 max-w-full bg-white rounded-3xl border border-solid border-neutral-300 w-[781px] max-md:pl-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
          <label htmlFor="phoneInput" className="sr-only">Enter your phone number</label>
          <input
            type="tel"
            id="phoneInput"
            className="self-stretch my-auto text-3xl font-[275] text-stone-400 max-md:mt-10"
            placeholder="Enter your phone number"
            aria-label="Enter your phone number"
          />
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <button 
            type="submit"
            className="grow px-4 py-8 w-full text-3xl font-bold text-black whitespace-nowrap bg-red-700 rounded-none max-md:mt-10"
            tabIndex="0"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}