import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";
import dynamic from "next/dynamic";
const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true});

export default function financialadvisorysupport() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="financial-advisory-support"
            img="/images/banner/about1.jpg"
            title="Financial Advisory & Support"
            desc="Our financial advisory services offer in-depth analysis, strategic planning, and ongoing support to guide your business decisions."
          />
          <CaseStudyOne data={data} />
          {/* <CtaOne /> */}
          <WhatsAppFloating />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

const data: CaseStudyType[] = [
  {
    id: 1,
    category: "fintech",
    subTitle: "",
    slug: "financial-advisory-support/credit-score-improvement",
    title: "Credit Score Improvement",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 2,
    category: "fintech",
    subTitle: "",
    slug: "financial-advisory-support/financial-planning-advisory",
    title: "Financial Planning and Advisory",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  },


  {
    id: 3,
    category: "fintech",
    subTitle: "",
    slug: "financial-advisory-support/government-scheme-advisory",
    title: "Government Scheme Advisory",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/full.jpg",
  },


  {
    id: 4,
    category: "fintech",
    subTitle: "",
    slug: "financial-advisory-support/legal-compliance-advisory",
    title: "Legal Compliance and Advisory",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/financial.jpg",
  },


  {
    id: 5,
    category: "fintech",
    subTitle: "",
    slug: "financial-advisory-support/loan-eligibility-assessment",
    title: "Loan Eligibility Assessment",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/year.jpg",
  }





];
