import ContactBanner from "../../ContactBanner/ContactBanner";
import Footer from "../../HomePage/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <ContactBanner />
      <div className="contact-section">
        <div className="contact">
          <h1>GET IN TOUCH</h1>
          <p>Natore, Rajshahi Division, Bangladesh. Phone: +880999-74-388</p>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
