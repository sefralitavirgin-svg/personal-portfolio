import { useState, useEffect } from "react";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import useLanguage from "../hooks/useLanguage";

import resume from "../assets/resume/Virgin_R_S_Kaporoh_CV.pdf";

import { FaFilePdf } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
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
    { href: "#about", label: t.navbar.about },
    { href: "#skills", label: t.navbar.skills },
    { href: "#projects", label: t.navbar.projects },
    { href: "#experience", label: t.navbar.experience },
    { href: "#education", label: t.navbar.education },
    { href: "#contact", label: t.navbar.contact },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-lg py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 text-2xl font-bold text-blue-600 md:text-3xl"
        >
          Virgin.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <LanguageSwitcher />

          <ThemeToggle />

          <a
            href={resume}
            download="Virgin_R_S_Kaporoh_CV.pdf"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FaFilePdf />

            {t.navbar.downloadCV}
          </a>

        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-2 lg:hidden">

          <LanguageSwitcher />

          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-300 bg-white p-2 shadow-sm transition hover:bg-slate-100"
          >
            {menuOpen ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[700px]"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

          <a
            href={resume}
            download="Virgin_R_S_Kaporoh_CV.pdf"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <FaFilePdf />

            {t.navbar.downloadCV}
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;