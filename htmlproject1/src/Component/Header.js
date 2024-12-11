import * as React from "react";

export default function Header() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Newcar", link: "/newcar" },
    { label: "Brands", link: "/brands" },
    { label: "Used", link: "/used" },
    { label: "Offer", link: "/offer" }
  ];

  const rightNavItems = [
    { label: "Contact", link: "/contact" },
    { label: "FAQ", link: "/faq" }
  ];

  return (
    <nav className="flex z-10 flex-wrap gap-5 justify-between items-start self-stretch px-14 w-full text-4xl text-white whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-start self-start max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63f8b918ba2310419d769e3f86584498c44487bdcf76c8a6989e9bcaedba45b?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
          alt="CarBreezy Logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[1.57] w-[250px]"
        />
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link}
            className="mt-9 basis-auto"
            tabIndex="0"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex gap-10 my-auto">
        {rightNavItems.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            className="basis-auto"
            tabIndex="0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}