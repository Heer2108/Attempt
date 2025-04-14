import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function legalComplianceAdvisory() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Legal and Compliance Advisory"
      breadcrumbDesc="Our Legal and Compliance Advisory service provides comprehensive guidance to help businesses meet all regulatory and legal requirements, minimising risk and avoiding penalties."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Legal and Compliance Advisory"
      description="In today’s complex regulatory environment, businesses need to ensure they are fully compliant with the law. Our Legal and Compliance Advisory service provides comprehensive guidance to help businesses meet all regulatory and legal requirements, minimising risk and avoiding penalties."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="With our Legal and Compliance Advisory service, your business can confidently operate within the legal framework, ensuring compliance, minimising risks, and safeguarding your reputation."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-legal", 
    category: "compliance service",
    title: "Regulatory Compliance",
    desc: "We assist in ensuring your business complies with all relevant industry regulations, including tax and labour laws.",
    shortDesc: "Ensure compliance with industry regulations and laws.",
  },
  {
    icon: "icon-risk", 
    category: "compliance service",
    title: "Risk Assessment",
    desc: "Our advisors identify potential legal risks in your business operations and suggest mitigation strategies.",
    shortDesc: "Identify legal risks and implement mitigation strategies.",
  },
  {
    icon: "icon-contract", 
    category: "compliance service",
    title: "Contract Review",
    desc: "We offer expert advice on drafting, reviewing, and managing contracts to ensure legal protection for your business.",
    shortDesc: "Expert contract review and management for legal protection.",
  },
  {
    icon: "icon-governance", 
    category: "compliance service",
    title: "Corporate Governance",
    desc: "We help businesses implement best practices in governance to maintain transparency and accountability.",
    shortDesc: "Implement corporate governance best practices for accountability.",
  },
  {
    icon: "icon-litigation", 
    category: "compliance service",
    title: "Litigation Support",
    desc: "In the event of legal disputes, we provide advisory support to navigate litigation and protect your business interests.",
    shortDesc: "Advisory support for legal disputes and litigation.",
  },
];
