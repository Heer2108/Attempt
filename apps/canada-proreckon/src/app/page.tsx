import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from '@/data/service.json'
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
import CaseStudyOne1 from "@/components/Section/CaseStudy/CaseStudyOne1";
import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import ProjectTwocopy from "@/components/Section/Project/ProjectTwocopy";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import FaqsOneco from "@/components/Section/FAQs/FaqsOneco";
import stepsCopy from '@/data/steps-copy.json'
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import Footer from "@/components/Footer/Footer";
import ServiceAboutOne from "@/components/Section/Service/Steps";


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
          <ServiceAboutOne data={stepsCopy} title={'Security Measures'} desc={null} />

          <ProjectTwo />
          {/* <FaqsOne /> */}
          <FaqsOneco/>
          {/* <BlogOne data={blogData} /> */}
          <CaseStudyOne1/>
          <PartnerOne classname='bg-white lg:mt-0' />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
