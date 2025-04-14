import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function businessLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Business Loans"
      breadcrumbDesc="A business loan is designed to provide the capital you need to grow, manage cash flow, or meet urgent financial obligations. Whether you're looking to expand your operations or invest in new opportunities, a business loan offers flexible solutions to meet your unique financial needs."
      breadcrumbImg="/images/banner/about4.jpg" // 
      heading="Business Loans"
      description="A business loan is designed to provide the capital you need to grow, manage cash flow, or meet urgent financial obligations. Whether you're looking to expand your operations or invest in new opportunities, a business loan offers flexible solutions to meet your unique financial needs."
      serviceData={serviceData}
     serviceDataTitleOverrride='Key Points:'
      additionalText="A business loan is a powerful tool for fueling growth and managing business challenges. With flexible terms and easy access to capital, it provides the financial boost needed to take your business to new heights."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair", 
    category: "loan service",
    title: "Flexible Loan Amounts",
    desc: "Businesses can access varying loan amounts based on their requirements and repayment capacity.",
    shortDesc: "Access loan amounts tailored to your needs.",
  },
  {
    icon: "icon-hand-tick", 
    category: "loan service",
    title: "Customizable Tenure",
    desc: "Loan terms are adjustable to suit cash flow cycles, allowing for better financial planning.",
    shortDesc: "Adjust loan terms for optimal cash flow management.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "No Collateral Required (Unsecured Loans)",
    desc: "Many business loans don’t require collateral, reducing risk for small and medium-sized businesses.",
    shortDesc: "Secure funding without pledging assets.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Quick Approval Process",
    desc: "Many lenders offer expedited loan approvals, providing quick access to funds.",
    shortDesc: "Get funds swiftly with fast loan approvals.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Low-Interest Rates for Established Businesses",
    desc: "Established businesses with strong financials can enjoy competitive interest rates.",
    shortDesc: "Enjoy competitive rates for established enterprises.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Tax Benefits",
    desc: "Interest paid on business loans can be tax-deductible, reducing the overall tax burden.",
    shortDesc: "Potential tax deductions on interest payments.",
  },
];
