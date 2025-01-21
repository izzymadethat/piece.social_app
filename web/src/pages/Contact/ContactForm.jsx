import { Button } from "rizzui/button";
import { Input } from "rizzui/input";
import { Textarea } from "rizzui/textarea";

const ContactForm = () => {
  return (
    <form className="flex flex-col w-full space-y-4">
      <div className="flex flex-col w-full gap-4 md:flex-row">
        <Input
          label="First Name"
          placeholder="Enter your first name"
          required
          className="w-full"
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          required
          className="w-full"
        />
      </div>
      <Input
        label="Email Address"
        placeholder="Enter your best email address"
        required
        type="email"
      />
      <Input
        label="Phone Number"
        type="tel"
        placeholder="Enter your best contact number"
      />
      <Textarea
        label="Message"
        placeholder="Enter your message"
        maxLength={500}
        renderCharacterCount={({ characterCount, maxLength }) => (
          <div className="text-sm text-right opacity-70">
            {characterCount}/{maxLength}
          </div>
        )}
      />
      <Button
        type="submit"
        className="self-end max-w-1/3 text-foreground bg-accent-primary"
      >
        Send Message
      </Button>
    </form>
  );
};
export default ContactForm;
