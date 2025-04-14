import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import ServiceFive from "@/components/Section/Service/ServiceFive";
import Caseaboutpartner from "@/components/Section/CaseStudy/Caseaboutpartner";
import Partneronecopy from "@/components/Section/Partner/Partneronecopy";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { ServiceType } from "@/type/ServiceType";
import dynamic from "next/dynamic";
const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true });
export interface IDynamicServicePageProps {
    breadcrumbTitle: string;
    breadcrumbDesc: string;
    breadcrumbImg: string;
    heading: string;
    description: string;
    serviceData: ServiceType[];
    additionalText: string;
    serviceDataTitleOverrride?: string;
    contentImage?: string;
}

export default function DynamicServicePage({
  breadcrumbTitle,
  breadcrumbDesc,
  breadcrumbImg,
  heading,
  description,
  serviceData,
  additionalText,
  serviceDataTitleOverrride,
  contentImage,
}: IDynamicServicePageProps) {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNavOne />
        <MenuOne />
      </header>
      <main className="content">
        <BreadcrumbItem
          link={breadcrumbTitle}
          img={breadcrumbImg}
          title={breadcrumbTitle}
          desc={breadcrumbDesc}
        />

        <div className="mt-[100px]">
          <div className="container">
            <div className="flex gap-8 max-lg:flex-col-reverse">
              <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:pr-10">
                <h1 className="heading3">{heading}</h1>
                <p className="body2 text-secondary text-justify">{description}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-img w-full overflow-hidden rounded-xl">
                  <Image
                    width={500}
                    height={500}
                    quality={70}
                    className="w-full h-full block"
                    src={contentImage ?? "/images/component/bottom-slider-three.jpg"}
                    alt="Content Image"
                    priority // Ensures the image is loaded quickly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Heading */}
        <div className="mt-8">
          <div className="container">
            <h2 className="heading3">{serviceDataTitleOverrride ?? 'Key Features:'}</h2>
          </div>
        </div>

        <ServiceFive data={serviceData} title='' />

        {/* Additional Text */}
        <div className="container mt-8">
          <p className="body2 text-secondary text-justify">{additionalText}</p>
        </div>

        <Caseaboutpartner />
        <Partneronecopy classname="" />
        <CtaOne />
        <WhatsAppFloating />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
