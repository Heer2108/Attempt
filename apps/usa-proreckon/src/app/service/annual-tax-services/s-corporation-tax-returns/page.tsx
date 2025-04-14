import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function SCorporationTaxReturns() {
  return (
    <DynamicServicePage
      breadcrumbTitle="S-Corporation Tax Returns"
      breadcrumbDesc="At ProReckon, we offer expert annual tax services to meet your specific needs and strategies for every business structure."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="S-Corporation Tax Returns"
      description="S-Corporation Tax Return Services in the U.S. cater specifically to the tax filing needs of S-Corporations, a widely adopted business structure. These services are crucial for accurately reporting income, deductions, and credits while ensuring compliance with both federal and state tax laws. ProReckon Solutions offers expert S-Corporation Tax Return services, helping businesses navigate the complexities of tax filing and maximising potential tax benefits."
      serviceData={serviceData}
      additionalText="ProReckon Solutions’ S-Corporation Tax Return services simplify the tax filing process for businesses of all sizes, ensuring accurate, efficient, and stress-free filing. Our goal is to minimise your tax liability while keeping your business in full compliance with tax regulations."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Precise Tax Filing",
    desc: "We ensure error-free preparation of tax returns, minimising the chance of audits or penalties for S-Corporations.",
    shortDesc: "Error-free tax return preparation to avoid audits and penalties.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Form 1120S Expertise",
    desc: "Our service covers the detailed preparation of Form 1120S, the required tax form for S-Corporations, ensuring compliance with IRS regulations.",
    shortDesc: "Expert preparation of Form 1120S to meet IRS standards.",
  },
  {
    icon: "icon-tax",
    category: "tax service",
    title: "Pass-Through Taxation Guidance",
    desc: "We assist S-Corporations with pass-through taxation, ensuring that profits and losses are correctly reported on individual shareholders' returns.",
    shortDesc: "Guidance on pass-through taxation for accurate reporting.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "On-Time Filing",
    desc: "We help you meet filing deadlines, avoiding penalties and maintaining good standing with tax authorities.",
    shortDesc: "Ensure timely filing to avoid penalties and stay compliant.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Maximising Deductions",
    desc: "Our experts optimise available deductions, credits, and incentives to help reduce your tax liability.",
    shortDesc: "Maximise deductions and credits to reduce your tax liability.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Tax Efficiency Planning",
    desc: "We work with businesses to create tax-efficient strategies that align with their financial goals and improve their tax positioning.",
    shortDesc: "Develop tax-efficient strategies to align with financial goals.",
  },
];
