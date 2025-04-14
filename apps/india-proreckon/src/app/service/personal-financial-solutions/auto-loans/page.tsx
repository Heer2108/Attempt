import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function autoLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Auto Loans"
      breadcrumbDesc="Auto loans are a type of financing designed to help individuals purchase vehicles, whether new or used. With competitive rates and tailored repayment options, auto loans make owning a car more affordable by spreading the cost over a period of time."
      breadcrumbImg="/images/banner/about4.jpg" // Update this path as needed
      heading="Auto Loans"
      description="Auto loans are a type of financing designed to help individuals purchase vehicles, whether new or used. With competitive rates and tailored repayment options, auto loans make owning a car more affordable by spreading the cost over a period of time."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="
Auto loans provide a hassle-free way to finance your next vehicle, with affordable interest rates and flexible terms. Whether it’s a new car or a used one, an auto loan ensures you can hit the road without straining your finances."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair", // Keeping the same icon as before
    category: "loan service",
    title: "Low Interest Rates",
    desc: "Auto loans generally come with lower interest rates compared to personal loans, making car ownership more affordable.",
    shortDesc: "Affordable interest rates for vehicle financing.",
  },
  {
    icon: "icon-hand-tick", // Keeping the same icon as before
    category: "loan service",
    title: "Flexible Loan Terms",
    desc: "Borrowers can choose repayment periods that align with their budget, typically ranging from 3 to 7 years.",
    shortDesc: "Select a repayment term that fits your budget.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Fixed or Variable Interest Options",
    desc: "Lenders may offer both fixed and variable interest rates, allowing borrowers to choose based on their financial preferences.",
    shortDesc: "Choose an interest rate type that suits your needs.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Pre-Approval Benefits",
    desc: "Getting pre-approved for an auto loan helps you know your budget before shopping for a car, giving you better negotiating power with dealers.",
    shortDesc: "Know your budget before you shop.",
  },
  {
    icon: "icon-hand-house", // Keeping the same icon as before
    category: "loan service",
    title: "Car as Collateral",
    desc: "Since the vehicle itself acts as collateral, interest rates tend to be lower, and it’s easier to qualify for an auto loan compared to unsecured loans.",
    shortDesc: "Easier qualification with the car as collateral.",
  },
];


 