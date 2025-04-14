import nodemailer from 'nodemailer';


export default async (req, context) => {
  try {
    const body = await req?.json();
    const { name, email, mobileNo, service, message, country } = body;
    console.log("Request Body", body);
    if (!validateInputs({ name, email, mobileNo, service, message, country }))
      return new Response("Invalid Form Input", { status: 200 });

    const emailBody = generateEmailBody({
      name,
      email,
      mobileNo,
      service,
      message,
      country,
    });
    const apiResponse = await sendEmail({ emailBody });

    return validateEmailResponse(apiResponse)
      ? new Response("Form Submitted Successfully")
      : new Response("Something went wrong. Unable to Submit Form", {
        status: 400,
      });
  } catch (err) {
    console.log("Error Occured: ", JSON.stringify(err));
    return new Response("Error Occured", {
      status: 501,
      statusText: "Server Exception",
    });
  }
};

const validateInputs = ({ name, email, mobileNo, service, message, country }) => {
  // Check if any of the required fields are empty
  if (!name || !email || !mobileNo || !service || !message || !country) {
    return false;
  }
  console.log("Form Parameters Validated");
  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  console.log("Email Parameter Validated");
  // Mobile number validation using a regular expression
  const mobileRegex = /\d+/;
  if (!mobileRegex.test(mobileNo)) {
    return false;
  }
  console.log("Mobile Parameters Validated");
  // Other custom validations can be added here if needed

  // If all validations pass, return true
  return true;
};

const getDefaultInputs = () => {
  const from = {
    name: "Civonce Mailer System",
    address: process.env.EMAIL_ID,
  };
  const to = process.env.TO_EMAIL;
  const bcc = "civoncetechnologies@gmail.com";
  const subject = process.env.EMAIL_SUBJECT;
  return {
    from,
    to,
    bcc,
    subject
  };
};

const generateEmailBody = ({ name, email, mobileNo, service, message, country }) => {
  return `
 Hi, 
 A new form submission has been received on ${new Date().toDateString()}:
 Name: ${name}
 Mobile No: ${mobileNo}
 Email: ${email}
 Service Reuqested: ${service}
 Message: ${message}
 Country: ${country}

 Regards,
 Civonce System Mailer
 `;
};

const sendEmail = async ({ emailBody }) => {
  console.log('ENVS', JSON.stringify({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    }
  }));
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const response = await transporter.sendMail({ ...getDefaultInputs(), text: emailBody });
  return response;
};

const validateEmailResponse = (apiResponse) => {
  console.log(`Email Response - ${JSON.stringify(apiResponse)}`);
  return apiResponse?.messageId && apiResponse?.accepted?.length;
};

function validatePhoneNumber(phone, countryCode) {
  // Define regular expressions for local phone numbers in each country (no country code)
  const phoneRegex = {
      'USA': /^[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{6}$/, // US: 10 digits, first digit of area code and central office code can't be 0 or 1
      'Canada': /^[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{6}$/, // Canada: Same as US
      'Australia': /^[4|3][0-9]{8}$/, // Australia: Typically 9 digits, mobile starts with 4, landline with 3
      'India': /^[6-9]{1}[0-9]{9}$/ // India: 10 digits, starts with 6-9
  };

  // Check if the country code is valid
  if (!phoneRegex[countryCode]) {
      return false;
  }

  // Remove spaces, hyphens, and parentheses from the input
  const sanitizedPhone = phone.replace(/[\s()-]/g, '');

  // Validate using the appropriate regex for the country
  return phoneRegex[countryCode].test(sanitizedPhone);
}

