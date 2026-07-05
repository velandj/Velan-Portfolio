import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">

        <div className="info-card">
          <FaEnvelope />
          <div>
            <h3>Email</h3>
            <a href="mailto:velandeivasigamani5@gmail.com">
              velandeivasigamani5@gmail.com
            </a>
          </div>
        </div>

        <div className="info-card">
          <FaPhone />
          <div>
            <h3>Phone</h3>
            <a href="tel:+918807631531">
              +91 8807631531
            </a>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <div>
            <h3>Location</h3>
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>

        <div className="info-card">
          <FaGithub />
          <div>
            <h3>GitHub</h3>
            <a
              href="https://github.com/velandj"
              target="_blank"
              rel="noreferrer"
            >
              github.com/velandj
            </a>
          </div>
        </div>

        <div className="info-card">
          <FaLinkedin />
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;