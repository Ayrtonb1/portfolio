import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactForm(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully.");
          formRef.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  return (
    <>
      <h1 className="contact-title">Get in touch</h1>
      <form className="contact-container" ref={formRef} onSubmit={sendEmail}>
        <div className="contact-upper">
          <input type="text" name="name" placeholder="Your name..." required />
          <input
            type="text"
            name="email"
            placeholder="Your email..."
            required
          />
        </div>
        <div className="contact-lower">
          <textarea
            name="message"
            id=""
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button className="email-submit" type="submit">
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
