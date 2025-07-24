function ContactForm(): React.JSX.Element {
  return (
    <>
      <h1 className="contact-title">Get in touch</h1>
      <form className="contact-container">
        <div className="contact-upper">
          <input type="text" name="name" placeholder="Your name..." required />
          <input
            type="text"
            name="email"
            placeholder="Your Email..."
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
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default ContactForm;
