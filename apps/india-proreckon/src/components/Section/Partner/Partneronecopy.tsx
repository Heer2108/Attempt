'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    classname?: string
}

const PartnerOne: React.FC<Props> = ({ classname }) => {
    return (
        <>
            <div className={`brand-block py-9 ${classname}`}>
                <div className="container">
                    <div className="list-brand">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            
                           
                        
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/partner/20.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            
                        




                     





                        



                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/partner/23.webp'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>







                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerOne