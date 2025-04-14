import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function personalLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Personal Loans"
      breadcrumbDesc="A personal loan is a versatile financial tool that allows individuals to borrow money for a wide range of needs, from emergency expenses to large purchases. Unsecured and easy to obtain, personal loans provide quick access to funds without the need for collateral."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Personal Loans"
      description="A personal loan is a versatile financial tool that allows individuals to borrow money for a wide range of needs, from emergency expenses to large purchases. Unsecured and easy to obtain, personal loans provide quick access to funds without the need for collateral."
      serviceData={serviceData}
       serviceDataTitleOverrride='Key Points:'
      additionalText="Personal loans provide financial flexibility and convenience, offering quick access to funds without any strings attached. Whether it’s an emergency or a planned expense, a personal loan can be tailored to meet your unique financial needs.
"
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair", // Keeping the same icon as before
    category: "loan service",
    title: "No Collateral Required",
    desc: "Personal loans are unsecured, meaning you don’t have to pledge any assets to secure the loan.",
    shortDesc: "Borrow without the need for collateral.",
  },
  {
    icon: "icon-hand-tick", // Keeping the same icon as before
    category: "loan service",
    title: "Quick Approval Process",
    desc: "With minimal paperwork and fast processing times, personal loans are a great option for those needing funds in a short time frame.",
    shortDesc: "Fast access to funds with quick approvals.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Flexible Usage",
    desc: "Unlike specific loans, personal loans can be used for a variety of purposes, such as home renovation, medical expenses, travel, or debt consolidation.",
    shortDesc: "Use the funds for what you need most.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Flexible Tenures",
    desc: "Borrowers can choose from flexible repayment options, typically ranging from 1 to 5 years.",
    shortDesc: "Select a repayment term that fits your budget.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Fixed Interest Rates",
    desc: "Most personal loans come with fixed interest rates, ensuring predictable monthly payments throughout the loan term.",
    shortDesc: "Know your payment amount each month.",
  },
];



 