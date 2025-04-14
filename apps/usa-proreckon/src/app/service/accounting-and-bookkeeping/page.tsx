import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";

export default function AccountingAndBookkeeping() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Accounting & Bookkeeping"
            img="/images/banner/about1.jpg"
            title="Accounting & Bookkeeping"
            desc="At ProReckon, we specialise in delivering a full suite of accounting and bookkeeping services tailored for businesses across the USA."
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
    slug: "accounting-and-bookkeeping/accounts-receivable-and-payable",
    title: "Account Payable and Receivable",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 2,
    category: "fintech",
    subTitle: "",
    slug: "accounting-and-bookkeeping/bank-reconciliation",
    title: "Bank Reconciliation",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  },
  {
    id: 3,
    category: "fintech",
    subTitle: "",
    slug: "accounting-and-bookkeeping/financial-analysis-and-reporting",
    title: "Financial Analysis",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/bank.jpg",
  },
  {
    id: 4,
    category: "fintech",
    subTitle: "",
    slug: "accounting-and-bookkeeping/full-time-bookkeeper-solutions",
    title: "Full Time Bookkeeper",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/financial.jpg",
  },
  {
    id: 5,
    category: "investing",
    subTitle: "",
    slug: "accounting-and-bookkeeping/payroll-management",
    title: "Payroll Management",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/full.jpg",
  },
  {
    id: 6,
    category: "investing",
    subTitle: "",
    slug: "accounting-and-bookkeeping/year-end-finalisation",
    title: "Year End Finalisation",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/year.jpg",
  },
];

