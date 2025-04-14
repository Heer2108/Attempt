import Link from "next/link"
import Image from "next/image";


const CaseStudyOne = () => {
    return (
        <>
            <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
                <div className="container">
                    <div className="heading text-center">
                        <h3 className="heading3">Security Measures</h3>
                        <div className="right flex flex-col items-center gap-2 mt-3">
                            {/* <div className="body3">Health Care | Hospitality | Restaurants | Construction</div> */}
                            {/* <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/case-studies/case-studies-one"> */}
                                {/* <div className="text-button">View Our Case Studies</div> */}
                                {/* <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" /> */}
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
          
                <div className="list-case-study md:mt-10 mt-6">
                    <div className="list grid lg:grid-cols-5 sm:grid-cols-2">
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img">
                                    <Image width={500} height={500} className="w-full h-full block" src="/images/component/480x634.png" alt="img" />
                                </div>
                                <div className="text text-left flex flex-col md:items-end justify-between gap-3">
                                    <div className="heading6"><Link className="text-white" href="/case-studies/case-studies-one">USBs Are Disabled</Link></div>
                                    {/* <div className="body2 text-white">We are committed to providing reliable and high-quality financial advisory in our services.</div> */}
                                    {/* <Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                                        <div className="text-button text-white">Read More </div>
                                        <Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <Image width={500} height={500} className="w-full h-full block" src="/images/component/benefit2.png" alt="img" /></div>
                                <div className="text text-left flex flex-col md:items-end justify-between gap-3">
                                    <div className="heading6"><Link className="text-white" href="/case-studies/case-studies-one">Email Restrictions</Link></div>
                                    
                                    {/* <div className="body2 text-white">With an experienced and skilled team, we bring the necessary expertise to enhance work productivity.</div><Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <Image width={500} height={500} className="w-full h-full block" src="/images/component/benefit3.png" alt="img" /></div>
                                <div className="text flex flex-col md:items-end justify-between gap-3">
                                    <div className="heading6"><Link className="text-white" href="/case-studies/case-studies-one">{`Users can't change computer settings`}</Link></div>
                                    
                                    
                                    {/* <div className="body2 text-white">We constantly seek advanced solutions to address challenges and deliver the highest value to our customers.</div><Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <Image width={500} height={500} className="w-full h-full block" src="/images/component/benefit4.png" alt="img" /></div>
                                <div className="text flex flex-col md:items-end justify-between gap-3">
                                    <div className="heading6"><Link className="text-white" href="/case-studies/case-studies-one">Printing access to only Team members</Link></div>


                                    {/* <div className="body2 text-white">With over 21 years of serving industrial customers and over 3000 projects, we have the experience to solve almost.</div><Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <Image width={500} height={500} className="w-full h-full block" src="/images/component/benefit6.png" alt="img" /></div>
                                <div className="text flex flex-col md:items-end justify-between gap-3">
                                    <div className="heading6"><Link className="text-white" href="/case-studies/case-studies-one">IP address restrictions</Link></div>


                                    {/* <div className="body2 text-white">With over 21 years of serving industrial customers and over 3000 projects, we have the experience to solve almost.</div><Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link> */}
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}
export default CaseStudyOne