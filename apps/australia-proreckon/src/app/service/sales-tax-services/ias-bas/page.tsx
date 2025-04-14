import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function IASBAS() {
  return (
    <DynamicServicePage
      breadcrumbTitle="IAS/BAS"
      breadcrumbDesc="IAS/BAS involves managing the taxes applied to sales of goods and services. We ensure that your business meets all regulatory requirements efficiently while minimising the risk of errors and penalties."
      breadcrumbImg="/images/banner/about1.jpg"
      heading="IAS/BAS"
      description="Accurate preparation and filing of your Instalment Activity Statements (IAS) or Business Activity Statements (BAS) are crucial for Australian businesses. ProReckon Solutions provides reliable IAS/BAS preparation and filing services to ensure businesses meet their tax obligations while optimising their cash flow."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Features:'
      additionalText="ProReckon Solutions’ IAS/BAS preparation and filing services take the complexity out of tax reporting, giving you peace of mind that your business is compliant and financially optimised. Let us help you focus on what matters most—growing your business."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "tax service",
    title: "Accurate IAS/BAS Reporting",
    desc: "We ensure precise reporting of GST, PAYG (Pay As You Go), and other obligations, keeping your business compliant.",
    shortDesc: "Precise IAS/BAS reporting for compliance with GST, PAYG, and other obligations.",
  },
  {
    icon: "icon-hand-tick",
    category: "tax service",
    title: "Optimised Cash Flow",
    desc: "Our services include advice on managing cash flow through accurate tax planning and installment reporting.",
    shortDesc: "Accurate tax planning and installment reporting to optimise your cash flow.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Comprehensive Record Keeping",
    desc: "We maintain detailed records to support your IAS/BAS filings, ensuring a smooth audit process if required.",
    shortDesc: "Maintain detailed records for seamless IAS/BAS filings and audit readiness.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "GST Reconciliation",
    desc: "We reconcile your GST liabilities and Input Tax Credits to minimise tax payments and avoid errors in reporting.",
    shortDesc: "Reconcile GST liabilities and Input Tax Credits to avoid reporting errors.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Timely Filing",
    desc: "We ensure all IAS/BAS filings are completed and submitted on time, helping you avoid penalties and interest charges.",
    shortDesc: "Ensure timely IAS/BAS filing to avoid penalties and interest charges.",
  },
  {
    icon: "icon-hand-house",
    category: "tax service",
    title: "Audit Support",
    desc: "In case of an audit, we provide full support, ensuring that all documentation and filings are in order, helping you navigate the process smoothly.",
    shortDesc: "Comprehensive audit support to ensure compliance and peace of mind.",
  },
];

 