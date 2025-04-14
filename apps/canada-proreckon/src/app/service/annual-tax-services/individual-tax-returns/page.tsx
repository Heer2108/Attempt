import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function IndividualTaxReturns() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Individual Tax Returns"
      breadcrumbDesc="At ProReckon, we offer expert annual tax services to meet your specific needs and strategies for every business structure."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Individual Tax Returns"
      description="Individual Tax Returns in the United States is a crucial financial service that focuses on the preparation and filing of tax returns for individual taxpayers, ensuring compliance with both federal and state tax laws. This annual process is essential for U.S. residents and citizens to accurately report their income, deductions, and credits. ProReckon Solutions provides expert guidance in Individual Tax Returns, helping individuals navigate the complexities of tax filing and optimise potential refunds."
      serviceData={serviceData}
      additionalText="At ProReckon Solutions, our Individual Tax Returns service simplifies tax filing for U.S. residents and citizens. Whether you're filing as an individual or a family, our expertise ensures accurate, timely, and stress-free tax preparation, ultimately helping you keep more of what you’ve earned."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Accurate Filing",
    desc: "We ensure precise preparation of your tax returns, minimising errors and reducing the likelihood of audits or penalties.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Maximising Deductions",
    desc: "Our comprehensive review identifies all eligible deductions and credits, helping you maximise your tax benefits.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Deadline Compliance",
    desc: "We help you meet tax deadlines, avoiding late filing penalties and ensuring you stay in compliance with tax authorities.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Filing Assistance",
    desc: "Our team provides expert guidance throughout the tax filing process, addressing your questions and concerns.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "State & Federal Returns",
    desc: "We manage both state and federal tax filings, ensuring compliance with all applicable regulations.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Optimising Refunds",
    desc: "Our service is designed to help you maximise your tax refund, putting more of your hard-earned money back in your pocket.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
 