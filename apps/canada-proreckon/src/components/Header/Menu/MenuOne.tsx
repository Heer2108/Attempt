"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuOne = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);
  const [openSubNavChildMobile, setOpenSubNavChildMobile] = useState<
    number | null
  >(null);

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  const handleOpenSubNavChildMobile = (index: number) => {
    setOpenSubNavChildMobile(openSubNavChildMobile === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 400);
      // setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header-menu style-one bg-white ${fixedHeader ? "fixed" : ""}`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="menu-left-block flex flex-row">
            <Link className="" href="/">
              <Image
                src={"/images/Logo.png"}
                width={2000}
                height={1000}
                alt="logo"
                priority={true}
                className="w-[240px] max-sm:w-[162px]"
              />
            </Link>
            {/* <Image
              src={"/images/country-logo.gif"}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
              className="w-[65px] max-sm:w-[42px] my-4 ml-4"
            /> */}
          </div>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center home ${pathname === "/" || pathname.includes("/homepages/") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${pathname.includes("/about/") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/about"
                >
                  <span>About Us</span>
                  {/* <span>
                    <Icon.CaretDown className="text-sm" />
                  </span> */}
                </Link>
                {/* <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${pathname === "/about/about-one" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/about/about-one"
                    >
                      About Style 1
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname === "/about/about-two" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/about/about-two"
                    >
                      About Style 2
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${pathname.includes("/service") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>Services</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>

                {/* <ul className="sub-nav flex min-w-[65vw] absolute !-left-[380px] justify-around">
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/service-one" ? "active" : ""}`}
                    >
                      {" "}
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/service-one"
                      >
                        Accounting and Bookkeeping
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/account-payable" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/account-payable"
                      >
                        Account Payable
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/account-receivable" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/account-receivable"
                      >
                        Account Receivable
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/bank-reconciliation" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/bank-reconciliation"
                      >
                        Bank Reconciliation
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/financial-analysis-reporting" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/financial-analysis-reporting"
                      >
                        Financial Analysis & Reporting
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/full-time-bookkeeper" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/full-time-bookkeeper"
                      >
                        Full Time Bookkeeper
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/year-end-finalisation" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/year-end-finalisation"
                      >
                        Year End Finalisation
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/service-one" ? "active" : ""}`}
                    >
                      {" "}
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/service-one"
                      >
                        Annual Tax
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/services/c-corporation-tax-return" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/c-corporation-tax-return"
                      >
                        C-Corporation Tax Return
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/individual-tax-return" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/individual-tax-return"
                      >
                        Individual Tax Return
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/partnership-tax-return" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/partnership-tax-return"
                      >
                        Partnership Firm Tax Return
                      </Link>
                    </li>

                    <li
                      className={`sub-nav-item ${pathname === "/services/s-corporation-tax-return" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/s-corporation-tax-return"
                      >
                        S-Corporation Tax Return
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/service-one" ? "active" : ""}`}
                    >
                      {" "}
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/service-one"
                      >
                        Sales Tax
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/services/vat-return-filling" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/services/vat-return-filling"
                      >
                        VAT Return Filling
                      </Link>
                    </li>
                  </div>
                </ul> */}
                <ul className="sub-nav flex min-w-[65vw] absolute !-left-[380px] justify-around">
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/accounting-and-bookkeeping" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping"
                      >
                        Accounting and Bookkeeping
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/accounts-receivable-and-payable" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/accounts-receivable-and-payable"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Accounts Receivable and Payable
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/bank-reconciliation" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/bank-reconciliation"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Bank Reconciliation
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/financial-analysis-and-reporting" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/financial-analysis-and-reporting"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Financial Analysis & Reporting
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/full-time-bookkeeper-solutions" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/full-time-bookkeeper-solutions"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Full-Time Bookkeeper Solutions
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/payroll-management" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/payroll-management"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Payroll Management
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/accounting-and-bookkeeping/year-end-finalisation" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/accounting-and-bookkeeping/year-end-finalisation"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Year End Finalisation
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/annual-tax-services" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/annual-tax-services"
                      >
                        Annual Tax Services
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/annual-tax-services/c-corporation-tax-returns" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/annual-tax-services/T1-Form-Preparation-Filing-For-Individual"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        T1 Form Preparation & Filing (For Individual)
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/annual-tax-services/T2-Form-Preparation-Filing-For-Corporate" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/annual-tax-services/T2-Form-Preparation-Filing-For-Corporate"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        T2 Form Preparation & Filing (For Corporate) 
                      </Link>
                    </li>
                    {/* <li
                      className={`sub-nav-item ${pathname === "/service/annual-tax-services/partnership-firm-tax-returns" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/annual-tax-services/partnership-firm-tax-returns"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Partnership Firm Tax Returns
                      </Link>
                    </li> */}
                    {/* <li
                      className={`sub-nav-item ${pathname === "/service/annual-tax-services/s-corporation-tax-returns" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/annual-tax-services/s-corporation-tax-returns"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        S-Corporation Tax Returns
                      </Link>
                    </li> */}
                  </div>
                  <div>
                    <li
                      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/sales-tax-services" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/sales-tax-services"
                      >
                        Sales Tax Services
                      </Link>
                    </li>
                    <li
                      className={`sub-nav-item ${pathname === "/service/sales-tax-services/GSTHSTPreparationFiling" ? "active" : ""}`}
                    >
                      <Link
                        className="sub-nav-link font-medium"
                        href="/service/sales-tax-services/GSTHSTPreparationFiling"
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        GST/HST Preparation & Filing
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${pathname.includes("/our-methodology") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/our-methodology"
                >
                  <span> Our Methodology</span>
                  {/* <span><Icon.CaretDown className="text-sm" /></span> */}
                </Link>
                {/* <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/case-studies/case-studies-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/case-studies-one">Case Studies 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/case-studies/case-studies-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/case-studies-two">Case Studies 2</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/case-studies/detail') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/detail">Case Studies Detail</Link></li>
                                </ul> */}
              </li>
              {/* <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/pages/') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="#!">
                                <span>Pages</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/pages/faqs' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/faqs">FAQs</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/pages/pricing' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/pricing">Pricing</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/pages/partners' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/partners">Partners</Link></li>
                                </ul>
                            </li> */}
              <li
                className={`nav-item h-full flex items-center justify-center ${pathname.includes("/blog/") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/blog/blog-grid"
                >
                  <span>Blog</span>
                  {/* <span>
                    <Icon.CaretDown className="text-sm" />
                  </span> */}
                </Link>
                {/* <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${pathname === "/blog/blog-list-one" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/blog/blog-list-one"
                    >
                      Blog List 1
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname === "/blog/blog-list-two" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/blog/blog-list-two"
                    >
                      Blog List 2
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname === "/blog/blog-grid" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/blog/blog-grid"
                    >
                      Blog Grid
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname.includes("/blog/blog-detail-one") ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/blog/blog-detail-one"
                    >
                      Blog Detail 1
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname.includes("/blog/blog-detail-two") ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/blog/blog-detail-two"
                    >
                      Blog Detail 2
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${pathname.includes("/contact/") ? "active" : ""}`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/contact"
                >
                  <span>Contact Us</span>
                  {/* <span>
                    <Icon.CaretDown className="text-sm" />
                  </span> */}
                </Link>
                {/* <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${pathname === "/contact/contact-one" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/contact/contact-one"
                    >
                      Contact Style 1
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${pathname === "/contact/contact-two" ? "active" : ""}`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href="/contact/contact-two"
                    >
                      Contact Style 2
                    </Link>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
          <div className="menu-right-block flex items-center">
            {/* <div className="icon-call"><i className="icon-phone-call text-4xl"></i></div> */}
            {/* <div className="text ml-3">
                            <div className="text caption1">Free Consultancy</div>
                            <div className="number text-button">+123 456 7890</div>
                        </div> */}
            <div
              className="menu-humburger hidden pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              <Icon.List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home`}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href="/"
                  >
                    <span className="body2 font-semibold">Home </span>
                  </Link>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about`}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href="/about"
                  >
                    <span className="body2 font-semibold">About Us</span>
                    {/* <Icon.CaretRight className="text-base" /> */}
                  </Link>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Services </span>
                    {openSubNavMobile === 1 ? (
                      <Icon.CaretDown className="text-base" />
                    ) : (
                      <Icon.CaretRight className="text-base" />
                    )}
                  </a>
                  <ul
                    className={`sub-nav-mobile ${openSubNavMobile === 1 ? "open" : ""}`}
                  >
                    <li className="sub-nav-item pl-3 pt-2 pb-2">
                      <a
                        className="sub-nav-link flex items-center justify-between text-base"
                        href="#!"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenSubNavChildMobile(1);
                        }}
                      >
                        <span>Accounting and Bookkeeping</span>
                        {openSubNavChildMobile === 1 ? (
                          <Icon.CaretDown className="text-base" />
                        ) : (
                          <Icon.CaretRight className="text-base" />
                        )}
                      </a>
                      <ul
                        className={`sub-nav-mobile ${openSubNavChildMobile === 1 ? "open" : ""}`}
                      >
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/accounts-receivable-and-payable"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Accounts Receivable and Payable
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/bank-reconciliation"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Bank Reconciliation
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/financial-analysis-and-reporting"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Financial Analysis & Reporting
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/full-time-bookkeeper-solutions"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Full-Time Bookkeeper Solutions
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/payroll-management"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Payroll Management
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/accounting-and-bookkeeping/year-end-finalisation"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Year End Finalisation
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="sub-nav-item pl-3 pt-2 pb-2">
                      <a
                        className="sub-nav-link flex items-center justify-between text-base"
                        href="#!"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenSubNavChildMobile(2); // Incremented to 2
                        }}
                      >
                        <span>Annual Tax Services</span>
                        {openSubNavChildMobile === 2 ? (
                          <Icon.CaretDown className="text-base" />
                        ) : (
                          <Icon.CaretRight className="text-base" />
                        )}
                      </a>
                      <ul
                        className={`sub-nav-mobile ${openSubNavChildMobile === 2 ? "open" : ""}`}
                      >
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/annual-tax-services/T1-Form-Preparation-Filing-For-Individual"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            T1 Form Preparation & Filing (For Individual)
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/annual-tax-services/T2-Form-Preparation-Filing-For-Corporate"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            T2 Form Preparation & Filing (For Corporate) 
                          </Link>
                        </li>
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          {/* <Link
                            className="sub-nav-link text-base"
                            href="/service/annual-tax-services/partnership-firm-tax-returns"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            Partnership Firm Tax Returns
                          </Link> */}
                        </li>
                        {/* <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/annual-tax-services/s-corporation-tax-returns"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            S-Corporation Tax Returns
                          </Link>
                        </li> */}
                      </ul>
                    </li>

                    <li className="sub-nav-item pl-3 pt-2 pb-2">
                      <a
                        className="sub-nav-link flex items-center justify-between text-base"
                        href="#!"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenSubNavChildMobile(3); // Incremented to 3
                        }}
                      >
                        <span>Sales Tax Services</span>
                        {openSubNavChildMobile === 3 ? (
                          <Icon.CaretDown className="text-base" />
                        ) : (
                          <Icon.CaretRight className="text-base" />
                        )}
                      </a>
                      <ul
                        className={`sub-nav-mobile ${openSubNavChildMobile === 3 ? "open" : ""}`}
                      >
                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <Link
                            className="sub-nav-link text-base"
                            href="/service/sales-tax-services/GSTHSTPreparationFiling"
                            onClick={() => setOpenMenuMobile(false)}
                          >
                            GST/HST Preparation & Filing
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer case ${openSubNavMobile === 4 ? "active" : ""}`}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href="/our-methodology"
                  >
                    <span className="body2 font-semibold">
                      Our Methodology{" "}
                    </span>
                  </Link>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer blog ${openSubNavMobile === 6 ? "active" : ""}`}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href="/blog/blog-grid"
                  >
                    <span className="body2 font-semibold">Blog </span>
                  </Link>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer contact ${openSubNavMobile === 7 ? "active" : ""}`}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href="/contact"
                  >
                    <span className="body2 font-semibold">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuOne;
