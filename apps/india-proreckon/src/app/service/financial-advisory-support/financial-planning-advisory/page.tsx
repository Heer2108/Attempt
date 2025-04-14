import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function financialPlanningAdvisory() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Financial Planning and Advisory"
      breadcrumbDesc="Our Financial Planning and Advisory service offers tailored strategies to help you achieve your short-term and long-term financial goals, from savings and investments to retirement planning and risk management."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Financial Planning and Advisory"
      description="Sound financial planning is the cornerstone of financial success. Our Financial Planning and Advisory service offers tailored strategies to help you achieve your short-term and long-term financial goals, from savings and investments to retirement planning and risk management."
      serviceData={serviceData}
       serviceDataTitleOverrride='Key Points:'
      additionalText="
Our Financial Planning and Advisory service empowers you to take control of your financial future with confidence, ensuring you stay on course toward achieving your financial milestones."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-target", // Adjust the icon as needed, same style as before
    category: "financial service",
    title: "Goal-Oriented Planning",
    desc: "We work with you to define clear financial goals and create a roadmap to achieve them.",
    shortDesc: "Tailored financial goals with a roadmap to achieve them.",
  },
  {
    icon: "icon-line-chart", // Adjust the icon as needed
    category: "financial service",
    title: "Investment Strategies",
    desc: "Our team recommends investment options that align with your risk tolerance and growth objectives.",
    shortDesc: "Strategic investment options tailored to your risk tolerance.",
  },
  {
    icon: "icon-wallet", // Adjust the icon as needed
    category: "financial service",
    title: "Budgeting and Savings Plans",
    desc: "We help you develop effective budgeting strategies to improve savings and manage day-to-day expenses.",
    shortDesc: "Effective budgeting and saving plans to manage daily finances.",
  },
  {
    icon: "icon-calendar", // Adjust the icon as needed
    category: "financial service",
    title: "Retirement Planning",
    desc: "Our advisors ensure you're on track for a comfortable retirement with customised retirement savings plans.",
    shortDesc: "Customized retirement planning to ensure a comfortable future.",
  },
  {
    icon: "icon-shield", // Adjust the icon as needed
    category: "financial service",
    title: "Risk Management",
    desc: "We assess potential financial risks and recommend strategies to protect your assets, including insurance and diversification.",
    shortDesc: "Risk management strategies to protect your assets.",
  },
];
