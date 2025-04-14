import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function AccountsRecievableAndPayable() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Accounts Receivable & Payable"
      breadcrumbDesc="At ProReckon, we specialise in delivering a full suite of accounting and bookkeeping services tailored for businesses across the Australia."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="Accounts Receivable & Payable"
      description="Accounts Receivables and Payables Management plays a critical role in maintaining a business's cash flow by effectively handling incoming payments from customers (accounts receivables) and outgoing payments to suppliers and creditors (accounts payables). This service promotes financial stability and liquidity, minimising delays, errors, and disputes in transactions. At ProReckon Solutions, we specialise in delivering expert Accounts Receivables and Payables Management services to streamline the financial operations of businesses of all sizes."
      serviceData={serviceData}
      additionalText="At ProReckon Solutions, our Accounts Receivables and Payables Management services are tailored to improve the financial health of your business. Whether you're a small business or a large corporation, our expertise ensures the smooth handling of your financial operations, reduces delays, and helps maintain financial stability."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Cash Flow Optimization",
    desc: "We manage receivables and payables to optimise cash flow, ensuring funds are available for operational needs, investments, and growth opportunities.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Payment Tracking",
    desc: "Our services include tracking and managing payments to suppliers and creditors, reducing the risk of late payments, penalties, and financial disputes.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Invoice Management",
    desc: "We handle the creation and distribution of invoices, ensuring timely payments and minimising delays.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Customer and Supplier Relations",
    desc: "Efficient management helps maintain strong relationships with both customers and suppliers, fostering trust and dependability.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Financial Efficiency",
    desc: "We reduce errors in financial transactions, enhancing accuracy and efficiency in record-keeping.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Reporting & Analytics",
    desc: "Our detailed reporting and analytics offer valuable insights into your accounts, supporting strategic financial decisions.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
