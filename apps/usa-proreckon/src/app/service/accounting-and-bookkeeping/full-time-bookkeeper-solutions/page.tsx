import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function FullTimeBookkeeperSolutions() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Full-Time Bookkeeper Solutions"
      breadcrumbDesc="ProReckon Solutions offers comprehensive Full-Time Bookkeeper services to help businesses maintain their financial well-being while easing the burden of day-to-day financial tasks."
      breadcrumbImg="/images/banner/about1.jpg" // Update the image path as needed
      heading="Full-Time Bookkeeper Solutions"
      description="A Full-Time Bookkeeper is a specialised financial expert responsible for managing and maintaining a company’s financial records with precision and accuracy. This service is crucial for businesses aiming to uphold financial transparency, meet regulatory obligations, and streamline financial management. ProReckon Solutions offers comprehensive Full-Time Bookkeeper services to help businesses maintain their financial well-being while easing the burden of day-to-day financial tasks."
      serviceData={serviceData}
      additionalText="ProReckon Solutions' Full-Time Bookkeeper service provides businesses with a dedicated financial professional to maintain accurate records, reduce errors, and ensure financial transparency. Whether you're a small business or a large organisation, our Full-Time Bookkeepers offer reliable financial management, regulatory compliance, and valuable support for informed decision-making."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "bookkeeping solution",
    title: "Continuous Financial Oversight",
    desc: "A Full-Time Bookkeeper provides ongoing financial supervision, ensuring that your financial records are always accurate and up to date.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "bookkeeping solution",
    title: "Expense Management",
    desc: "They carefully track and record all expenses, helping businesses keep an eye on spending, find cost-saving opportunities, and stay on budget.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "bookkeeping solution",
    title: "Revenue Monitoring",
    desc: "Full-Time Bookkeepers manage revenue records, making it easier to evaluate sales, income sources, and revenue patterns.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "bookkeeping solution",
    title: "Detailed Financial Reporting",
    desc: "They produce detailed financial reports, offering valuable insights into a company’s performance, cash flow, and profitability.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "bookkeeping solution",
    title: "Regulatory Compliance",
    desc: "Full-Time Bookkeepers ensure adherence to tax laws, accounting standards, and financial reporting rules, reducing the risk of penalties.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "bookkeeping solution",
    title: "Cost & Time Efficiency",
    desc: "Outsourcing full-time bookkeeping saves time and resources compared to handling it in-house, allowing businesses to focus on their core functions and growth.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
