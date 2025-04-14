import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function VATReturnFiling() {
  return (
    <DynamicServicePage
      breadcrumbTitle="VAT Return Filing"
      breadcrumbDesc="Sales tax encompasses the collection, reporting, and payment of taxes on goods and services sold.
"
      breadcrumbImg="/images/banner/about1.jpg"
      heading="VAT Return Filing"
      description="Efficient and accurate VAT return filing is essential for businesses to stay compliant with tax regulations and avoid costly penalties. At ProReckon, we provide expert VAT return filing services tailored to meet the unique needs of businesses across various industries. Our team ensures that your VAT returns are filed on time and in accordance with the latest tax laws, helping you maintain compliance while minimising tax liabilities."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Benefits of ProReckon’s VAT Return Filing Services:'
      additionalText="ProReckon’s VAT Return Filing Services provide businesses with the peace of mind that their tax obligations are being handled by professionals. Whether you’re a small business or a large enterprise, our VAT experts ensure timely, accurate, and compliant returns, allowing you to focus on growing your business without the worry of tax issues. Let ProReckon streamline your VAT processes and reduce the administrative burden of tax compliance."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-coin-chair",
    category: "payment solution",
    title: "Timely & Accurate Filing",
    desc: "Our VAT experts ensure your returns are filed promptly and with precision, preventing delays that could lead to fines or interest charges.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-tick",
    category: "payment solution",
    title: "Compliance With Tax Laws",
    desc: "We stay up-to-date with changing tax regulations to ensure that your VAT returns comply with the latest legal requirements, minimising the risk of errors.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "VAT Calculation & Preparation",
    desc: "ProReckon meticulously calculates your VAT liabilities, including input and output tax, ensuring accurate documentation and submission.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Reduced Risk Of Penalties",
    desc: "By handling your VAT returns professionally, we help reduce the risk of underpayment, overpayment, or misreporting, safeguarding your business from potential penalties.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Streamlined Record Keeping",
    desc: "Our team organises and maintains comprehensive financial records, simplifying the VAT filing process and ensuring that all relevant documentation is readily available for audits or reviews.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },

  {
    icon: "icon-hand-house",
    category: "payment solution",
    title: "Expert Support & Guidance",
    desc: "ProReckon offers ongoing support, advising businesses on VAT-related queries and providing guidance on how to optimise VAT processes for better tax efficiency.",
    shortDesc:
      "Get personalized financial advice to help reach your financial goals.",
  },
];
 