import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import Aboutwhy from "@/components/Section/Service/Aboutwhy"
import Steps from "@/components/Section/Service/Steps"
import aboutwhy from '@/data/aboutwhy.json'
import steps from '@/data/steps.json'
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import Caseaboutpartner from "@/components/Section/CaseStudy/Caseaboutpartner";
import Partneronecopy from "@/components/Section/Partner/Partneronecopy"
import Footer from "@/components/Footer/Footer"
import dynamic from "next/dynamic"
const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true });

export default function AboutStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/about1.jpg" title="About Us" desc=" ProReckon Solutions India is a comprehensive financial service provider, offering a wide range of tailored financial solutions to businesses worldwide. With our expertise, we ensure that you receive efficient and reliable financial management, empowering your business to thrive in today’s global market." />
          <AboutTwo />
          <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
          {/* <ServiceAboutOne data={serviceData} /> */}

          <Aboutwhy data={aboutwhy} />

          <OurTeam />

          <Steps data={steps} />
        
          <Caseaboutpartner/>

  <Partneronecopy classname="" />
         
          {/* <CtaOne /> */}
          <WhatsAppFloating />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}