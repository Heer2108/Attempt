"use client"
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { countryName, getCountryCode, getServicesBasedOnCountries } from "@/utils";
import React, { useRef, useState } from "react";
import axios from 'axios';

import DocumentSubmission from "@/components/DocumentSubmission/DocumentSubmission";
import { getIcon } from "@/utils/icons";
import WhatsAppFloating from "@/components/Footer/WhatsAppFloatingBtn";

export default function ContactStyleOne() {
    const name = useRef<any>(null);
    const email = useRef<any>(null);
    const mobileNo = useRef<any>(null);
    const service = useRef<any>(null);
    const message = useRef<any>(null);

    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleSubmit = async (event: any) => {
        try {
            event.preventDefault();
            setLoading(true);
            const res = await axios.post("/.netlify/functions/submitForm", {
                name: name.current.value,
                mobileNo: mobileNo.current.value,
                email: email.current.value,
                service: service.current.value,
                message: message.current.value,
                formType: 'CONTACT',
                country: countryName
            });
            const response = await res.data;
            setResponse(response);
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            setResponse('An unexpected Error Occurred');
      }
    };

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Contact us"
            img="/images/banner/about2.jpg"
            title="Contact us"
            desc="Explore our Contact Us page for prompt assistance from our dedicated team."
          />
          <div className="form-contact style-one pt-6 pb-8">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col max-xl:gap-y-8">
                <div className="w-full xl:w-2/5 h-full">
                  <div className="infor bg-blue rounded-xl p-10 h-full">
                    <div className="heading5 text-white">Get it touch</div>
                    <div className="body3 text-white mt-2">
                      We will get back to you within 24 hours, or feel free to
                      call us.
                    </div>
                    <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61565876035377"
                        target="_blank"
                      >
                        <i className="icon-facebook text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.linkedin.com/company/proreckon-solutions/"
                        target="_blank"
                      >
                        <i className="icon-in text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://x.com/proreckon"
                        target="_blank"
                      >
                        <i className="icon-twitter text-sm text-black ml-1"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.instagram.com/proreckon"
                        target="_blank"
                      >
                        <i className="icon-insta text-sm text-black"></i>
                      </a>
                    </div>
                    <div className="list-more-infor md:mt-10 mt-6">
                      <div className="item flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Clock
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          10AM - 7PM, Mon - Sat
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Phone
                            weight="fill"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          <a href="tel:+919924443174">(+91) 99244 43174</a>
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.EnvelopeSimple
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          <a href="mailto:info@proreckonsolutions.in">
                            info@proreckonsolutions.in
                          </a>
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.MapPin
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button !text-[15px] normal-case text-white">
                          406, 3rd Eye Three, CG Road, Ahmedabad - 380009
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full xl:w-3/5 xl:pl-20">
                  <div className="form-block flex flex-col justify-between gap-5" >
                    <div className="heading">
                      <div className="heading5">{`Get in touch with us & we’ll assist you`}</div>
                      {/* <div className="body3 text-secondary mt-2">
                We will get back to you within 24 hours, or call us everyday
              </div> */}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* <div className="col-span-2">
                <select
                  className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
                  name="form"
                  defaultValue={"Select Country"}
                  onChange={(e) => {
                    console.log("Country Selected:", e.target.value);
                    e.target.value === "default"
                      ? setCountry(null)
                      : setCountry(e.target.value as COUNTRIES);
                  }}
                >
                  <option value={"default"}>Select Country</option>
                  <option value={COUNTRIES.AUSTRALIA}>Australia</option>
                  <option value={COUNTRIES.CANADA}>Canada</option>
                  <option value={COUNTRIES.USA}>USA</option>
                </select>
                <i className="ph ph-caret-down"></i>
              </div> */}
                      {countryName ? (
                        <div className="col-span-2">
                          {getServicesBasedOnCountries(countryName, service)}
                          <i className="ph ph-caret-down"></i>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-span-2">
                        <input
                          className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          ref={name}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-span-2 flex gap-2">
                        {countryName ? (
                          <span className="bg-white text-secondary caption1 px-4 py-3 rounded-lg min-w-[3rem]">
                            {getCountryCode(countryName)}
                          </span>
                        ) : (
                          <></>
                        )}
                        <input
                          className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                          type="number"
                          placeholder="Phone Number"
                          ref={mobileNo}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Email"
                          required
                          ref={email}
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <textarea
                          className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                          name="message"
                          rows={3}
                          ref={message}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="button-block">
                      <button
                        className="button-main hover:border-blue bg-blue text-white text-button rounded-full"
                        disabled={loading}
                        onClick={handleSubmit}
                      >
                        Submit request
                      </button>
                    </div>
                    {response && (
                      <div
                        className="px-2 py-2 mt-5 bg-blue flex text-center text-white"
                        style={{
                          borderRadius: "5px",
                          justifyContent: "space-between",
                        }}
                      >
                        {
                          <>
                            <span className="sub-title">{response}</span>{" "}
                            <span
                              className=""
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setResponse(null);
                              }}
                            >
                              {getIcon('x-circle', 'text-xl h-full margin-auto')}
                            </span>
                          </>
                        }
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DocumentSubmission />
          <iframe
            className="h-[500px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7344.039213785116!2d72.5563843!3d23.0230523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fad163b0c1%3A0x7bc02dd78e47dbf0!2s3rd%20Eye!5e0!3m2!1sen!2sin!4v1726315146985!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
          {/* <CtaOne /> */}
          <WhatsAppFloating />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
