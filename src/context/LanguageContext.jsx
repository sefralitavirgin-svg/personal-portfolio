import { createContext, useMemo, useState } from "react";

const translations = {
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Software Developer",
      description:
        "Passionate about building modern web applications, solving real-world problems, and continuously learning new technologies.",
      projectButton: "View Projects",
      contactButton: "Contact Me",
    },
    about: {
      title: "About Me",
      subtitle: "Who Am I",
      description:
        "I am an Information Technology student with a strong interest in software engineering, web development, and modern technologies. I enjoy building responsive web applications, solving real-world problems, and continuously improving my programming skills through hands-on projects.",
      location: "Location",
      locationValue: "Indonesia",
      education: "Education",
      educationValue: "Information Technology",
      specialization: "Specialization",
      specializationValue: "Full Stack Web Development",
      languages: "Languages",
      languagesValue: "Indonesian • English",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I use to build applications.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Here are some projects I've built to improve my web development skills.",
      github: "GitHub",
      demo: "Live Demo",
    },
    experience: {
      title: "Experience",
    },
    education: {
      title: "Education",
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Feel free to contact me for collaboration, discussion, or just to say hello.",
    },
    footer: {
      copyright: "© 2026 Virgin R. S. Kaporoh. All rights reserved.",
    },
  },
  id: {
    navbar: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan",
      contact: "Kontak",
      downloadCV: "Unduh CV",
    },
    hero: {
      greeting: "Halo, saya",
      title: "Software Developer",
      description:
        "Bersemangat membangun aplikasi web modern, menyelesaikan permasalahan dunia nyata, dan terus mempelajari teknologi baru.",
      projectButton: "Lihat Proyek",
      contactButton: "Hubungi Saya",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Siapa Saya",
      description:
        "Saya adalah mahasiswa Teknologi Informasi yang memiliki minat besar pada software engineering, pengembangan web, dan teknologi modern. Saya senang membangun aplikasi web yang responsif, memecahkan masalah dunia nyata, serta terus meningkatkan kemampuan pemrograman melalui berbagai proyek.",
      location: "Lokasi",
      locationValue: "Indonesia",
      education: "Pendidikan",
      educationValue: "Teknologi Informasi",
      specialization: "Spesialisasi",
      specializationValue: "Full Stack Web Development",
      languages: "Bahasa",
      languagesValue: "Indonesia • Inggris",
    },
    skills: {
      title: "Keahlian",
      subtitle: "Teknologi yang saya gunakan untuk membangun aplikasi.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools",
      },
    },
    projects: {
      title: "Proyek Unggulan",
      subtitle: "Beberapa proyek yang saya buat untuk meningkatkan kemampuan pengembangan web.",
      github: "GitHub",
      demo: "Demo",
    },
    experience: {
      title: "Pengalaman",
    },
    education: {
      title: "Pendidikan",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle:
        "Jangan ragu menghubungi saya untuk berdiskusi, bekerja sama, atau sekadar menyapa.",
    },
    footer: {
      copyright: "© 2026 Virgin R. S. Kaporoh. Seluruh hak cipta dilindungi.",
    },
  },
};

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations.en,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageContext;
