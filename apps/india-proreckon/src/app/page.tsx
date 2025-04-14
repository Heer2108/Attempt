import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from '@/data/service.json'
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";

import FinanceSection from "@/components/FinanceSection/FinanceSection";




import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import ProjectTwocopy from "@/components/Section/Project/ProjectTwocopy";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import FaqsOneco from "@/components/Section/FAQs/FaqsOneco";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";

const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true });

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <SliderOne />
          <ServiceOne data={serviceData} />
          <PaymentGatewayOneFirst />
          {/* <CaseStudyOne /> */}

          {/* <ProjectTwo /> */}
          <ProjectTwocopy />

          <PaymentGatewayOneSecond />
{/* <Wesimplify/> */}
          {/* <ServiceAboutOne data={stepsCopy} title={'Security Measures'} desc={null} /> */}
          <FinanceSection />
          {/* <ProjectTwo /> */}
          {/* <FaqsOne /> */}
          <FaqsOneco/>
        
          {/* <BlogOne data={blogData} /> */}
          {/* <CaseStudyOne1/>
          <PartnerOne classname='bg-white lg:mt-0' /> */}
          <WhatsAppFloating />
          </main>
          <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
