import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import { CustomForm } from "./CustomForm";
require("dotenv").config();

export function MailchimpFormContainer() {
  const U = process.env.MAILCHIMP_U;
  // const U = "37d01d60608062b84374bc1b7";
  const ID = process.env.MAILCHIMP_ID;
  // const ID = "84b02c1391";

  const URL = `https://gmail.us17.list-manage.com/subscribe/post?u=${U}&id=${ID}`;

  return (
    <div>
      <MailchimpSubscribe
        url={URL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
