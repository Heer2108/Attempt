import Link from "next/link"



const CaseStudyOne = () => {
    return (
        <>
            <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
                <div className="container">
                    <div className="heading text-center">
                        <h3 className="heading4 md:heading3">Softwares We Currently Use</h3>
                        <div className="right flex flex-col items-center gap-2 mt-3">
                            <div className="body3">Our experts have hands-on experience with the usage and application of 30+ industry-accepted software products for our clients.</div>
                            <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/case-studies/case-studies-one">
                                {/* <div className="text-button">View Our Case Studies</div> */}
                                {/* <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
                
               
            </section>
        </>
    )
}
export default CaseStudyOne