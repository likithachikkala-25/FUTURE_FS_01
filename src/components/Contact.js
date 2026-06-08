import { useState } from "react";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();   // ❌ stop page reload

    // 👉 you can send data later here

    setMessageSent(true); // ✅ show success
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {messageSent && <p className="success">Message sent successfully!</p>}
    </section>
  );
}

export default Contact;