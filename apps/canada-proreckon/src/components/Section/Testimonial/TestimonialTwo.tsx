'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const TestimonialTwo = () => {
    return (
        <>
            <div className="testimonial-block style-one">
                <div className="container">
                    <div className="testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 lg:my-20 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center">
                        <div className="content sm:w-2/3 w-[85%]">
                            <div className="heading3 text-center">Trusted By Professionals</div>
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                speed={400}
                                modules={[Pagination, Autoplay, Navigation]}
                                className='h-full relative lg:mt-10 mt-7'
                                autoplay={{
                                    delay: 4000,
                                }}
                            >
                                <SwiperSlide className="lg:pb-24 pb-20">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}I recently worked with ProReckon Solutions for their Accounting & Bookkeeping and Tax Services, and I couldn't be more satisfied.I highly recommend ProReckon Solutions for any business looking for comprehensive and professional financial services.{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">Bhavya Kriplani // Civonce Technologies</div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:pb-24 pb-20">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}ProReckon Solutions has been a game-changer for our business. Their Accounting & Bookkeeping services, especially Payroll Management and Bank Reconciliation, were handled with exceptional professionalism. Highly recommended for businesses looking for reliable financial support!{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">Nishipal Rana // Civonify</div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:pb-24 pb-20">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}I’m impressed by ProReckon Solutions' expertise in Tax Services. They made filing our Partnership Firm Tax Returns and C-Corporation Tax Returns simple and seamless. Their attention to detail is unmatched!{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">Deepesh Nankani // Prosperia Realty</div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialTwo