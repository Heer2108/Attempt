export enum COUNTRIES {
  AUSTRALIA = "Australia",
  USA = "USA",
  CANADA = "Canada",
  INDIA = "India",
}

export const getServicesBasedOnCountries = (country: COUNTRIES | null, ref: any) => {
  switch (country) {
    case COUNTRIES.AUSTRALIA:
      return (
        <select
          className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
          name="form"
          ref={ref}
        >
          <option label="Select Service" selected>
            Select Service
          </option>
          {Object.keys(servicesByCountry.AUSTRALIA).map(
            (key: string, index: number) => {
              return (
                <optgroup
                  key={`${key}+${index}+${COUNTRIES.AUSTRALIA}`}
                  label={key}
                >
                  {(servicesByCountry.AUSTRALIA[key] as Array<string>)?.map(
                    (item: string, index: number) => (
                      <option
                        value={item}
                        key={`${item}+${index}+${COUNTRIES.AUSTRALIA}`}
                      >
                        {item}
                      </option>
                    )
                  )}
                </optgroup>
              );
            }
          )}
        </select>
      );
    case COUNTRIES.USA:
      return (
        <select
          className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
          name="form"
          ref={ref}
        >
          <option label="Select Service" selected>
            Select Service
          </option>
          {Object.keys(servicesByCountry.USA).map(
            (key: string, index: number) => {
              return (
                <optgroup key={`${key}+${index}+${COUNTRIES.USA}`} label={key}>
                  {(servicesByCountry.USA[key] as Array<string>)?.map(
                    (item: string, index: number) => (
                      <option
                        value={item}
                        key={`${item}+${index}+${COUNTRIES.USA}`}
                      >
                        {item}
                      </option>
                    )
                  )}
                </optgroup>
              );
            }
          )}
        </select>
      );
    case COUNTRIES.CANADA:
      return (
        <select
          className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
          name="form"
          ref={ref}
        >
          <option label="Select Service" selected>
            Select Service
          </option>
          {Object.keys(servicesByCountry.CANADA).map(
            (key: string, index: number) => {
              return (
                <optgroup
                  key={`${key}+${index}+${COUNTRIES.CANADA}`}
                  label={key}
                >
                  {(servicesByCountry.CANADA[key] as Array<string>)?.map(
                    (item: string, index: number) => (
                      <option
                        value={item}
                        key={`${item}+${index}+${COUNTRIES.CANADA}`}
                      >
                        {item}
                      </option>
                    )
                  )}
                </optgroup>
              );
            }
          )}
        </select>
      );
    case COUNTRIES.INDIA:
      return (
        <select
          className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
          name="form"
          ref={ref}
        >
          <option label="Select Service" selected>
            Select Service
          </option>
          {Object.keys(servicesByCountry.INDIA).map(
            (key: string, index: number) => {
              return (
                <optgroup
                  key={`${key}+${index}+${COUNTRIES.INDIA}`}
                  label={key}
                >
                  {(servicesByCountry.INDIA[key] as Array<string>)?.map(
                    (item: string, index: number) => (
                      <option
                        value={item}
                        key={`${item}+${index}+${COUNTRIES.INDIA}`}
                      >
                        {item}
                      </option>
                    )
                  )}
                </optgroup>
              );
            }
          )}
        </select>
      );
    default:
      return (
        <select
          className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg"
          name="form"
          ref={ref}
        >
          <option label="Select Service" disabled selected>
            Select Service
          </option>
          <option value="Others">Others</option>
        </select>
      );
  }
};

export const getCountryCode = (country: COUNTRIES | null) => {
  switch (country) {
    case COUNTRIES.AUSTRALIA:
      return "+61";
    case COUNTRIES.USA:
      return "+1";
    case COUNTRIES.CANADA:
      return "+1";
    case COUNTRIES.INDIA:
      return "+91";
    default:
      return ""; // Return an empty string or handle the default case as needed
  }
};

export const servicesByCountry: any = {
  USA: {
    "Accounting & Bookkeeping": [
      "Year End Finalisation",
      "Bank Reconciliation",
      "Payroll Management",
      "Account Receivable",
      "Account Payable",
      "Financial Analysis & Reporting",
      "Full Time Bookkeeper",
    ],
    "Annual Tax": [
      "Individual tax Return",
      "Partnership Firm Tax Return",
      "C-Corporation Tax Return",
      "S-Corporation Tax Return",
    ],
    "Sales Tax": ["VAT Return Filling"],
  },
  CANADA: {
    "Accounting & Bookkeeping": [
      "Year End Finalisation",
      "Bank Reconciliation",
      "Payroll Management",
      "Account Receivable",
      "Account Payable",
      "Financial Analysis & Reporting",
      "Full Time Bookkeeper",
    ],
    "Annual Tax": [
      "T1 Form Preparation & Filing (For Individual)",
      "T2 Form Preparation & Filing (For Corporate)",
    ],
    "Sales Tax": ["GST/HST Preparation & Filing"],
  },
  AUSTRALIA: {
    "Accounting & Bookkeeping": [
      "Year End Finalisation",
      "Bank Reconciliation",
      "Payroll Management",
      "Account Receivable",
      "Account Payable",
      "Financial Analysis & Reporting",
      "Full Time Bookkeeper",
    ],
    "Annual Tax": ["Individual Tax Return", "Corporate Tax Return"],
    "Sales Tax": ["GST", "IAS/BAS"],
  },
};

export const countryName = COUNTRIES.AUSTRALIA;

export const metaDescription = `Proreckon Solutions ${countryName} specializes in professional accounting, bookkeeping, and financial services. We provide accurate, reliable, and tailored solutions to help businesses manage their finances, streamline operations, and ensure compliance with industry standards.`;

export const detectCountryBasedOnOrigin = (host: string  | null) => {
  if (host?.includes("us.proreckonsolutions")) {
    return "US";
  } else if (host?.includes("au.proreckonsolutions")) {
    return "AU";
  } else if (host?.includes("ca.proreckonsolutions")) {
    return "CA";
    
  } else if (host?.includes("proreckonsolutions.in")) {
    return "IN";
  } else {
    return "AU";
  }
};