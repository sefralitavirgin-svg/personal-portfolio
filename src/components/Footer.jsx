import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-panel">
        <h2>Thank You</h2>
        <p>
          Thanks for visiting my digital universe. Every project, challenge, and lesson helps shape how I build experiences and solve problems.
        </p>

        <div className="footer-links">
          <a href="https://github.com/sefralitavirgin-svg" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/virgin-kaporoh-670215350/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/vrgnrsk/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@sefraly06" target="_blank" rel="noreferrer" aria-label="TikTok">
            <SiTiktok />
          </a>
          <a href="https://www.facebook.com/vrginrsk" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        <div className="footer-meta">© 2026 Virgin R. S. Kaporoh</div>
      </div>
    </footer>
  );
}

export default Footer;