import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const contacts = [
  {
    title: "Email",
    value: "sefralitavirgin@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:sefralitavirgin@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/sefralitavirgin-svg",
    icon: <FaGithub />,
    link: "https://github.com/sefralitavirgin-svg",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/virgin-kaporoh-670215350",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/virgin-kaporoh-670215350/",
  },
  {
    title: "TikTok",
    value: "@sefraly06",
    icon: <SiTiktok />,
    link: "https://www.tiktok.com/@sefraly06",
  },
  {
    title: "Instagram",
    value: "@vrgnrsk",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/vrgnrsk/",
  },
  {
    title: "Facebook",
    value: "facebook.com/vrginrsk",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/vrginrsk",
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Contact</span>
          <h2 className="section-title">Let’s Connect</h2>
          <p className="lead-copy">
            I’m open to collaboration, learning opportunities, and conversations around building useful digital experiences.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((item) => (
            <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">{item.icon}</div>
              <div>
                <p className="contact-label">{item.title}</p>
                <p className="contact-value">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;