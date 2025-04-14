import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function CCorporationTaxReturns() {
  return (
    <DynamicServicePage
      breadcrumbTitle="C-Corporation Tax Returns"
      breadcrumbDesc="At ProReckon, we offer expert annual tax services to meet your specific needs and strategies for every business structure."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="C-Corporation Tax Returns"
      description="Filing tax returns for C-Corporations is a crucial process that requires precision and compliance with both federal and state tax laws. ProReckon Solutions offers specialised tax return services for C-Corporations, ensuring accurate reporting of income, deductions, and credits while maximising potential tax benefits."
      serviceData={serviceData}
      additionalText="With ProReckon Solutions, the tax filing process becomes seamless. Whether you're a small business or a large corporation, our C-Corporation Tax Return service ensures accurate, efficient, and stress-free filing—helping you optimise your tax position and overall financial health."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Accurate Tax Filing",
    desc: "We ensure all tax returns are prepared with precision, reducing errors and minimising the risk of audits or penalties.",
    shortDesc: "Accurate filing for your C-Corporation to avoid audits and penalties.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Form 1120 Preparation",
    desc: "Our team meticulously handles Form 1120, the tax form specific to C-Corporations, ensuring full compliance with IRS standards.",
    shortDesc: "Expert preparation of Form 1120 for full compliance with IRS standards.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Deadline Management",
    desc: "We help you meet all tax filing deadlines, avoiding penalties and ensuring your corporation remains in good standing with tax authorities.",
    shortDesc: "Manage your tax deadlines to avoid penalties and stay in good standing.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Maximising Deductions",
    desc: "Our experts identify available deductions, credits, and incentives, helping to reduce your corporation's tax liability.",
    shortDesc: "Identify and maximise all possible deductions and credits.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Strategic Tax Planning",
    desc: "We collaborate with your business to develop tailored tax strategies that align with your financial objectives, whether it’s reducing taxes or maximising benefits.",
    shortDesc: "Tailored tax strategies to align with your financial goals.",
  },
  {
    icon: "icon-regulatory",
    category: "tax service",
    title: "Regulatory Compliance",
    desc: "We ensure your corporation complies with all federal and state regulations, minimising legal risks and financial discrepancies.",
    shortDesc: "Ensure compliance with all federal and state tax regulations.",
  },
];
