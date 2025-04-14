"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { countryName, getCountryCode, getServicesBasedOnCountries } from "@/utils";
import { getIcon } from "@/utils/icons";
import axios from 'axios';


const FaqsOne = () => {
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
      console.log('Form Data ', {
        name: name.current.value,
        mobileNo: mobileNo.current.value,
        email: email.current.value,
        service: service.current.value,
        message: message.current.value,
        formType: 'CONTACT',
        country: countryName
      });
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
    <section className="faqs-block style-one lg:mt-[100px] sm:mt-16 mt-10">
      <div className="flex max-xl:flex-wrap main">
        <div className="w-full xl:w-1/2 h-full">
          <div className="bg-img w-full">
            <Image
              width={2500}
              height={2500}
              quality={60}
              src="/images/component/960x644.jpg"
              alt="img"
              className="w-full"
              priority
            />
          </div>
          <div className="desc bg-blue flex items-center justify-center">
            <div className="content flex gap-8">
              <i className="icon-hand-team text-white flex-shrink-0"></i>
              <div className=" flex flex-col">
                <h5 className="heading5 text-white">FREE FIRST CONSULTATION<sup>*</sup></h5>
                {/* <h6 className="heading6 text-white">
                  Get in touch with us & we’ll assist you
                </h6> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface xl:w-1/2 pt-6 px-12 xl:px-20" id="interest-form">
          <div className="form-block flex flex-col justify-between gap-5">
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
             {countryName ? <div className="col-span-2">
                {getServicesBasedOnCountries(countryName, service)}
                <i className="ph ph-caret-down"></i>
              </div> : <></>}
              <div className="col-span-2">
                <input
                  className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                  type="text"
                  placeholder="Name"
                  required
                  ref={name}
                />
              </div>
              <div className="col-span-2 flex gap-2">
                {countryName ? <span className="bg-white text-secondary caption1 px-4 py-3 rounded-lg min-w-[3rem]">
                  {getCountryCode(countryName)}
                </span>: <></>}
                <input
                  className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg"
                  type="number"
                  placeholder="Phone Number"
                  required
                  ref={mobileNo}
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
                  rows={4}
                  placeholder="Your Message"
                  required
                  ref={message}
                ></textarea>
              </div>
            </div>
            <div className="button-block">
              <button className="button-main hover:border-blue bg-blue text-white text-button rounded-full" disabled={loading} onClick={handleSubmit}>
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
    </section>
  );
};
export default FaqsOne;
