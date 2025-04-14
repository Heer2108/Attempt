import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function IndividualTaxReturn() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Individual Tax Return"
      breadcrumbDesc="Filing an individual tax return can be a daunting task, but it’s essential to ensure you’re meeting your tax obligations while maximising any deductions or credits available to you."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Individual Tax Return"
      description="ProReckon Solutions offers personalised individual tax return services, ensuring your taxes are prepared and filed accurately, giving you peace of mind. Our team evaluates your financial situation, applies eligible deductions and credits, and ensures error-free and timely filing. With year-round support and fast electronic filing, we help you navigate tax complexities while maximising your refund."
      serviceData={serviceData}
      additionalText="Trust ProReckon Solutions to manage your individual tax return efficiently and accurately, helping you navigate the complexities of tax laws while ensuring you get the maximum refund possible."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Comprehensive Tax Review",
    desc: "We evaluate your financial situation to ensure all income is reported, and eligible deductions and credits are applied.",
    shortDesc: "Detailed review of your financials to ensure accurate reporting.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Maximised Deductions",
    desc: "Our team works to identify tax deductions and credits that apply to your specific situation, ensuring you pay only what’s necessary.",
    shortDesc: "Maximise deductions and credits for your unique situation.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Error-Free Filing",
    desc: "We handle the entire process, minimising the risk of errors that could trigger audits or penalties.",
    shortDesc: "Minimise errors to avoid audits and penalties.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Year-Round Support",
    desc: "Tax planning doesn’t end with filing. We offer year-round tax support to help you stay prepared for next year’s return.",
    shortDesc: "Ongoing support to ensure readiness for future returns.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Electronic Filing",
    desc: "Fast and secure electronic filing ensures your tax return is submitted promptly and accurately.",
    shortDesc: "Secure and timely electronic submission of your tax return.",
  },
  {
    icon: "icon-regulatory",
    category: "tax service",
    title: "Audit Assistance",
    desc: "In case of an audit, we provide comprehensive support to help you navigate the process smoothly and stay compliant.",
    shortDesc: "Full audit support to ensure compliance and stress-free audits.",
  },
];


