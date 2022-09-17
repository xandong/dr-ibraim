import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import { CustomForm } from "./CustomForm";

export function MailchimpFormContainer() {
  const U = import.meta.env.MAILCHIMP_U;
  const ID = import.meta.env.MAILCHIMP_ID;

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
