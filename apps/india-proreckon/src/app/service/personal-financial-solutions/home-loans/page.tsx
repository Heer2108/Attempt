import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function HomeLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Home Loans"
      breadcrumbDesc="A home loan is a financial product designed to help individuals or families purchase their dream home. With competitive interest rates and flexible repayment options, home loans provide an opportunity to spread the cost of a home over an extended period, making homeownership more accessible."
      breadcrumbImg="/images/banner/about4.jpg"
      heading="Home Loans"
      description="A home loan is a financial product designed to help individuals or families purchase their dream home. With competitive interest rates and flexible repayment options, home loans provide an opportunity to spread the cost of a home over an extended period, making homeownership more accessible."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="
Home loans are a practical solution for aspiring homeowners looking for flexible, affordable financing. With long tenures, tax benefits, and competitive rates, home loans make owning a home achievable for many."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "loan service",
    title: "Affordable Interest Rates",
    desc: "Home loans typically come with lower interest rates compared to other loan types, making them an affordable way to purchase a home.",
    shortDesc: "Enjoy competitive rates for affordable home financing.",
  },
  {
    icon: "icon-hand-tick",
    category: "loan service",
    title: "Flexible Repayment Tenures",
    desc: "Borrowers can choose repayment periods that suit their financial plans, with tenures ranging from 10 to 30 years.",
    shortDesc: "Choose repayment terms that fit your budget.",
  },
  {
    icon: "icon-hand-house",
    category: "loan service",
    title: "Loan-to-Value Ratio (LTV)",
    desc: "Most lenders offer up to 80-90% of the property’s value as a loan, reducing the immediate financial burden of buying a home.",
    shortDesc: "Reduce upfront costs with high LTV options.",
  },
  {
    icon: "icon-hand-house",
    category: "loan service",
    title: "Tax Benefits",
    desc: "Home loan borrowers can enjoy tax deductions on both the principal repayment and interest paid, under certain conditions.",
    shortDesc: "Maximize savings with eligible tax deductions.",
  },
  {
    icon: "icon-hand-house",
    category: "loan service",
    title: "Secure Investment",
    desc: "Investing in a home not only provides a place to live but also has the potential for long-term appreciation in value.",
    shortDesc: "Build equity and wealth through homeownership.",
  },
  {
    icon: "icon-hand-house",
    category: "loan service",
    title: "Comprehensive Support",
    desc: "We guide you through the entire home loan process, ensuring you make informed decisions for your financial future.",
    shortDesc: "Receive expert guidance for your home loan journey.",
  },
];


 