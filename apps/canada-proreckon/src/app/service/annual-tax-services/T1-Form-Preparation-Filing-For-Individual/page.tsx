import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function T1FormPreparationFilingForIndividual() {
  return (
    <DynamicServicePage
      breadcrumbTitle="T1 Form Preparation & Filing (For Individual)"
      breadcrumbDesc="Annual tax services include meticulous preparation and filing of T1 Forms for individuals and T2 Forms for corporations."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="T1 Form Preparation & Filing (For Individual)"
      description="Handling personal taxes can be a daunting task, especially with the complexities involved in preparing and filing a T1 form. At ProReckon Solutions, we offer professional T1 Form Preparation & Filing services that ensure accuracy, compliance, and timeliness. Whether you are an individual or a self-employed professional, we help you navigate the tax process efficiently, maximising your deductions while ensuring all relevant tax laws are adhered to."
      serviceData={serviceData}
      additionalText="ProReckon Solutions takes the stress out of personal tax filing by offering expert T1 Form Preparation & Filing services. With our team managing your tax return, you can rest easy knowing your taxes are prepared with precision, filed on time, and optimised for maximum benefits. Let us handle the details, so you can focus on your personal and professional pursuits."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Accurate Income Reporting",
    desc: "We ensure precise documentation of all income sources, including employment income, investment returns, rental income, and self-employment earnings.",
    shortDesc: "Accurate filing for your C-Corporation to avoid audits and penalties.",
  },
  {
    icon: "icon-file",
    category: "tax service",
    title: "Maximising Deductions",
    desc: "Our experts identify eligible tax deductions and credits, ensuring you take full advantage of what’s available, such as RRSP contributions, medical expenses, and charitable donations.",
    shortDesc: "Expert preparation of Form 1120 for full compliance with IRS standards.",
  },
  {
    icon: "icon-calendar",
    category: "tax service",
    title: "Compliance With Tax Regulations",
    desc: "We stay up-to-date with tax law changes to ensure your T1 form is filed in full compliance with current regulations, reducing the risk of penalties or audits.",
    shortDesc: "Manage your tax deadlines to avoid penalties and stay in good standing.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Tax Planning & Optimization",
    desc: "Our service includes forward-looking tax strategies to help you minimise liabilities for the current year and plan for the future.",
    shortDesc: "Identify and maximise all possible deductions and credits.",
  },
  {
    icon: "icon-strategy",
    category: "tax service",
    title: "Timely Filing",
    desc: "We guarantee timely submission of your T1 form, ensuring you meet important deadlines and avoid late fees or interest charges.",
    shortDesc: "Tailored tax strategies to align with your financial goals.",
  },
  {
    icon: "icon-regulatory",
    category: "tax service",
    title: "Personalised Support",
    desc: "Each client's tax situation is unique. We offer personalised guidance to ensure your tax return reflects your financial circumstances accurately.",
    shortDesc: "Ensure compliance with all federal and state tax regulations.",
  },
];
