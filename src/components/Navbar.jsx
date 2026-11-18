import { useState, useEffect } from "react";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import useLanguage from "../hooks/useLanguage";

import resume from "../assets/resume/Virgin_Kaporoh_Updated_CV.pdf";

import { FaFilePdf } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar({ onOpenHandNavigation }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.navbar.about, number: "01." },
    { href: "#projects", label: t.navbar.projects, number: "02." },
    { href: "#skills", label: t.navbar.skills, number: "03." },
    { href: "#experience", label: t.navbar.experience, number: "04." },
    { href: "#resume", label: t.navbar.resume, number: "05." },
    { href: "#contact", label: t.navbar.contact, number: "06." },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="brand">
          Virgin.
        </a>

        <nav className="desktop-nav" aria-label={t.navbar.mainNavigation}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span className="number">{link.number}</span>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="nav-link hand-nav-trigger"
            onClick={onOpenHandNavigation}
            aria-haspopup="dialog"
          >
            <FaHand aria-hidden="true" />
            {t.navbar.handNav}
          </button>
        </nav>

        <div className="nav-actions">
          <div className="nav-chip">
            <LanguageSwitcher />
          </div>
          <div className="nav-chip-secondary">
            <ThemeToggle />
          </div>
          <a
            href={resume}
            download="Virgin_R_S_Kaporoh_CV.pdf"
            className="nav-chip"
            aria-label={t.navbar.downloadCV}
          >
            <FaFilePdf aria-hidden="true" />
          </a>
        </div>

        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="nav-chip-secondary"
            type="button"
            aria-label={t.navbar.toggleMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <span>{link.label}</span>
              <span className="number">{link.number}</span>
            </a>
          ))}
          <button
            type="button"
            className="mobile-hand-nav"
            onClick={() => {
              closeMenu();
              onOpenHandNavigation();
            }}
          >
            <span><FaHand aria-hidden="true" /> {t.navbar.handNavigation}</span>
            <span className="number">✋</span>
          </button>
          <a href={resume} download="Virgin_R_S_Kaporoh_CV.pdf" onClick={closeMenu} className="mobile-resume">
            <span>{t?.navbar?.downloadCV || "Download CV"}</span>
            <FaFilePdf />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;