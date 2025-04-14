import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function creditScoreImprovement() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Credit Score Improvement Services"
      breadcrumbDesc="Our Credit Score Improvement Services are designed to help you enhance your creditworthiness, unlocking better financial opportunities and lower interest rates on loans and credit cards."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Credit Score Improvement Services"
      description="Your credit score plays a vital role in determining your financial future. Our Credit Score Improvement Services are designed to help you enhance your creditworthiness, unlocking better financial opportunities and lower interest rates on loans and credit cards."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="With our Credit Score Improvement Services, you can confidently take steps toward a better credit rating, which can open doors to favourable financial products and opportunities."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Credit Report Analysis",
    desc: "We thoroughly review your credit report to identify factors that may be negatively impacting your score.",
    shortDesc: "Detailed credit report analysis to identify score-impacting issues.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Error Correction",
    desc: "Our team assists in disputing and correcting errors on your credit report that could be lowering your score.",
    shortDesc: "Dispute and correct errors on your credit report.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Debt Management Advice",
    desc: "We offer personalised advice on reducing outstanding debt, which is a key factor in improving your credit score.",
    shortDesc: "Expert advice on managing and reducing outstanding debt.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Payment History Improvement",
    desc: "We help you create a strategy for consistent on-time payments to boost your score over time.",
    shortDesc: "Develop a strategy for improving your payment history.",
  },
  {
    icon: "icon-hand-house", 
    category: "financial service",
    title: "Credit Mix Optimization",
    desc: "Our experts provide guidance on managing a balanced mix of credit to improve your creditworthiness.",
    shortDesc: "Optimize your credit mix to improve overall creditworthiness.",
  },
];
