import Image from "next/image";
import Link from "next/link";

const SliderOne = () => {
    return (
        <div className="slider-block style-one">
            <div className="slider-main">
                <div className='h-full relative'>
                    <div className="slider-item slider-third">
                        <div className="bg-img">
                            <Image
                                src={'/images/slider/slider3.jpg'}
                                width={2000}
                                height={1500}
                                alt="bgslider"
                                priority={true}
                                quality={65}
                                className="w-full h-full object-fill object-top"
                            />
                        </div>
                        <div className="container">
                            <div className="text-content flex-columns-between">
                                <div className="heading2">
                                    <span className="block">ProReckon Solutions</span>
                                    <span className="block">Your Trusted</span>
                                    <span className="text-blue block">Offshore Accounting Partner!</span>
                                </div>
                                <div className="hidden md:!inline-block w-[45%] body2 mt-3 text-secondary">
                                    Why juggle numbers when you can focus on your business? ProReckon Solutions streamline your operations with expert offshore accounting, valuation, and tax services.
                                </div>
                                <div className="text-[12px] md:hidden w-[60%] body2 mt-3 text-secondary">
                                    Why juggle numbers when you can focus on your business? <br />We streamline your operations with expert offshore accounting, valuation, and tax services.
                                </div>
                                <div className="button-block md:mt-10 mt-6">
                                    <Link className="button-main bg-blue text-white" href="/contact">Get Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderOne;

