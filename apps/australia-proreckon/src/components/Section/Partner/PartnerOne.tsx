
'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Only Autoplay is used
import 'swiper/css/bundle';

interface Props {
    classname: string
}

const PartnerOne: React.FC<Props> = ({ classname }) => {
    return (
        <div className={`brand-block py-9 ${classname}`}>
            <div className="container">
                <div className="list-brand">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            500: { slidesPerView: 3, spaceBetween: 16 },
                            680: { slidesPerView: 3, spaceBetween: 16 },
                            992: { slidesPerView: 4, spaceBetween: 16 },
                            1200: { slidesPerView: 5, spaceBetween: 16 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-4.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 1'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-9.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 2'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-7.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 3'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-8.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 4'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-13.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 5'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-14.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 6'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-16.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 7'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-18.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 8'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-item flex items-center justify-center">
                                <Image
                                    src={'/images/partner/203x44-19.webp'}
                                    width={300}
                                    height={300}
                                    alt='Partner Logo 9'
                                    className='h-full w-auto object-cover'
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PartnerOne
