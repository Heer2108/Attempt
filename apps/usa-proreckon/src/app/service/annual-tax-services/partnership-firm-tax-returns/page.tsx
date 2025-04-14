import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function PartnershipFirmTaxReturns() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Partnership Firm Tax Returns"
      breadcrumbDesc="At ProReckon, we offer expert annual tax services to meet your specific needs and strategies for every business structure."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Partnership Firm Tax Returns"
      description="Partnership Firm Tax Returns in the United States is a specialized financial service focused on preparing and filing tax returns for partnership businesses. It is essential for these firms to accurately report their income, deductions, and credits while adhering to both federal and state tax regulations. ProReckon Solutions offers expert services in this area, guiding businesses through the complexities of tax filing and helping to optimise potential tax benefits."
      serviceData={serviceData}
      //contentImage=""
      additionalText="ProReckon Solutions simplifies the tax filing process for partnership firms across the United States. Whether you’re a small or large partnership, our expertise ensures accurate, efficient, and stress-free tax filing, helping your business retain more of its profits."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Precise Tax Filing",
    desc: "We ensure partnership tax returns are completed with precision, reducing errors and minimising the risk of audits or penalties.",
    shortDesc: "Precision in tax return preparation to avoid errors and penalties.",
  },
  {
    icon: "icon-calculator",
    category: "tax service",
    title: "Income Distribution",
    desc: "Our services include the proper allocation of income and deductions among partners, ensuring fairness and compliance with tax laws.",
    shortDesc: "Fair allocation of income and deductions among partners.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Timely Compliance",
    desc: "We assist in meeting tax filing deadlines, preventing late penalties, and keeping the partnership in good standing with tax authorities.",
    shortDesc: "Ensure timely filing to avoid penalties and maintain compliance.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Form Preparation",
    desc: "We handle the preparation of all required tax forms, including Form 1065, ensuring full compliance with IRS regulations.",
    shortDesc: "Preparation of all required forms, including Form 1065.",
  },
  {
    icon: "icon-documents",
    category: "tax service",
    title: "K-1 Statement Generation",
    desc: "Our team generates and distributes K-1 statements to each partner, detailing their share of income and deductions for individual tax filing.",
    shortDesc: "Generate and distribute K-1 statements for accurate individual filing.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Tax Liability Reduction",
    desc: "We help partnership firms navigate the tax process to minimise liability and maximise available tax benefits.",
    shortDesc: "Minimise tax liability and maximise available benefits.",
  },
];
