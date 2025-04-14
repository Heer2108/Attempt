'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutTwo = () => {
  const [tabActive, setTabActive] = useState<string>('about us');

  const handleTabActive = (item: string) => {
    setTabActive(item);
  };

  return (
    <div className="about-block py-10 bg-white">
      <div className="container">
        <div className="row flex flex-col lg:flex-row lg:items-center gap-y-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/component/assessment.png"
                width={400}
                height={400}
                quality={70}
                alt="Assessment Image"
                className="w-full h-full object-cover"
                priority // Ensure quick loading of the image
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-20">
            <div className="heading3"></div>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line">
                <div 
                  className={`text-button-sm cursor-pointer capitalize ${tabActive === 'about us' ? 'active' : ''}`}
                  onClick={() => handleTabActive('about us')}
                >
                  About Us
                </div>
              </div>
              <div className={`description ${tabActive === 'about us' ? 'show' : 'hide'}`}>
                <div className="title text-secondary mt-4">
                As a comprehensive financial service provider, we offer a wide range of tailored financial solutions to businesses worldwide. Our expertise ensures that you receive the most efficient and reliable financial management, empowering your business to grow in today’s global market.
                </div>
                <div className="more-infor mt-6">
                  <div className="infor flex items-center gap-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      25+ professionals with industry-approved infrastructure.
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Proven performance and confident deliverability.
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Customised, scalable solutions for diverse business needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-block flex items-center gap-5 mt-6 pb-2">
              <Link
                className="button-main text-white bg-blue hover:bg-black text-button rounded-full"
                href="/contact"
              >
                Consult Now
              </Link>
              <Link 
                href="tel:+919924443174"
                className="button-main text-on-surface hover:bg-black bg-white text-button rounded-full border-2 border-blue flex items-center gap-2"
              >
                <i className="ph ph-phone text-xl"></i>
                <span>+91 99244-43174</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;

