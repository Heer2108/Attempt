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
    {/* Business Financing & Growth */}
    <li
      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/business-financing-growth" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/business-financing-growth">
        Business Financing & Growth
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/business-financing-growth/business-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/business-financing-growth/business-loans">
        Business Loans
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/business-financing-growth/cash-credit-overdraft-facilities" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/business-financing-growth/cash-credit-overdraft-facilities">
        Cash Credit/Overdraft Facilities
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/business-financing-growth/equipment-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/business-financing-growth/equipment-loans">
        Equipment Loans
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/business-financing-growth/loan-against-property" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/business-financing-growth/loan-against-property">
        Loan Against Property (LAP)
      </Link>
    </li>
  </div>

  <div>
    {/* Financial Advisory & Support Services */}
    <li
      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/financial-advisory-support" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support">
        Financial Advisory & Support Services
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/financial-advisory-support/credit-score-improvement" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support/credit-score-improvement">
        Credit Score Improvement Services
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/financial-advisory-support/financial-planning-advisory" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support/financial-planning-advisory">
        Financial Planning and Advisory
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/financial-advisory-support/government-scheme-advisory" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support/government-scheme-advisory">
        Government Scheme Advisory
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/financial-advisory-support/legal-compliance-advisory" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support/legal-compliance-advisory">
        Legal and Compliance Advisory
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/financial-advisory-support/loan-eligibility-assessment" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/financial-advisory-support/loan-eligibility-assessment">
        Loan Eligibility Assessment
      </Link>
    </li>
  </div>

  <div>
    {/* Personal Financial Solutions */}
    <li
      className={`first:[&>a]:font-bold sub-nav-item ${pathname === "/service/personal-financial-solutions" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/personal-financial-solutions">
        Personal Financial Solutions
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/personal-financial-solutions/auto-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/personal-financial-solutions/auto-loans">
        Auto Loans
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/personal-financial-solutions/education-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/personal-financial-solutions/education-loans">
        Education Loans
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/personal-financial-solutions/home-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/personal-financial-solutions/home-loans">
        Home Loans
      </Link>
    </li>
    <li
      className={`sub-nav-item ${pathname === "/service/personal-financial-solutions/personal-loans" ? "active" : ""}`}
    >
      <Link className="sub-nav-link font-medium" href="/service/personal-financial-solutions/personal-loans">
        Personal Loans
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
  onClick={() => handleOpenSubNavMobile(1)} // Handle opening of the mobile sub-navigation
>
  <a
    className="nav-link-mobile flex items-center justify-between"
    href="#!"
  >
    <span className="body2 font-semibold">Services</span>
    {openSubNavMobile === 1 ? (
      <Icon.CaretDown className="text-base" />
    ) : (
      <Icon.CaretRight className="text-base" />
    )}
  </a>
  <ul
    className={`sub-nav-mobile ${openSubNavMobile === 1 ? "open" : ""}`}
  >
    {/* Business Financing & Growth */}
    <li className="sub-nav-item pl-3 pt-2 pb-2">
      <a
        className="sub-nav-link flex items-center justify-between text-base"
        href="#!"
        onClick={(e) => {
          e.stopPropagation();
          handleOpenSubNavChildMobile(1);
        }}
      >
        <span>Business Financing & Growth</span>
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
            href="/service/business-financing-growth/business-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Business Loans
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/business-financing-growth/cash-credit-overdraft-facilities"
            onClick={() => setOpenMenuMobile(false)}
          >
            Cash Credit/Overdraft Facilities
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/business-financing-growth/equipment-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Equipment Loans
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/business-financing-growth/loan-against-property"
            onClick={() => setOpenMenuMobile(false)}
          >
            Loan Against Property (LAP)
          </Link>
        </li>
      </ul>
    </li>

    {/* Financial Advisory & Support Services */}
    <li className="sub-nav-item pl-3 pt-2 pb-2">
      <a
        className="sub-nav-link flex items-center justify-between text-base"
        href="#!"
        onClick={(e) => {
          e.stopPropagation();
          handleOpenSubNavChildMobile(2);
        }}
      >
        <span>Financial Advisory & Support Services</span>
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
            href="/service/financial-advisory-support/credit-score-improvement"
            onClick={() => setOpenMenuMobile(false)}
          >
            Credit Score Improvement Services
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/financial-advisory-support/financial-planning"
            onClick={() => setOpenMenuMobile(false)}
          >
            Financial Planning and Advisory
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/financial-advisory-support/government-scheme-advisory"
            onClick={() => setOpenMenuMobile(false)}
          >
            Government Scheme Advisory
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/financial-advisory-support/legal-compliance-advisory"
            onClick={() => setOpenMenuMobile(false)}
          >
            Legal and Compliance Advisory
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/financial-advisory-support/loan-eligibility-assessment"
            onClick={() => setOpenMenuMobile(false)}
          >
            Loan Eligibility Assessment
          </Link>
        </li>
      </ul>
    </li>

    {/* Personal Financial Solutions */}
    <li className="sub-nav-item pl-3 pt-2 pb-2">
      <a
        className="sub-nav-link flex items-center justify-between text-base"
        href="#!"
        onClick={(e) => {
          e.stopPropagation();
          handleOpenSubNavChildMobile(3);
        }}
      >
        <span>Personal Financial Solutions</span>
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
            href="/service/personal-financial-solutions/auto-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Auto Loans
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/personal-financial-solutions/education-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Education Loans
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/personal-financial-solutions/home-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Home Loans
          </Link>
        </li>
        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
          <Link
            className="sub-nav-link text-base"
            href="/service/personal-financial-solutions/personal-loans"
            onClick={() => setOpenMenuMobile(false)}
          >
            Personal Loans
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
