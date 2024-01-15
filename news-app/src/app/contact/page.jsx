import Head from "next/head";
import "./contact.modules.css";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any inquiries or feedback." />
      </Head>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or feedback.</p>

        <div className="contact-info">
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-details">
            <h2>Our Office</h2>
            <p>Jl Parahyangan No 12, Bandung, Indonesia, 18214</p>

            <h2>Email</h2>
            <p>info@binarnews.com</p>

            <h2>Phone</h2>
            <p>+62 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
