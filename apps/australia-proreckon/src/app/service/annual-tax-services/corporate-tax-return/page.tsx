import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function CorporateTaxReturn() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Corporate Tax Return Preparation & Filing"
      breadcrumbDesc="Corporate tax returns require a strategic approach to ensure compliance with regulations while optimising tax liabilities."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Corporate Tax Return Preparation & Filing"
      description="Corporate tax returns require a strategic approach to ensure compliance with regulations while optimising tax liabilities. ProReckon Solutions specialises in preparing and filing corporate tax returns, offering expert guidance to businesses of all sizes to help them navigate the complexities of corporate taxation."
      serviceData={serviceData}
      additionalText="ProReckon Solutions takes the stress out of corporate tax return filing, ensuring your business complies with regulations while maximising savings. Let us handle the details so you can focus on running your business."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Tailored Tax Strategy",
    desc: "We develop customised tax strategies that align with your business goals and help minimise tax liabilities.",
    shortDesc: "Customised tax strategies for aligning with business objectives.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Comprehensive Deduction Review",
    desc: "Our team identifies and applies all eligible deductions and credits to reduce your corporate tax burden.",
    shortDesc: "Maximising deductions and credits to lower your tax burden.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Financial Statement Analysis",
    desc: "We analyse your financial statements to ensure accurate reporting and compliance with tax laws.",
    shortDesc: "Accurate financial statement reporting for tax compliance.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Tax Compliance",
    desc: "We ensure full compliance with CRA or IRS regulations, minimising the risk of audits and penalties.",
    shortDesc: "Ensuring compliance with CRA/IRS to avoid penalties.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Tax Planning for Future Growth",
    desc: "We offer ongoing tax advice and planning strategies to support your company’s future growth.",
    shortDesc: "Forward-looking tax planning for sustained business growth.",
  },
  {
    icon: "icon-regulatory",
    category: "tax service",
    title: "Audit Support",
    desc: "In the event of an audit, we provide comprehensive support to ensure your business remains compliant and properly represented.",
    shortDesc: "Full audit support to ensure compliance and smooth audits.",
  },
];
