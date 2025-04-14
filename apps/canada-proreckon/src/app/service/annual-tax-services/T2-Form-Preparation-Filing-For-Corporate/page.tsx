import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function T2FormPreparationFilingForCorporate() {
  return (
    <DynamicServicePage
      breadcrumbTitle="T2 Form Preparation & Filing (For Corporate)"
      breadcrumbDesc="Annual tax services include meticulous preparation and filing of T1 Forms for individuals and T2 Forms for corporations."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="T2 Form Preparation & Filing (For Corporate)"
      description="For corporations, tax filing is a complex process that demands accuracy and strategic planning. ProReckon Solutions specialises in T2 Form Preparation & Filing, ensuring that your business's tax obligations are met while optimising your tax position. Whether you're a small business or a large enterprise, our team of experts manages the intricacies of corporate tax filing, helping you comply with regulations and minimise liabilities."
      serviceData={serviceData}
      additionalText="ProReckon Solutions’ T2 Form Preparation & Filing services help corporations stay compliant while optimising their tax position. Our experienced team takes a comprehensive approach to corporate tax management, ensuring all income, deductions, and strategies are accurately accounted for. Trust us to handle your corporate tax filing with precision and expertise, allowing your business to focus on growth and success."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Corporate Income Reporting",
    desc: "We accurately report all corporate income, including business earnings, investments, and other financial activities, ensuring transparency and compliance.",
    shortDesc: "Accurate filing for your corporation to avoid audits and penalties.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Claiming Business Deductions",
    desc: "Our team identifies and applies all applicable business deductions, such as operating expenses, capital costs, and depreciation, helping reduce your taxable income.",
    shortDesc: "Expert preparation of deductions to ensure full compliance.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Tax Compliance & Regulatory Adherence",
    desc: "ProReckon Solutions ensures your T2 form complies with federal and provincial tax laws, reducing the risk of audits or penalties.",
    shortDesc: "Stay compliant with current tax regulations and deadlines.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Capital Gains & Losses Management",
    desc: "We carefully manage and report capital gains and losses to help you strategically minimise corporate taxes.",
    shortDesc: "Strategically manage gains and losses for tax optimisation.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Efficient Filing & Documentation",
    desc: "From gathering necessary documentation to filing your T2 form on time, we handle every step of the process efficiently, ensuring deadlines are met without hassle.",
    shortDesc: "Efficient documentation and filing to meet important deadlines.",
  },
  {
    icon: "icon-regulatory",
    category: "tax service",
    title: "Tax Strategy For Growth",
    desc: "We work with you to develop tax strategies that align with your business goals, positioning your company for growth and profitability while minimising tax exposure.",
    shortDesc: "Develop growth-aligned tax strategies to minimise liabilities.",
  },
];

