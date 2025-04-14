import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";

export default function SalesTaxServices() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Sales Tax Services"
            img="/images/banner/about1.jpg"
            title="Sales Tax Services"
            desc="Sales tax encompasses the collection, reporting, and payment of taxes on goods and services sold."
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
    slug: "sales-tax-services/gst",
    title: "GST",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 1,
    category: "fintech",
    subTitle: "",
    slug: "sales-tax-services/ias-bas",
    title: "IAS/BAS",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  }
];

