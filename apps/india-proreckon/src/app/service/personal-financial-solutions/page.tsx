import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import Footer from "@/components/Footer/Footer";
import { CaseStudyType } from "@/type/CaseStudyType";
import dynamic from "next/dynamic";
const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true});

export default function personalfinancialsolutions() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="personal-financial-solutions"
            img="/images/banner/about1.jpg"
            title="Personal Financial Solutions"
            desc="Our personal financial solutions are designed to help you achieve your life goals. With tailored strategies and expert advice, we ensure your financial journey is smooth and secure."
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
    slug: "personal-financial-solutions/auto-loans",
    title: "Auto Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountp.jpg",
  },
  {
    id: 2,
    category: "fintech",
    subTitle: "",
    slug: "personal-financial-solutions/education-loans",
    title: "Education Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/accountr.jpg",
  },

  {
    id: 3,
    category: "fintech",
    subTitle: "",
    slug: "personal-financial-solutions/home-loans",
    title: "Home Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/financial.jpg",
  },



  {
    id: 4,
    category: "fintech",
    subTitle: "",
    slug: "personal-financial-solutions/personal-loans",
    title: "Personal Loans",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
    shortDesc: "",
    img: "/images/blog/full.jpg",
  },






];

