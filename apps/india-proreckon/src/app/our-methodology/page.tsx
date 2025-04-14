import Image from 'next/image'
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import TestimonialTwo from '@/components/Section/Testimonial/TestimonialTwo'
import ServiceSixSecond from "@/components/Section/Service/ServiceSixSecond";
import dynamic from 'next/dynamic'

const WhatsAppFloating = dynamic(() => import('@/components/Footer/WhatsAppFloatingBtn'), { ssr: true });

export default function OurMethodology() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Our Methodologies"
            img="/images/banner/about4.jpg"
            title="Our Methodology"
            desc="At ProReckon Solutions, we are dedicated to understanding your unique business needs."
          />
          
          <div className="how-we-did mt-10 lg:mt-[100px] sm:mt-16">
            <div className="container">
              <div className="flex max-lg:flex-col gap-y-8">
                <div className="w-full lg:w-1/2">
                  <Image
                    width={400}
                    height={400}
                    className="w-full block rounded-2xl"
                    src="/images/blog/930x593.jpg"
                    alt="Description of the image"
                    quality={70}
                    priority // Ensures the image is loaded quickly
                  />
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="desc lg:pl-10 lg:pr-3">
                    <h2 className="heading3">ProReckon Solutions</h2>
                    <p className="body3 text-secondary mt-6 text-justify">
                      ProReckon’s commitment to providing high-quality outsourcing services is strong and consistent. We take the time to learn the details of your organization and use that knowledge to tailor our approach.
                    </p>
                    <p className="body3 text-secondary mt-6 text-justify">
                      Our approach is built on trust, transparency, and a genuine commitment to your success. Your goals and challenges are our priority, guiding us to deliver exceptional results in every service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="how-we-did mt-10 lg:mt-[100px] sm:mt-16">
            <div className="container">
              <div className="flex flex-row-reverse max-lg:flex-col gap-y-8">
                <div className="w-full lg:w-1/2">
                  <Image
                    width={400}
                    height={400}
                    className="w-full block rounded-2xl"
                    src="/images/blog/930x593-2.jpg"
                    alt="Description of the image"
                    quality={60}
                    priority // Ensures the image is loaded quickly
                  />
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="desc lg:pr-10 lg:pl-3">
                    <h2 className="heading3">When You Choose ProReckon Solutions</h2>
                    <p className="body3 text-secondary mt-6 text-justify">
                      You can expect seamless integration into your operations. We work as an extension of your team, collaborating to achieve shared objectives. Our open communication ensures transparency, keeping you informed and in control throughout the process.
                    </p>
                    <p className="body3 text-secondary mt-6 text-justify">
                      Our success is defined by the results we deliver. Whether improving efficiency, reducing costs, or enhancing customer satisfaction, we work to bring your vision to life. At ProReckon Solutions, we’re more than just an offshore accounting provider. We’re your partner, problem solver, and success driver, helping you navigate the evolving business landscape and achieve long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceSixSecond />
          <TestimonialTwo />
          <CtaOne cta={'Consult Us Today'} />
          <WhatsAppFloating />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
