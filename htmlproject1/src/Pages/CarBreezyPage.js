import * as React from "react";
import CarCategory from "../Component/CarGategory";
import NewsletterForm from "../Component/NewsletterForm";
import Footer from "../Module/Footer";
import Header from "../Component/Header";
import Footer2 from "../Module/Footer2";

export default function CarBreezyPage() {
  const carCategories = [
    {
      title: "Sedans",
      description: "Explore our wide selection of sedans that combine style, comfort, and efficiency for everyday driving.",
      buttonText: "View Sedans",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/82c68b58516d5d01939d6116232fbb0531345ec5dbeb2cd65d87fbd929d5f844?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
    },
    {
      title: "SUVs",
      description: "Discover the versatility of our SUVs, perfect for families and adventurous spirits alike.",
      buttonText: "Explore SUVs",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1502ab9de993e8ed530fbf28f70b5785b8fe3a2292bca9008eb9343bfa1e5022?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
    },
    {
      title: "Trucks",
      description: "Discover the versatility of our SUVs, perfect for families and adventurous spirits alike.",
      buttonText: "Check Trucks",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/56b08b1580051e95623d3046c29cbbfccfdb351be4f3896df6b757a154dd3f6a?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
    },
    {
      title: "Electric Vehicles",
      description: "Join the green revolution with our collection of electric vehicles that offer sustainability and performance.",
      buttonText: "See Electric Vehicles",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f98c8196d01346ab0ef534cb92e0b955b6d8c0220f0d6b24615898d5aaff01c0?placeholderIfAbsent=true&apiKey=25238632ae2142cb926c4d10b0310905"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <Header />
      {/* Rest of the existing JSX structure remains identical */}
      <div className="w-full">
        {carCategories.map((category, index) => (
          <CarCategory
            key={index}
            title={category.title}
            description={category.description}
            buttonText={category.buttonText}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
      <div className="newsletter-section">
        <NewsletterForm />
      </div>
      <Footer2 />
    </div>
  );
}