import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function educationLoans() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Education Loans"
      breadcrumbDesc="An education loan is a financial solution designed to help students and their families cover the costs of higher education. These loans can be used for tuition, living expenses, and other academic-related costs, easing the financial burden of pursuing education."
      breadcrumbImg="/images/banner/about4.jpg" // 
      heading="Education Loans"
      description="An education loan is a financial solution designed to help students and their families cover the costs of higher education. These loans can be used for tuition, living expenses, and other academic-related costs, easing the financial burden of pursuing education."
      serviceData={serviceData}
       serviceDataTitleOverrride='Key Points:'
      additionalText="Education loans are a smart choice for students seeking to invest in their future without the immediate financial strain. With flexible repayment options and competitive rates, education loans empower students to focus on their studies, knowing their financial needs are covered."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair", 
    category: "loan service",
    title: "Covers All Education Expenses",
    desc: "Education loans typically cover tuition fees, books, accommodation, and other related academic expenses.",
    shortDesc: "Covers tuition, living, and academic-related costs.",
  },
  {
    icon: "icon-hand-tick", 
    category: "loan service",
    title: "Flexible Repayment Options",
    desc: "Repayment can often start after the completion of the course, with grace periods and flexible tenure options.",
    shortDesc: "Start repayment after completing your course.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Competitive Interest Rates",
    desc: "Education loans generally offer lower interest rates compared to other personal loans, making them an affordable option for students.",
    shortDesc: "Lower interest rates for students.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Government Subsidies",
    desc: "Certain education loans may come with interest subsidies from the government, especially for economically disadvantaged students.",
    shortDesc: "Potential interest subsidies from the government.",
  },
  {
    icon: "icon-hand-house", 
    category: "loan service",
    title: "Builds Credit History",
    desc: "Repaying an education loan on time helps students build a positive credit history, benefiting future financial dealings.",
    shortDesc: "Build a positive credit history through timely repayment.",
  },
];



 