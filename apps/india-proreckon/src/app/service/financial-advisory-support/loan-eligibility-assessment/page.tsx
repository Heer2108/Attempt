import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function loanEligibilityAssessment() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Loan Eligibility Assessment"
      breadcrumbDesc="Our Loan Eligibility Assessment service helps individuals and businesses determine their qualification for various loan options based on their financial standing and objectives. We guide you through the necessary steps to improve your chances of approval and secure the best loan terms available."
      breadcrumbImg="/images/banner/about4.jpg" // Update the path as needed
      heading="Loan Eligibility Assessment"
      description="Securing a loan can be a complex process, and understanding your eligibility is the first step toward success. Our Loan Eligibility Assessment service helps individuals and businesses determine their qualification for various loan options based on their financial standing and objectives. We guide you through the necessary steps to improve your chances of approval and secure the best loan terms available."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="Our Loan Eligibility Assessment service gives you clarity and confidence, ensuring you approach lenders with the right information and strategies to improve your loan approval odds."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-hand-house", // Same icon as used earlier
    category: "loan service",
    title: "Comprehensive Financial Review",
    desc: "We analyse your income, assets, liabilities, and credit profile to assess your eligibility for different types of loans.",
    shortDesc: "Detailed analysis of your financial profile for loan eligibility.",
  },
  {
    icon: "icon-hand-house", // Same icon as used earlier
    category: "loan service",
    title: "Personalized Loan Options",
    desc: "Based on the assessment, we provide tailored recommendations on loan types, amounts, and repayment plans.",
    shortDesc: "Custom loan recommendations based on your financial assessment.",
  },
  {
    icon: "icon-hand-house", // Same icon as used earlier
    category: "loan service",
    title: "Eligibility Optimization",
    desc: "Our experts suggest strategies to improve your financial standing and enhance your chances of securing a loan.",
    shortDesc: "Expert tips to improve your financial profile for loan approval.",
  },
  {
    icon: "icon-hand-house", // Same icon as used earlier
    category: "loan service",
    title: "Documentation Assistance",
    desc: "We guide you in preparing and organising all required documents for the loan application process.",
    shortDesc: "Complete assistance in organising documents for loan applications.",
  },
  {
    icon: "icon-hand-house", // Same icon as used earlier
    category: "loan service",
    title: "Pre-Approval Guidance",
    desc: "We help you through the pre-approval process to give you a competitive edge when applying for loans.",
    shortDesc: "Step-by-step guidance for pre-approval to boost your loan application success.",
  },
];
