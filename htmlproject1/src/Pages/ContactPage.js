import * as React from "react";
import FormInput from "../Module/FormInput";
import ContactInfo from "../Component/ContactInfo";
import NavigationLink from "../Component/NavigationLink";
import Footer from "../Module/Footer";

const navLinks = [
  { text: "Home", className: "self-start my-auto max-md:mt-10" },
  { text: "Newcar", className: "self-start my-auto max-md:mt-10" },
  { text: "Brands", className: "my-auto" },
  { text: "Used", className: "my-auto" },
  { text: "Offer", className: "my-auto" },
  { text: "Contact", className: "my-auto" },
  { text: "FAQ", className: "my-auto" }
];

function ContactPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <header className="flex z-10 flex-wrap gap-5 justify-between items-start px-14 w-full text-4xl text-white whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 self-start max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15649413f133b22ab41ca6f2f2d5993c93a7300c7897c77db34025565d736ccd?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
            className="object-contain shrink-0 max-w-full aspect-[1.5] w-[200px] pt-7"
            alt="Company Logo"
          />
          {navLinks.slice(0, 5).map((link, index) => (
            <NavigationLink key={index} {...link} />
          ))}
        </div>
        <div className="flex gap-10 my-auto">
          {navLinks.slice(5).map((link, index) => (
            <NavigationLink key={index + 5} {...link} />
          ))}
        </div>
      </header>

      <div className="flex flex-col mt-0 w-full text-8xl font-black text-center text-white bg-black max-md:max-w-full max-md:text-4xl">
        <div className="flex relative flex-col w-full min-h-[783px] max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e15c77ac4d7046d01b17c9d48a5f6aaabd1af74dd30be652b7715e535ede5fcd?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
            className="object-cover absolute inset-0 size-full"
            alt="Contact Banner"
          />
          <div className="overflow-hidden relative px-16 pt-80 pb-60 w-full bg-black bg-opacity-70 max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
            CONTACT US
          </div>
        </div>
      </div>

      <main className="flex flex-col self-center mt-16 w-full max-w-[1630px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-20 w-full text-8xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="flex gap-6 text-3xl text-rose-700 ml-11">
                  <div className="shrink-0 my-auto h-0.5 border-2 border-rose-700 border-solid w-[74px]" />
                  <div className="basis-auto">KEEP CLOSE</div>
                </div>
                <div className="ml-11 mt-1 max-md:text-4xl">About Us</div>
                <div className="self-stretch mt-10 text-base font-[275] text-neutral-500 max-md:max-w-full ml-11">
                  <span className="text-red-700">CarBreezy</span> is a leading
                  automotive digital marketplace that seeks to make car buying
                  and selling easy, transparent and efficient.
                  <br />
                  Your car buying destiny is in your hands, but we will help you
                  every step of the way. We built this site to make car buying
                  as fast and easy as possible.
                  <br />
                  <br />
                  <span className="text-red-700">CarBreezy</span> has built a
                  trusted brand and a strong reputation for providing consumers
                  with useful tools, research, market context and pricing
                  transparency as they embark on their car-buying journey. The
                  Company is bringing more of the purchasing process online by
                  <br />
                  allowing consumers to find a vehicle that is right for them
                  and complete their purchase with all from the comfort of their
                  home.
                </div>
                <div className="mt-[200px] max-md:mt-10 max-md:max-w-full max-md:text-2xl ml-11">
                  Get In Touch
                </div>
              </div>
            </section>

            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full mt-[60px]">
              <form className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                <h2 className="text-6xl font-bold text-black max-md:max-w-full max-md:text-4xl">
                  Your Details
                </h2>
                <p className="z-10 mt-0 text-2xl font-[275] text-neutral-500 max-md:max-w-full">
                  Let us know how to get back to you
                </p>
                
                <div className="self-stretch mt-[64px] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <FormInput label="NAME" required />
                    <FormInput label="EMAIL ADDRESS" type="email" required />
                  </div>
                </div>
                <label htmlFor="comments" className="mt-5 text-xl font-medium text-black max-md:mt-10">
                  SUBJECT*
                </label>
                <textarea
                  id="comments"
                  required
                  className="flex shrink-0 self-stretch mt-1.5 bg-gray-200 rounded-xl h-[45px] w-full max-md:max-w-full w-[680px]"
                  aria-label="Comments or Questions"
                />
                
                <label htmlFor="comments" className="mt-5 text-xl font-medium text-black max-md:mt-10">
                  COMMENTS / QUESTIONS *
                </label>
                <textarea
                  id="comments"
                  required
                  className="flex shrink-0 self-stretch mt-1.5 bg-gray-200 rounded-xl h-[195px] w-full max-md:max-w-full w-[680px]"
                  aria-label="Comments or Questions"
                />

                <button type="submit" className="px-16 py-5 mt-14 w-[100] text-3xl font-bold text-white whitespace-nowrap bg-red-700 rounded-xl max-md:px-5 max-md:mt-10">
                  SEND
                </button>
              </form>
            </section>
          </div>
        </div>

        <div className="mt-[100px] max-w-full w-[1145px] max-md:mt-10 ml-11">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <div className=" w-full text-lg text-neutral-500 max-md:mt-10 items-center">
                      <ContactInfo
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e196428e398faad765ac947bc20c8e23e3c7dc5e80f7242d38187e892570f298?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
                        text3="590 Cach Mang Thang 8 Street, District 3, Ho Chi Minh, VietNam"
                      />
                      </div>
                      <div className="text-lg text-neutral-500 items-center">
                        <ContactInfo
                          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/09a4137f-d886-4c70-b24d-2407bbbf3dc9?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
                          text2="carbreezyCar@gmail.com"
                        />
                      </div>
                      
                    
                  </div>
                  <div className="flex flex-col ml-2 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full text-lg text-neutral-500 max-md:mt-10">
                      <div className="flex flex-col items-start pl-[52px] max-md:pl-5 pb-5">
                        <div>(+84) 825 355 355</div>
                        <div>(+84) 825 355 345</div>
                      </div>
                      <ContactInfo
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/da5f44d0e80015dbff9aab3356f64b1788cc3d2f3dd5ced47b14f081f14bb883?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
                        text="Open: 8:00 am BKK"
                        text1="Close: 6:00 pm BKK"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-start px-20 pb-6 mt-96 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default ContactPage;