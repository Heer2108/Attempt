import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function equipmentLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Equipment Loans"
      breadcrumbDesc="An Equipment Loan helps businesses acquire machinery or equipment essential for operations without depleting cash reserves. It allows companies to invest in advanced technology and tools to enhance productivity, while spreading the cost over time."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Equipment Loans"
      description="An Equipment Loan helps businesses acquire machinery or equipment essential for operations without depleting cash reserves. It allows companies to invest in advanced technology and tools to enhance productivity, while spreading the cost over time."
      serviceData={serviceData}
     serviceDataTitleOverrride='Key Points:'
      additionalText="Equipment Loans empower businesses to invest in essential machinery and tools, improving productivity without affecting cash flow. With flexible terms and favorable rates, they provide an efficient way to acquire necessary resources for growth."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "loan service",
    title: "Dedicated Loan for Equipment Purchase",
    desc: "Specifically designed to finance the acquisition of machinery, vehicles, or other equipment.",
    shortDesc: "Finance machinery, vehicles, or other equipment.",
  },
  {
    icon: "icon-hand-tick", 
    category: "loan service",
    title: "Collateral-Based Loan",
    desc: "The equipment itself usually serves as collateral, minimizing the need for additional security.",
    shortDesc: "Equipment serves as collateral for the loan.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Competitive Interest Rates",
    desc: "Equipment loans often come with favorable interest rates due to the secured nature of the loan.",
    shortDesc: "Favorable interest rates due to secured loan.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Extended Loan Tenure",
    desc: "Loans can be structured for longer terms, reducing the monthly repayment burden.",
    shortDesc: "Longer loan terms reduce monthly repayments.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "100% Financing Option",
    desc: "Some lenders offer full financing for equipment, requiring no upfront costs from the business.",
    shortDesc: "100% financing available, with no upfront costs.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Quick Disbursal",
    desc: "Equipment loans often come with fast disbursal timelines, allowing businesses to procure assets quickly.",
    shortDesc: "Fast loan disbursal for quick equipment procurement.",
  },
];
