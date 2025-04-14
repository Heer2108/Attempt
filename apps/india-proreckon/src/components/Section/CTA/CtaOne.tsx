import Image from "next/image"
import Link from "next/link"

const CtaOne = ({cta} : {cta?: string}) => {
    return (
        <div className="cta-block style-two relative lg:h-[120px] h-[180px]">
            <div className="bg-cta w-full h-full absolute top-0 left-0 z-[-1]">
                <Image width={500} height={500} quality={50} className="w-full h-full object-cover" src="/images/cta/bg-cta1.webp" alt="" />
            </div>
            <div className="container flex items-center justify-between max-lg:flex-col max-lg:justify-center gap-6 h-full">
                <div className="heading5 max-lg:text-center text-white">Get This Service Now!</div>
                <Link className="button-main rounded-full hover:bg-black  bg-white text-button px-9 py-3" href="/contact">{cta ?? 'Book Consultation'}</Link>
            </div>
        </div>
    )
}
export default CtaOne