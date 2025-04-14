import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function cashCreditOverdraft() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Cash Credit/Overdraft Facilities"
      breadcrumbDesc="Cash Credit and Overdraft Facilities offer businesses the convenience of accessing funds whenever they need them, ensuring that working capital requirements are always met. These flexible credit options provide a revolving credit line that businesses can draw upon, offering peace of mind and financial liquidity."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Cash Credit/Overdraft Facilities"
      description="Cash Credit and Overdraft Facilities offer businesses the convenience of accessing funds whenever they need them, ensuring that working capital requirements are always met. These flexible credit options provide a revolving credit line that businesses can draw upon, offering peace of mind and financial liquidity."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="
Cash Credit and Overdraft Facilities are ideal for businesses seeking flexible, on-demand funding solutions. By offering easy access to working capital and charging interest only on what’s utilised, these facilities provide businesses with the liquidity needed to manage operations smoothly."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair", // Keeping the same icon as before
    category: "loan service",
    title: "Revolving Credit",
    desc: "Businesses can withdraw funds up to a pre-approved limit, repay, and reuse the credit multiple times.",
    shortDesc: "Withdraw, repay, and reuse credit multiple times.",
  },
  {
    icon: "icon-hand-tick", // Keeping the same icon as before
    category: "loan service",
    title: "Interest on Utilized Amount",
    desc: "Interest is charged only on the amount of credit used, not on the entire sanctioned limit.",
    shortDesc: "Interest is charged only on the used credit.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Enhanced Working Capital",
    desc: "Helps businesses maintain a steady flow of working capital to manage day-to-day operations.",
    shortDesc: "Maintain steady working capital for operations.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "No Fixed Repayment Schedule",
    desc: "Flexible repayment schedules allow businesses to pay back the credit as per cash flow availability.",
    shortDesc: "Repay on a flexible schedule based on cash flow.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Collateral Security",
    desc: "Cash credit facilities typically require collateral, such as inventory or receivables.",
    shortDesc: "Credit facilities often require collateral security.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "No Penalty for Prepayment",
    desc: "Businesses can repay the overdraft anytime without facing prepayment penalties.",
    shortDesc: "Repay without prepayment penalties.",
  },
];
