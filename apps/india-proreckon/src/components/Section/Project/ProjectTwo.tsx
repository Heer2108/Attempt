'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const ProjectTwo = () => {
    return (
        <div className="our-project-block lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading3 text-center">Whom We Cater To?</div>
            </div>
            <div className="list-project md:mt-10 mt-7">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    speed={400}
                    modules={[Pagination, Autoplay]}
                    className='h-full relative'
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 12,
                        },
                    }}
                >
                    {[
                        { src: "/images/component/healthcare.jpg", title: "Health Care" },
                        { src: "/images/component/hospitality.jpg", title: "Hospitality" },
                        { src: "/images/component/restaurants.jpg", title: "Restaurants" },
                        { src: "/images/component/construction.jpg", title: "Construction" },
                        { src: "/images/component/real-estate.jpg", title: "Real Estate" },
                        { src: "/images/component/distribution.jpg", title: "Distribution" },
                        { src: "/images/component/smallbusinesses.jpg", title: "Small Businesses" },
                        { src: "/images/component/law-firms.jpg", title: "Law Firms" },
                        { src: "/images/component/saas-startups.jpg", title: "SaaS Startups" }
                    ].map((industry, index) => (
                        <SwiperSlide key={index}>
                            <div className="item">
                                <div className="bg-img overflow-hidden">
                                    <Image
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        src={industry.src}
                                        alt={industry.title}
                                        quality={60}
                                        loading={index > 2 ? "lazy" : "eager"}
                                    />
                                </div>
                                <div className="text">
                                    <div className="heading5 text-white">{industry.title}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default ProjectTwo;
