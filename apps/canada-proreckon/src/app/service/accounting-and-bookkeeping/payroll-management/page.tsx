import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function PayrollManagement() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Payroll Management"
      breadcrumbDesc="At ProReckon, we specialise in delivering a full suite of accounting and bookkeeping services tailored for businesses across the Canada."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Payroll Management"
      description="Payroll Management is a vital financial service that handles the administration and processing of employee compensation, including wages, taxes, and benefits. As a crucial element for every business, it ensures that employees are compensated accurately while adhering to tax and labour regulations. At ProReckon Solutions, we offer expert Payroll Management services to streamline this complex process, minimise errors, and boost efficiency for businesses of all sizes."
      serviceData={serviceData}
      additionalText="ProReckon Solutions is here to simplify your payroll process, ensuring both compliance and precision. Whether you're a small business or a large enterprise, our services save you time, reduce errors, and improve the overall efficiency of your payroll operations."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Seamless Payroll Processing",
    desc: "We ensure timely and accurate calculation of employee wages, taxes, and benefits, guaranteeing on-time payments.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Tax Compliance",
    desc: "Our payroll services cover tax calculations, deductions, and filings, ensuring your business remains compliant with tax regulations and avoids penalties.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Cost Efficiency",
    desc: "Outsourcing payroll management often proves more cost-effective than handling it internally, freeing up time and resources.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Error Minimization",
    desc: "We significantly reduce the risk of payroll errors, avoiding potential employee dissatisfaction, legal complications, and financial discrepancies.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Direct Deposit Convenience",
    desc: "We provide direct deposit services, ensuring employees receive their salaries promptly and securely, without the hassle of paper checks.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Comprehensive Record-Keeping",
    desc: "Our service includes accurate, well-organised payroll records for audits, reporting, and informed decision-making.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
