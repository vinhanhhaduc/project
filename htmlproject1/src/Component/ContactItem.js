import React from 'react';

export const ContactItem = ({ icon, children }) => (
  <div className="flex gap-7 items-start">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 aspect-square w-[50px] ml-[100px]"
    />
    <div className="flex flex-col mt-2">
      {children}
    </div>
  </div>
);