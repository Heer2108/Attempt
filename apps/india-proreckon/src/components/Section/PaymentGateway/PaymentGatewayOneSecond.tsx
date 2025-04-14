'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const PaymentGatewayOneSecond = () => {
    return (
        <section className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="content flex items-center gap-8">
                    <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
                        <h3 className="heading3">Why Choose Us?</h3>
                        <div className="body2 text-secondary">
                        ProReckon Solutions India offers tailored financial solutions, ensuring efficient and reliable management to help your business thrive in today’s global market.

                        </div>
                        <div className="list-service">
                            <div className="service-item flex items-center">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Expert Consulting: Friendly, efficient, and always pleasant.</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Trusted Services: Reputation for excellence.</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Vast Experience: Decades of expertise at your service.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 xl:w-7/12">
                        <div className="right pl-10">
                            <div className="bg-img">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full"
                                    src="/images/component/gateway2-bg.png"
                                    alt="Gateway Background"
                                    quality={65}
                                    priority // Ensures this image is loaded quickly
                                />
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <i className="icon-list text-2xl bg-orange p-4 rounded-2xl"> </i>
                                <div className="text">
                                    <div className="heading7">120+</div>
                                    <div className="heading7 text-secondary">Projects</div>
                                </div>
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <Icon.Star weight="fill" className="text-yellow text-3xl" />
                                <div className="text">
                                    <div className="heading7">5</div>
                                    <div className="heading7 text-secondary">Satisfaction</div>
                                </div>
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <i className="icon-user text-2xl bg-orange py-4 px-5 rounded-2xl"> </i>
                                <div className="text">
                                    <div className="heading7">10+ Years Experience Combined</div>
                                    <div className="heading7 text-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentGatewayOneSecond;
