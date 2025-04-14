"use client"
import Image from "next/image";
import Link from "next/link";
import { GetQuoteBtn } from "./GetQuoteBtn";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    return (
        <div className="style-one">
            <div className="footer-block bg-dark pt-[60px]">
                <div className="container">
                    <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
                        {/* Company Information */}
                        <div className="lg:w-1/4">
                            <div className="footer-company-info flex flex-col justify-between gap-5">
                                <Image
                                    width={280}
                                    height={210}
                                    className="footer-logo w-[245px]"
                                    src="/images/LogoWhite.png"
                                    alt="Logo"
                                    priority // Ensures the image is loaded quickly
                                />
                                <div className="text caption1 text-white">
                                Empowering Your Finances That Power Your Future.
                                </div>
                                <div className="list-social flex items-center gap-2.5">
                                    <Link className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center" href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61565876035377" target="_blank">
                                        <i className="icon-facebook text-sm"></i>
                                    </Link>
                                    <Link className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center" href="https://www.linkedin.com/company/proreckon-solutions/" target="_blank">
                                        <i className="icon-in text-sm"></i>
                                    </Link>
                                    <Link className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center" href="https://x.com/proreckon" target="_blank">
                                        <i className="icon-twitter text-xs"></i>
                                    </Link>
                                    <Link className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center" href="https://www.instagram.com/proreckon" target="_blank">
                                        <i className="icon-insta text-xs"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                       {/* Navigation Links */}
<div className="lg:w-1/2">
    <div className="footer-navigate flex items-start justify-center gap-10 md:gap-20">
        <div className="footer-nav-item">
            <div className="item-heading text-button-sm text-white">General</div>
            <ul className="list-nav mt-1">
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname === "/" ? "hidden" : ""}`} href="/">Home</Link></li>
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/about") ? "hidden" : ""}`} href="/about">About Us</Link></li>
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/our-methodology") ? "hidden" : ""}`} href="/our-methodology">Our Methodology</Link></li>
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/blog/") ? "hidden" : ""}`} href="/blog/blog-grid">Blogs</Link></li>
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/contact") ? "hidden" : ""}`} href="/contact">Contact Us</Link></li>
            </ul>
        </div>

        <div className="footer-nav-item">
            <div className="item-heading text-button-sm text-white">Services</div>
            <ul className="list-nav mt-1">
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/service/business-financing-growth") ? "hidden" : ""}`} href="/service/business-financing-growth">Business Financing & Growth</Link></li>
             
                
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/service/financial-advisory-support") ? "hidden" : ""}`} href="/service/financial-advisory-support">Financial Advisory & Support Services</Link></li>
             
                
                <li className="mt-3"><Link className={`caption1 line-white text-surface hover-underline ${pathname.includes("/service/personal-financial-solutions") ? "hidden" : ""}`} href="/service/personal-financial-solutions">Personal Financial Solutions</Link></li>
          
            </ul>
        </div>
    </div>
</div>


                        {/* Contact Section */}
                        <div className="lg:w-1/4">
                            <div className="company-contact">
                                <GetQuoteBtn />
                            </div>
                        </div>
                    </div>
                    <div className="border-line"></div>
                    <div className="footer-bottom flex items-center justify-center pt-3 pb-3">
    <div className="left-block flex flex-col items-center text-center">
        <div className="copy-right text-surface caption1">
            © {new Date().getFullYear()} ProReckon. All Rights Reserved.
            <span className="inline-block lg:inline lg:ml-2 block"> {/* Ensures it goes inline on desktop but block on mobile */}
            Designed by <Link href="https://www.civoncetech.com/" target="_blank" style={{ textDecoration: 'underline', color: '#F57C00' }}>Civonce Technologies</Link>
            </span>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
