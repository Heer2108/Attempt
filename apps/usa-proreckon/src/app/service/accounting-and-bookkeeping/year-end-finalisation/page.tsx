import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function YearEndFinalisation() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Year End Finalisation"
      breadcrumbDesc="At ProReckon, we specialise in delivering a full suite of accounting and bookkeeping services tailored for businesses across the USA."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Year End Finalisation"
      description="As the financial year draws to a close, the process of year-end finalisation becomes critical for businesses to ensure accurate, organised, and compliant financial records. ProReckon Solutions offers expert Year-End Finalisation services, designed to simplify this crucial process, minimise errors, and ensure that all financial reports meet regulatory standards. With our experienced team, businesses can focus on future planning while we handle the complexities of closing their books for the year."
      serviceData={serviceData}
      additionalText="At ProReckon Solutions, we understand that the year-end finalisation process is vital for maintaining the financial health of your business. Our team of experts is committed to making this process seamless, accurate, and stress-free, allowing you to focus on growth and strategy for the future. With our Year-End Finalisation services, you can rest assured that your financial records are compliant, your tax obligations are met, and your business is ready for the next fiscal year."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Comprehensive Financial Review",
    desc: "Our team conducts a thorough review of your financial records, ensuring accuracy and completeness in all transactions for the year. We identify discrepancies and correct them before finalising the accounts.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Accurate Financial Statements",
    desc: "We prepare detailed financial statements, including the balance sheet, profit and loss statements, and cash flow reports, providing a clear view of your company’s financial performance over the year.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Tax Compliance",
    desc: "ProReckon ensures that all tax obligations are met, preparing tax reports and documents necessary for filing. This helps businesses avoid penalties and stay compliant with local and federal tax regulations.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Expense and Revenue Reconciliation",
    desc: "Our experts reconcile all accounts, ensuring that every revenue and expense entry is accurate. This guarantees financial transparency and allows businesses to maintain precise records.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Asset and Liability Assessment",
    desc: "We assess your company’s assets and liabilities, adjusting for depreciation, debt, and other financial obligations. This ensures an accurate representation of the company’s financial standing.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Audit Preparation",
    desc: "ProReckon prepares your financial records for external audits, ensuring all documents and reports are audit-ready and compliant with accounting standards.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
 