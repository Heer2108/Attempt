import React from "react";
import SingleIconHeader from "@/components/Header/menu-copy/SingleIconHeader";
import ContactRow from "@/components/Section/Service/ContactRow";
import SliderOnecopy from "@/components/Slider/SliderOnecopy";

const ConsultWithGemPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
      <SingleIconHeader url="https://proreckonsolutions.com" />
      </header>
      <SliderOnecopy />
      <ContactRow title="Explore Proreckon" data={exploreProreckon} />
    </div>
  );
};

export default ConsultWithGemPage;

const exploreProreckon = [
  {
    "slug": "business-financing-growth",
    "icon": "phone-call",
    "category": "payment solution",
    "title": "Call",
    "url": "tel:+919998943174",
    "desc": "",
    "shortDesc": "Get personalized financial advice to help reach your financial goals."
},
{
  "slug": "personal-financial-solutions",
  "icon": "whatsapp",
  "category": "payment solution",
  "title": "Whatsapp",
  "url": "https://wa.me/919998943174",
  "desc": "",
  "shortDesc": "Get personalized financial advice to help reach your financial goals."
},


  {
      "slug": "business-financing-growth",
      "icon": "instagram-logo",
      "category": "payment solution",
      "title": "Instagram",
      "url": "https://www.instagram.com/proreckon",
      "desc": "",
      "shortDesc": "Get personalized financial advice to help reach your financial goals."
  },
  {
      "slug": "financial-advisory-support",
      "icon": "linkedin-logo",
      "category": "payment solution",
      "title": "Linkedin",
      "url": "https://www.linkedin.com/company/proreckon-solutions",
      "desc": "",
      "shortDesc": "Get personalized financial advice to help reach your financial goals."
  },
 
  {
      "slug": "personal-financial-solutions",
      "icon": "planet",
      "category": "payment solution",
      "title": "Website",
      "url": "https://proreckonsolutions.com",
      "desc": "",
      "shortDesc": "Get personalized financial advice to help reach your financial goals."
  }
]
