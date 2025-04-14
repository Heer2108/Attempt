import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";
import dynamic from "next/dynamic";
const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true});

export default function businessfinancinggrowth() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="business-financing-growth"
            img="/images/banner/about1.jpg"
            title="Business Financing & Growth"
            desc="From securing capital to managing cash flow, we provide strategic financial support to help your business scale and thrive. Our expertise in financing ensures you have the resources needed to take your business to the next level."
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
    slug: "business-financing-growth/business-loans",
    title: "Business Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 2,
    category: "fintech",
    subTitle: "",
    slug: "business-financing-growth/cash-credit-overdraft-facilities",
    title: " Cash Credit / Overdraft Facilities",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  },
  {
    id: 3,
    category: "fintech",
    subTitle: "",
    slug: "business-financing-growth/equipment-loans",
    title: " Equipment Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/bank.jpg",
  },
  {
    id: 4,
    category: "fintech",
    subTitle: "",
    slug: "business-financing-growth/loan-against-property",
    title: "Loan Against Property (LAP)",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/financial.jpg",
  },

];

