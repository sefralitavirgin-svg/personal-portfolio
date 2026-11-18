import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import useLanguage from "../hooks/useLanguage";
import { ownerKnowledge } from "../data/ownerKnowledge";

const contacts = [
  {
    title: "Email",
    value: ownerKnowledge.contact.email,
    icon: <FaEnvelope />,
    link: `mailto:${ownerKnowledge.contact.email}`,
  },
  {
    title: "GitHub",
    value: "github.com/sefralitavirgin-svg",
    icon: <FaGithub />,
    link: ownerKnowledge.contact.github,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/virgin-kaporoh-670215350",
    icon: <FaLinkedin />,
    link: ownerKnowledge.contact.linkedin,
  },
  {
    title: "TikTok",
    value: "@sefraly06",
    icon: <SiTiktok />,
    link: ownerKnowledge.contact.tiktok,
  },
  {
    title: "Instagram",
    value: "@vrgnrsk",
    icon: <FaInstagram />,
    link: ownerKnowledge.contact.instagram,
  },
  {
    title: "Facebook",
    value: "facebook.com/vrginrsk",
    icon: <FaFacebook />,
    link: ownerKnowledge.contact.facebook,
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.contact.kicker}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="lead-copy">{t.contact.description}</p>
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