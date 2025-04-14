import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function governmentSchemeAdvisory() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Government Scheme Advisory"
      breadcrumbDesc="Our Government Scheme Advisory service helps you understand and leverage government programs designed to support your financial goals, whether you're looking for subsidies, grants, or loans."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Government Scheme Advisory"
      description="Navigating government financial schemes and incentives can be overwhelming. Our Government Scheme Advisory service helps you understand and leverage the available government programs designed to support your financial goals, whether you're looking for subsidies, grants, or loans."
      serviceData={serviceData}
       serviceDataTitleOverrride='Key Points:'
      additionalText="With our Government Scheme Advisory service, you can take full advantage of government-backed financial support, giving your business or personal finances a competitive boost."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Scheme Identification",
    desc: "We help you identify relevant government schemes based on your business or personal financial needs.",
    shortDesc: "Identify the right government schemes for your financial needs.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Eligibility Assessment",
    desc: "Our experts assess your eligibility for various government grants, loans, and subsidies.",
    shortDesc: "Expert assessment of your eligibility for government schemes.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Application Assistance",
    desc: "We assist in preparing the necessary paperwork and applications to maximise your chances of approval.",
    shortDesc: "Get assistance with paperwork and applications for government schemes.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Scheme Benefits Maximization",
    desc: "We advise on how to fully utilise the benefits of the schemes you are eligible for, including tax breaks and incentives.",
    shortDesc: "Maximize the benefits of government schemes, including tax breaks.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Ongoing Advisory",
    desc: "We provide continuous support to help you stay informed about new government schemes and updates.",
    shortDesc: "Continuous advisory to keep you updated on new government schemes.",
  },
];
