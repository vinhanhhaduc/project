import React from 'react';
import { SocialIcon } from '../Component/SocialIcon';
import { ContactItem } from '../Component/ContactItem';

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92b34148b9b2dcd43de268a071df28e370bb507522eebfc6a752e1190278eff7?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905", alt: "Social media icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/393adc8af7b7eb5dfd4b05560be0e14810d345f33d796d19f130760ec490580e?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905", alt: "Social media icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cae132550700a889227e559a7bc8321535130d08a3fd7f177d7b3695a36de8b1?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905", alt: "Social media icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/28c21d03a4ca54ce910ad6e0f6bbb5e96c68233e4c2dfd5ca8cca10baefeebc3?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905", alt: "Social media icon" }
];

export default function Footer2() {
  return (
    <div className="pl-[350px] items-center">
      <div className="flex flex-wrap gap-2 justify-between text-3xl  max-md:max-w-full max-md:text-4xl">
        <div className="flex gap-2 font-extrabold text-rose-700 whitespace-nowrap max-md:text-4xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/663c07074e56e15b5eb9ceaf9ee9f41faf3e821406a6dbdecf525e3415c41729?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
            alt="CarBreezy logo"
            className="object-contain shrink-0 aspect-[0.53] w-[79px]"
          />
          <div className="my-auto basis-auto max-md:text-4xl">CarBreezy</div>
        </div>
        <div className="flex flex-wrap gap-10 self-start mt-5 font-medium text-black max-md:max-w-full max-md:text-4xl">
          <div className="max-md:text-4xl mr-[250px] text-4xl font-bold mt-10">Page</div>
          <div className="self-start max-md:text-3xl text-4xl font-bold mt-10 mr-[490px]">Contact Us </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="text-3xl text-zinc-800 text-opacity-80 max-md:max-w-full w-[500px]">
            With the motto of bringing customers more value and simplifying the
            car buying process.
          </div>
          <div className="flex gap-7 self-start mt-20 max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-3xl text-center whitespace-nowrap text-zinc-800 mr-[200px]">
          <ContactItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/069b489ccfa8a3b0fe2f1c94fe448783f2209264690aff66f2fac42e1a13b2cf?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905">
            <div className=''>Search</div>
            <div className="self-start mt-12 max-md:mt-10">FAQ</div>
          </ContactItem>
          <div className="flex gap-3 self-start mt-12 max-md:mt-10 ml-[110px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d9c4710a443ecfab138442323ee4b47f1463d7aadc06d57afbd1696c29bf1f?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
              alt=""
              className="object-contain shrink-0 aspect-square"
            />
            <div className="mt-1">About</div>
          </div>
        </div>
        <div className="flex flex-col mr-[320px] text-2xl text-center">
          <div className="flex flex-wrap text-2xl mr-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd131512410f395cf24bc162ab33b4d51ca33a235875267f95b8a0d24c9fd8ca?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
              alt=""
              className=" "
            />
            <div className="flex-auto my-auto w-[285px]">
              carbreezyCar@gmail.com
            </div>
          </div>
          <div className="flex gap-1 self-start mt-12 text-white max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c417e1f75a91b9091438fb5c619a0acad334c4b2e8ad773d4bf84462933f0da1?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
              alt=""
              className="object-contain shrink-0 aspect-square w-[50px]"
            />
            <div className="flex-auto my-auto">
              <span className="text-zinc-800">Hotline: tel:0825355355</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-end mt-11 max-w-full h-px border border-white border-solid w-[1683px] max-md:mt-10" />
    </div>
  );
}