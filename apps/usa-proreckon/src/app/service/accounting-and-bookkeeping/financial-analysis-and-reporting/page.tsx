import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function FinancialAnalysisAndReporting() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Financial Analysis & Reporting"
      breadcrumbDesc="ProReckon Solutions specialises in delivering expert Financial Reporting & Analysis services to help both businesses and individuals make well-informed financial decisions."
      breadcrumbImg="/images/banner/about1.jpg" // Update the image path as needed
      heading="Financial Analysis & Reporting"
      description="Financial Reporting & Analysis is an essential service that involves systematically reviewing, interpreting, and presenting financial data to support decision-making, ensure regulatory compliance, and manage overall financial health. This service is key to gaining insights into an organisation’s financial performance and stability. ProReckon Solutions specialises in delivering expert Financial Reporting & Analysis services to help both businesses and individuals make well-informed financial decisions."
      serviceData={serviceData}
      additionalText="ProReckon Solutions' Financial Reporting & Analysis services enable businesses and individuals to make informed decisions, maintain regulatory compliance, and effectively navigate financial complexities. Whether you're a small business owner, an investor, or an organisation, our precise analysis and reporting will help you achieve your financial objectives and long-term success."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "financial analysis",
    title: "Data Interpretation",
    desc: "We simplify complex financial data into clear, concise reports, providing clients with valuable insights into their financial performance.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "financial analysis",
    title: "Performance Evaluation",
    desc: "Our service evaluates various financial metrics like profitability, liquidity, solvency, and efficiency, offering a thorough understanding of your financial health.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "financial analysis",
    title: "Regulatory Compliance",
    desc: "We ensure financial reports adhere to accounting standards and regulatory requirements, mitigating legal and financial risks.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "financial analysis",
    title: "Strategic Decision-Making",
    desc: "Our analysis provides critical insights for strategic moves such as investments, cost control, and business expansion.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "financial analysis",
    title: "Investor Confidence",
    desc: "Transparent and accurate financial reporting builds investor trust, strengthening capital attraction and stakeholder relationships.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "financial analysis",
    title: "Budgeting Support",
    desc: "Our detailed reports assist in effective budget planning, helping clients manage resources efficiently and track their financial progress.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
