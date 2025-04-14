import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function GST() {
  return (
    <DynamicServicePage
      breadcrumbTitle="GST Preparation & Filing"
      breadcrumbDesc="GST involves managing the taxes applied to sales of goods and services. We ensure that your business meets all regulatory requirements efficiently while minimising the risk of errors and penalties."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="GST Preparation & Filing"
      description="Proper Goods and Services Tax (GST) preparation is essential for businesses across multiple sectors in Australia. Ensuring accurate calculation, timely filing, and compliance with tax regulations is key to avoiding penalties and optimising your tax position. ProReckon Solutions provides comprehensive GST services to streamline the process for your business."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Features:'
      additionalText="With ProReckon Solutions, your GST preparation and filing are handled with precision and care. Our expertise ensures your business remains compliant while optimising your tax position."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Accurate GST Calculation",
    desc: "We ensure precise GST calculations based on applicable rates and your business transactions.",
    shortDesc: "Accurately calculate GST based on your transactions and applicable rates.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Compliance with Tax Regulations",
    desc: "We ensure your business stays compliant with tax regulations by submitting GST returns on time.",
    shortDesc: "Ensure timely submission to comply with Australian tax laws.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Transaction Documentation",
    desc: "Meticulous record-keeping of transactions ensures seamless reporting and reduces the risk of future audits.",
    shortDesc: "Maintain accurate records for seamless reporting and audit readiness.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "GST Credit Claims",
    desc: "We help you claim eligible Input Tax Credits (ITCs), reducing your overall tax liability.",
    shortDesc: "Claim eligible GST credits to reduce tax liability.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Ongoing GST Support",
    desc: "We offer year-round support for your GST needs, including advice on managing and reducing your GST obligations.",
    shortDesc: "Receive year-round support for managing and reducing GST obligations.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Audit Support",
    desc: "In case of an audit, we provide full support, ensuring that all documentation and filings are in order, helping you navigate the process smoothly.",
    shortDesc: "Comprehensive audit support to ensure compliance and peace of mind.",
  },
];

 