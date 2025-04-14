import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";

export default function AnnualTaxServices() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Annual Tax Services"
            img="/images/banner/about1.jpg"
            title="Annual Tax Services"
            desc="At ProReckon, we offer expert annual tax services to meet your specific needs and strategies for every business structure."
          />
          <CaseStudyOne data={data} />
          {/* <CtaOne /> */}
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
    slug: "annual-tax-services/corporate-tax-return",
    title: "Corporate Tax Return",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 2,
    category: "fintech",
    subTitle: "",
    slug: "annual-tax-services/individual-tax-return",
    title: "Individual Tax Return",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  }
];
