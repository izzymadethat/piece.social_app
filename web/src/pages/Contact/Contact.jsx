import { Globe, Mail, Phone } from "lucide-react";
import contactDetails from "../../utils/contact";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  return (
    <div className="space-y-4 ">
      <div>
        <h3 className="text-xl">{contactDetails.name}</h3>
        <p className="text-sm font-semibold">{contactDetails.title}</p>
      </div>
      {/* Info plus icons */}
      <div className="text-lg text-accent-primary">
        {/* Phone */}
        <div className="flex gap-2">
          <span>
            <Phone />
          </span>
          <span>{contactDetails.phone}</span>
        </div>
        {/* Email */}
        <div className="flex gap-2">
          <span>
            <Mail />
          </span>
          <span>{contactDetails.email}</span>
        </div>
        {/* Site */}
        <div className="flex gap-2">
          <span>
            <Globe />
          </span>
          <span>{contactDetails.site}</span>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <div className="container flex items-center justify-center max-w-5xl min-h-screen mx-auto">
        <div className="grid grid-cols-1 align-middle border rounded-xl lg:grid-cols-2">
          {/* Information */}
          <div className="rounded-bl-xl rounded-tl-xl bg-primary text-background">
            <div className="p-10 space-y-4">
              <h2 className="text-4xl">Contact Us</h2>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, fugit accusamus. Nobis, quibusdam beatae. Optio,
                commodi iusto.
              </p>
              {/* Contact's info */}
              <ContactDetails />
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="flex flex-col w-full p-8">
              <span className="w-full text-xs text-right text-red-500">
                All fields required
              </span>
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
