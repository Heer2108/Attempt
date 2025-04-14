import DynamicServicePage from "@/components/DynamicServicePage/ServicePage";
import { ServiceType } from "@/type/ServiceType";

export default function loanAgainstProperty() {
  return (
    <DynamicServicePage
      breadcrumbTitle="Loan Against Property (LAP)"
      breadcrumbDesc="A Loan Against Property (LAP) allows you to leverage the value of your property to meet your financial needs. By offering your residential or commercial property as collateral, you can secure a high-value loan at lower interest rates, making it an ideal option for large financial requirements."
      breadcrumbImg="/images/banner/about4.jpg" 
      heading="Loan Against Property (LAP)"
      description="A Loan Against Property (LAP) allows you to leverage the value of your property to meet your financial needs. By offering your residential or commercial property as collateral, you can secure a high-value loan at lower interest rates, making it an ideal option for large financial requirements."
      serviceData={serviceData}
      serviceDataTitleOverrride='Key Points:'
      additionalText="Loan Against Property (LAP) is an excellent way to unlock the value of your assets while retaining ownership. With large loan amounts, lower interest rates, and flexible repayment options, it provides a reliable solution for meeting significant financial needs."
    />
  );
}

const serviceData: ServiceType[] = [
  {
    icon: "icon-home-currency", 
    category: "loan service",
    title: "Large Loan Amounts",
    desc: "LAP enables you to borrow substantial amounts, typically up to 60-70% of the property’s market value.",
    shortDesc: "Borrow up to 60-70% of your property’s value.",
  },
  {
    icon: "icon-money-check-edit", 
    category: "loan service",
    title: "Lower Interest Rates",
    desc: "Since the loan is secured by property, lenders often offer lower interest rates compared to unsecured loans.",
    shortDesc: "Benefit from lower interest rates due to secured loan.",
  },
  {
    icon: "icon-credit-card-plus", 
    category: "loan service",
    title: "Flexible Usage",
    desc: "The loan amount can be used for multiple purposes, including business expansion, education, or personal expenses.",
    shortDesc: "Use the loan for business, education, or personal needs.",
  },
  {
    icon: "icon-timer-sand",
    category: "loan service",
    title: "Longer Repayment Tenure",
    desc: "LAP offers extended repayment tenures, making it easier to manage EMI payments over a longer period.",
    shortDesc: "Extended repayment periods for easier EMI management.",
  },
  {
    icon: "icon-shield-check", 
    category: "loan service",
    title: "Retain Property Ownership",
    desc: "You continue to own and use the property while leveraging its value to meet your financial needs.",
    shortDesc: "Leverage property value without losing ownership.",
  },
  {
    icon: "icon-receipt-text", 
    category: "loan service",
    title: "Tax Benefits",
    desc: "Interest paid on LAP can sometimes be tax-deductible if the loan is used for specific purposes like business expansion.",
    shortDesc: "Potential tax benefits on interest paid for LAP.",
  },
];
