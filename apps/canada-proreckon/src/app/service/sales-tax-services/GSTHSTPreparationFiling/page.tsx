import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function GSTHSTPreparationFiling() {
  return (
    <DynamicServicePage
      breadcrumbTitle="GST/HST Preparation & Filing"
      breadcrumbDesc="Sales tax involves managing the taxes applied to sales of goods and services. We ensure that your business meets all regulatory requirements efficiently while minimising the risk of errors and penalties.
"
      breadcrumbImg="/images/banner/about1.jpg"
      heading="GST/HST Preparation & Filing"
      description="Efficient GST/HST preparation and filing is essential for businesses operating in Canada. Ensuring accurate calculation and timely submission of Goods and Services Tax (GST) or Harmonized Sales Tax (HST) is crucial to avoid penalties and ensure compliance with Canada’s tax laws. At ProReckon Solutions, we offer comprehensive GST/HST services to help businesses manage this process smoothly."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Features:'
      additionalText="With ProReckon Solutions, your GST/HST preparation and filing are handled with precision and care. Let us manage the complexities so you can focus on growing your business."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Accurate Tax Calculation",
    desc: "We ensure your GST/HST is calculated accurately, based on your business's revenue and applicable tax rates",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Timely Filing",
    desc: "ProReckon handles the timely submission of GST/HST returns, ensuring compliance with Canada Revenue Agency (CRA) deadlines.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Input Tax Credits",
    desc: "Our service ensures that eligible Input Tax Credits (ITCs) are applied to reduce your tax liability.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Record Keeping:",
    desc: "We maintain thorough records of all transactions, making future audits and compliance checks seamless.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Tax Planning:",
    desc: "Proactive advice on tax-saving opportunities and strategies to reduce your GST/HST liability.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Audit Support",
    desc: "In case of a CRA audit, we provide full support, ensuring that all documentation and filings are in order, helping you navigate the audit process smoothly.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
 