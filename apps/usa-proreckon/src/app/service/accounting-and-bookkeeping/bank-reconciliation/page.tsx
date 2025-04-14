import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function BankReconciliation() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Bank reconciliation"
      breadcrumbDesc="At ProReckon, we specialise in delivering a full suite of accounting and bookkeeping services tailored for businesses across the USA."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Bank reconciliation"
      description="Bank reconciliation is a vital financial process that ensures a company's records align accurately with its bank statements. This involves matching transactions between the company's books and the bank, identifying any discrepancies, and reconciling balances. At ProReckon Solutions, our expert bank reconciliation services give businesses confidence in their financial data by reducing errors and ensuring compliance with regulations."
      serviceData={serviceData}
      additionalText="ProReckon Solutions’ bank reconciliation service ensures businesses, whether small or large, maintain accurate, compliant, and error-free records. Our precise reconciliations give you the peace of mind to focus on making informed financial decisions and managing your business effectively."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Transaction Verification",
    desc: "Each transaction in the company's records is checked against the bank statement, ensuring accuracy and eliminating any mismatches.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Error Detection",
    desc: "Discrepancies, such as missing entries or incorrect amounts, are promptly identified and corrected, minimising financial inaccuracies.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Regulatory Compliance",
    desc: "Bank reconciliation plays a key role in adhering to financial reporting standards and audits, promoting transparency in financial records.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Fraud Prevention",
    desc: "It helps detect unauthorised or fraudulent transactions, safeguarding the financial health of the business.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Cash Flow Management",
    desc: "Accurate reconciliation enables effective cash flow management by ensuring that recorded transactions match available funds.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Informed Financial Decisions",
    desc: "By providing a clear financial overview, bank reconciliation supports better budgeting, expense tracking, and strategic decision-making.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
