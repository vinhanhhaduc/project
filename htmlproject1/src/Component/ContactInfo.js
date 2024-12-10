import * as React from "react";

function ContactInfo({ icon, text, text1, text2, text3 }) {
  return (
    <div className="flex gap-2 font-[275] ">
      <img
        loading="lazy"
        src={icon}
        className="object-contain mb-10"
        alt=""
      />
      <div className="">
        <div className="flex-auto w-[300px] ">{text3}</div>
        <div className="flex-auto ">{text}</div>
        <div className="flex-auto">{text1}</div>
        <div className="flex-auto">{text2}</div>
      </div>
    </div>
  );
}

export default ContactInfo;