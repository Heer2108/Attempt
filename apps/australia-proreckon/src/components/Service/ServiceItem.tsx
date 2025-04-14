import React from 'react'
import Link from "next/link"
import { ServiceType } from "@/type/ServiceType"
import { getIcon } from '@/utils/icons';

interface Props {
    data: ServiceType
    style: string
    number: number
}

const ServiceItem: React.FC<Props> = ({ data, style, number }) => {
    return (
        <>
            {style === 'style-one' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                    <Link
                        className="service-item-main h-full"
                        href={"/service/[slug]"}
                        as={`/service/${data.slug}`}
                    >
                        <div className="heading flex items-center justify-between">
                            <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
                            <div className="number heading3 text-placehover">{number + 1}</div>
                        </div>
                        <div className="heading6 hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                    </Link>
                </div>
            }

            {style === 'style-two' &&
                <div className="service-item py-7 px-6 bg-white rounded-lg border border-line box-shadow-sm hover-box-shadow">
                    <Link
                        className="service-item-main flex items-center gap-8 h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <div className="icon">
                            <i className={`${data.icon} text-blue md:text-5xl text-4xl`}></i>
                        </div>
                        <div className="infor">
                            <div className="heading7 hover:text-blue duration-300">{data.title}</div>
                            <div className="text-secondary mt-2">{data.shortDesc}</div>
                        </div>
                    </Link>
                </div>
            }

            {style === 'style-three' &&
                <div className="service-item px-8 py-10 bg-white rounded-lg">
                    <Link
                        className="service-item-main flex flex-col items-center h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-gradient md:text-6xl text-5xl`}></i>
                        <div className="heading7 text-center hover:text-gradient duration-300 mt-6">{data.title}</div>
                        <div className="caption1 text-secondary text-center mt-1.5">{data.desc}</div>
                    </Link>
                </div>
            }

            {style === 'style-four' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                    <Link
                        className="service-item-main h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-black md:text-6xl text-5xl`}></i>
                        <div className="heading7 hover:text-success duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                    </Link>
                </div>
            }

            {style === 'style-five' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                        <div className='service-item-main h-full'>
                        <div className="heading flex items-center justify-between">
                            {getIcon(data?.icon, `text-blue md:text-6xl text-5xl`)}
                            <div className="number heading3 text-placehover">{number + 1}</div>
                        </div>
                        <div className="heading7 hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                    </div>
                </div>
            }

            {style === 'style-six' &&
                <div className="service-item rounded-2xl border border-line hover-box-shadow">
                    <Link
                        className="service-item-main block h-full px-8 pb-7 md:pt-14 pt-10"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <div className="icon md:w-[100px] w-20 md:h-[100px] h-20 flex items-center justify-center rounded-2xl">
                            <i className={`${data.icon} text-white md:text-5xl text-4xl`}></i>
                        </div>
                        <div className="heading7 text-white hover:text-orange duration-300 mt-6">{data.title}</div>
                        <div className="text-placehover mt-3">{data.desc}</div>
                    </Link>
                </div>
            }

            {style === 'style-about' &&
                <div className="service-item py-8 px-7 bg-white rounded-lg hover-box-shadow">
                    <div
                        className="service-item-main flex flex-col justify-between h-full"
                    >
                        <div className="heading flex items-center gap-4">
                            <i className={`${data.icon} text-blue md:text-5xl text-4xl`}></i>
                            <div className="heading7 hover:text-blue duration-300">{data.title}</div>
                        </div>
                        <div className="text-secondary mt-4">{data.desc}</div>
                    </div>
                </div>
            }

            {style === 'style-about-two' &&
                <div className="service-item px-4 bg-white rounded-lg">
                    <Link
                        className="service-item-main flex flex-col items-center h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
                        <div className="heading7 text-center hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="caption1 text-secondary text-center mt-1.5">{data.desc}</div>
                    </Link>
                </div>
            }

            {style === 'style-about-three' &&
                <div className="service-item py-8 px-7 bg-[#f7f7ff] rounded-lg hover-box-shadow">
                    <div
                        className="service-item-main flex flex-col justify-between h-full"
                    >
                        <div className="heading flex flex-col items-center gap-4">
                            <i className={`${data.icon} text-blue md:text-5xl text-4xl`}></i>
                            <div className="heading7 text-center hover:text-blue duration-300">{data.title}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ServiceItem