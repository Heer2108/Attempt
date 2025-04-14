'use client'; // Add this line to make it a Client Component

import Image from "next/image";
const SliderOne = () => {
    return (
        <div className="slider-block style-one">
            <div className="slider-main">
                <div className='h-full relative'>
                    <div className="slider-item slider-third">
                        <div className="bg-img">
                            <Image
                                src={'/images/slider/slider3.jpg'}
                                width={2000}
                                height={1500}
                                alt="bgslider"
                                priority={true}
                                quality={65}
                                className="w-full h-full object-fill object-top"
                            />
                        </div>
                        <div className="container">
                            <div className="text-content flex-columns-between">
                                <div className="heading2">
                                    <span className="block">ProReckon Solutions</span>
                                    <span className="block">Your Trusted</span>
                                    <span className="text-blue block">Financial Partner!</span>
                                </div>
                                <div className="hidden md:!inline-block w-[45%] body2 mt-3 text-secondary">
                                    Why get tangled in spreadsheets when you can grow your business? 
                                    Let ProReckon handle your financial, advisory, and business growth needs with precision and expertise.
                                </div>
                                <div className="text-[12px] md:hidden w-[60%] body2 mt-3 text-secondary">
                                    Why get tangled in spreadsheets when you can grow your business? <br />Let ProReckon handle your financial, advisory, and business growth needs with precision and expertise. 
                                </div>
                                <div className="button-block md:mt-10 mt-6">
                                    {/* <button
                                        className="button-main bg-blue text-white"
                                        onClick={() => {
                                            document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Book Consultation
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderOne;
