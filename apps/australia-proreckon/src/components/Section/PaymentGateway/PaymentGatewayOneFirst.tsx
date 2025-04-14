'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const PaymentGatewayOneFirst = () => {
    return (
        <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative">
            <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
                <Image
                    className="w-full h-full object-cover"
                    width={2500}
                    height={2500}
                    src="/images/component/960x680.jpg"
                    alt="Payment Gateway"
                    priority // Ensures this image is loaded quickly
                    quality={70}
                />
            </div>
            <div className="container w-full lg:py-[150px] pt-14 py-16">
                <div className="w-full flex items-center lg:justify-end">
                    <div className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10">
                        <div className="heading flex items-center gap-4 max-lg:flex-wrap">
                            <div className="flex items-center">
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[3]">
                                    <Image
                                        className="full h-full rounded-full"
                                        width={300}
                                        height={300}
                                        src="/images/member/60x60.png"
                                        alt="Member 1"
                                    />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[2] -ml-3">
                                    <Image
                                        className="full h-full rounded-full"
                                        width={300}
                                        height={300}
                                        src="/images/member/avatar1.png"
                                        alt="Member 2"
                                    />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[1] -ml-3">
                                    <Image
                                        className="full h-full rounded-full"
                                        width={300}
                                        height={300}
                                        src="/images/member/avatar.png"
                                        alt="Member 3"
                                    />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[0] -ml-3">
                                    <span className="w-full h-full flex items-center justify-center bg-white rounded-full text-button">5M</span>
                                </div>
                            </div>
                            <div className="text-button text-secondary">
                                60+ Clients Served<br />10k+ Hours Delivered
                            </div>
                        </div>
                        <div className="text lg:mt-14 mt-5">
                            <h3 className="heading3">Do You Believe In Savings?</h3>
                            <div className="body3 text-secondary lg:mt-6 mt-4">
                                We understand our clients' demands and provide them with the best-tailored support possible. By outsourcing work to us, you can save between 30% and 60% of your costs and add more than 40 hours per week to your timesheet, increasing both profits and efficiency.
                            </div>
                        </div>
                        <div className="button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit">
                            <button
                                className="button-main box-shadow hover:bg-black text-white bg-blue whitespace-nowrap rounded-full"
                                onClick={() => {
                                    document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Book Consultation
                            </button>
                            <div className="relative">
                                <Link
                                    className="button-main box-shadow hover:bg-black hover:text-blue text-on-surface bg-white flex items-center gap-2 rounded-full relative z-[1]"
                                    href="tel:+18787898449"
                                >
                                    <Icon.Phone weight="fill" className="text-xl" />
                                    <span className="whitespace-nowrap">+1 878 789 8449</span>
                                </Link>
                                <Image
                                    src="/images/component/gateway1-dot.png"
                                    className="absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2"
                                    width={400}
                                    height={400}
                                    quality={60}
                                    alt="Gateway Dot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentGatewayOneFirst;
