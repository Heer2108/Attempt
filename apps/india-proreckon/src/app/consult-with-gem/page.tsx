import React from "react";
import SingleIconHeader from "@/components/Header/menu-copy/SingleIconHeader";
import ContactRow from "@/components/Section/Service/ContactRow";
import SliderOnecopy from "@/components/Slider/SliderOnecopy";

const ConsultWithGemPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <SingleIconHeader url="https://proreckonsolutions.in" />
      </header>
      <SliderOnecopy />
      <ContactRow title="Consult With Gem" data={consultWithGem} />
    </div>
  );
};

export default ConsultWithGemPage;

const consultWithGem = [


  {
    "slug": "business-financing-growth",
    "icon": "phone-call",
    "category": "payment solution",
    "title": "Call",
    "url": "tel:+919924443174",
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
        "icon": "whatsapp",
        "category": "payment solution",
        "title": "Whatsapp",
        "url": "https://wa.me/919924443174",
        "desc": "",
        "shortDesc": "Get personalized financial advice to help reach your financial goals."
    },
    {
        "slug": "personal-financial-solutions",
        "icon": "planet",
        "category": "payment solution",
        "title": "Website",
        "url": "https://proreckonsolutions.in",
        "desc": "",
        "shortDesc": "Get personalized financial advice to help reach your financial goals."
    }
]
