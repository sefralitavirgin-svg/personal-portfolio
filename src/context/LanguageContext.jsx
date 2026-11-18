/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "ABOUT",
      skills: "SKILLS",
      projects: "PROJECTS",
      experience: "EXPERIENCE",
      resume: "RESUME",
      education: "EDUCATION",
      contact: "CONTACT",
      downloadCV: "Download CV",
      handNavigation: "Hand Gesture Navigation",
      mainNavigation: "Main navigation",
      toggleMenu: "Toggle menu",
      handNav: "Hand navigation",
      downloadResume: "Download resume",
    },
    hero: {
      title: "Building",
      titleAccent: "Digital Experiences.",
      role: "Aspiring Software Developer",
      description:
        "Exploring technology, creating solutions, and turning ideas into functional digital experiences.",
      explore: "EXPLORE MY DIGITAL UNIVERSE",
      connect: "CONNECT",
      sections: {
        about: "ABOUT",
        projects: "PROJECTS",
        skills: "SKILLS",
        experience: "EXPERIENCE",
        resume: "RESUME",
        contact: "CONTACT",
      },
      photos: { me: "ME", life: "LIFE", studio: "STUDIO", work: "WORK" },
      floatingPhotos: "Floating portfolio photos",
      portfolioSections: "Portfolio sections",
      globe: "Digital globe illustration",
    },
    about: {
      kicker: "● About",
      title: "My Story",
      intro:
        "Hello, I'm Virgin, an Informatics student passionate about technology, web development, and building practical digital solutions.",
      name: "VIRGIN KAPOROH",
      description:
        "I am a student who enjoys exploring technology, sharpening my software skills, and creating digital experiences that are both useful and engaging. I care about clean interfaces, problem-solving, and continuous learning as I grow toward becoming a stronger developer.",
      focusAreas: [
        {
          title: "Software Development",
          text: "Designing practical solutions and building user-centered digital products.",
        },
        {
          title: "Web Development",
          text: "Crafting responsive interfaces and modern web experiences with attention to detail.",
        },
        {
          title: "Technology",
          text: "Exploring tools, frameworks, and systems that improve how products work and feel.",
        },
        {
          title: "Problem Solving",
          text: "Turning ideas into functional experiences through learning and iteration.",
        },
      ],
    },
    skills: {
      kicker: "● Skills",
      title: "Technologies & Expertise",
      description:
        "My technical toolkit for designing, developing, and maintaining web applications, working with databases, and building practical digital solutions.",
      groups: [
        "Frontend Development",
        "Backend Development",
        "Database Management",
        "Development Tools",
        "Additional Technologies",
      ],
      items: {
        responsiveDesign: "Responsive Design",
        applicationLogic: "Application Logic",
        authentication: "Authentication",
        databaseDesign: "Database Design",
        sqlQueries: "SQL Queries",
        dataModeling: "Data Modeling",
        crudOperations: "CRUD Operations",
        aiDevelopment: "AI-Assisted Development",
        webDeployment: "Web Deployment",
      },
    },
    projects: {
      kicker: "● Portfolio",
      title: "Selected Projects",
      description:
        "A collection of software development projects showcasing my experience in web technologies, application development, and practical digital solutions.",
      categories: {
        personalManagement: "Personal Management Application",
        fullStack: "Full-Stack Web Application",
        web: "Web Application",
        frontend: "Frontend Development",
      },
      items: {
        virea:
          "A personal management application designed to help users organize daily activities, manage tasks, track schedules, and improve productivity through an intuitive digital workspace.",
        engener:
          "A fan community web application inspired by ENHYPEN, featuring an interactive dashboard, discography, collection tracker, personal diary, countdowns, and an administrative content management system.",
        theSin:
          "A fan-made album archive and management platform featuring album information, member profiles, era-based content, and database-driven content management.",
        portfolio:
          "A personal developer portfolio showcasing technical skills, professional experience, selected projects, and career interests through a responsive and modern interface.",
      },
      github: "GitHub",
      demo: "Live Demo",
    },
    experience: {
      kicker: "● Experience",
      title: "Building, Learning & Delivering",
      description:
        "A journey through professional projects, freelance development, internship experience, and collaborative creative work.",
      roles: [
        "Freelance Web Developer",
        "Web Developer",
        "IT Intern",
        "Content Creator Staff",
      ],
      periods: [
        "2026 - Present",
        "2026",
        "2026",
        "September 2024 - December 2025",
      ],
      companies: {
        selfEmployed: "Self-employed",
        shifa: "Warung Shifa",
        healthOffice: "Kotamobagu City Health Office",
        studentOrganization: "Arts & Entertainment Student Organization",
      },
      descriptions: [
        "Designed and developed web applications based on project requirements. Worked on application logic, database functionality, and responsive user interfaces to deliver practical digital solutions.",
        "Designed and developed a web-based Point of Sale (POS) system for a local small business. Translated client requirements into functional system features, implemented responsive interfaces, and integrated database functionality.",
        "Supported spreadsheet-based data administration and document management. Assisted with basic IT support, technical documentation, and administrative technology-related tasks.",
        "Created digital content to promote organizational activities and events. Collaborated with team members to produce engaging social media content, support visual communication, and contribute to campus event planning and execution.",
      ],
      resumeTitle: "Resume Access",
      resumeDescription:
        "Explore my professional background, technical skills, education, and selected development experience through my latest resume.",
      download: "Download Resume",
      contact: "Contact Me",
    },
    education: {
      kicker: "● Education",
      title: "Academic Path",
      description:
        "Building a strong foundation in software engineering, data systems, and web-based problem solving.",
      degree: "Bachelor of Computer Science",
      studyDescription:
        "Focused on software development, databases, web technologies, and the practical application of problem-solving strategies in technology.",
    },
    contact: {
      kicker: "● Contact",
      title: "Let’s Connect",
      description:
        "I’m open to collaboration, learning opportunities, and conversations around building useful digital experiences.",
    },
    footer: {
      title: "Thank You",
      description:
        "Thanks for visiting my digital universe. Every project, challenge, and lesson helps shape how I build experiences and solve problems.",
      copyright: "© 2026 Virgin R. S. Kaporoh",
    },
    handNav: {
      title: "✋ Hand Navigation",
      close: "Close hand navigation",
      loading: "Loading...",
      disable: "Disable Hand Control",
      enable: "Enable Hand Control",
      status: "Status",
      active: "🟢 Active",
      inactive: "⚪ Inactive",
      gesture: "Gesture",
      waiting: "Waiting...",
      noGesture: "No gesture detected",
      gestures: {
        ABOUT: "☝️ About",
        PROJECTS: "✌️ Projects",
        SKILLS: "🤟 Skills",
        EXPERIENCE: "🖖 Experience",
        CONTACT: "🖐️ Contact",
        OK_SIGN: "👌 Download CV",
      },
    },
    assistant: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      resume: "Resume",
      contact: "Contact",
      open: "Open GINNY AI assistant",
      close: "Close GINNY AI",
      guide: "Portfolio guide · local mode",
      navigation: "Portfolio navigation",
      explore: "EXPLORE",
      wakeHint: "Say",
      wakeHintEnd: "to start a voice command.",
      quickPrompts: [
        "What projects has Virgin built?",
        "Show my skills",
        "How can I contact Virgin?",
      ],
      placeholder: "Ask Ginny about this portfolio...",
      message: "Message GINNY AI",
      send: "Send message",
      awake: "Ginny is awake and listening",
      toggleVoice: "Toggle voice recognition",
      turnMicOff: "Turn mic off",
      enableVoice: "Enable voice",
      voiceReplies: "Voice replies",
      disclaimer:
        "Voice uses your browser’s speech recognition. Ginny answers from portfolio content only.",
      greeting:
        "Hi, I’m GINNY AI — your guide to Virgin’s portfolio. Ask me a question or use the sidebar to explore.",
      voiceOff: "Voice assistant is off.",
      unsupported:
        "Voice recognition is not supported in this browser. You can still chat by typing.",
      secure:
        "Voice recognition needs HTTPS or localhost. You can still chat by typing.",
      listening: 'Listening for “Ginny, wake up!”',
      awakened:
        "I’m awake! What would you like to know about Virgin’s portfolio?",
      awakeStatus: "Ginny is awake. Ask your question.",
      micDenied:
        "Microphone access was denied. Allow microphone access in your browser to use voice.",
      tryAgain:
        "Could not restart voice recognition. Please try again or type your question.",
      voiceStartError: "Could not start voice recognition: {message}",
      replyProjects:
        "Virgin’s featured projects are VIREA, a personal management app built with React, Laravel, and MySQL; ENGENEr, a fan community app; and THE SIN, an album archive. You can explore them in the Projects section.",
      replySkills:
        "Virgin works with React, JavaScript, HTML, CSS, Tailwind, Node.js, Express, Laravel, PHP, MySQL, and PostgreSQL, among other tools. The full list is in Skills.",
      replyExperience:
        "Virgin’s experience includes freelance web development, building a POS system for Warung Shifa, and an IT internship at Kotamobagu City Health Office.",
      replyEducation:
        "Virgin is an Informatics student. Visit the Education section for more details.",
      replyContact:
        "You can reach Virgin at sefralitavirgin@gmail.com, or find more social links in the Contact section.",
      replyResume: "The resume is available to download in the Resume section.",
      replyAbout:
        "Virgin Kaporoh is an Informatics student and aspiring software developer who enjoys building practical web applications and digital experiences.",
      replyDefault:
        "I can help with Virgin’s projects, skills, experience, education, resume, and contact details. Try “What projects has Virgin built?” or say “Ginny, wake up!” and ask me by voice.",
      takingYou: "Taking you to the",
      section: "section.",
    },
  },
  id: {
    navbar: {
      home: "Beranda",
      about: "TENTANG",
      skills: "KEAHLIAN",
      projects: "PROYEK",
      experience: "PENGALAMAN",
      resume: "CV",
      education: "PENDIDIKAN",
      contact: "KONTAK",
      downloadCV: "Unduh CV",
      handNavigation: "Navigasi Gestur Tangan",
      mainNavigation: "Navigasi utama",
      toggleMenu: "Buka/tutup menu",
      handNav: "Navigasi gestur tangan",
      downloadResume: "Unduh CV",
    },
    hero: {
      title: "Membangun",
      titleAccent: "Pengalaman Digital.",
      role: "Calon Software Developer",
      description:
        "Mengeksplorasi teknologi, menciptakan solusi, dan mengubah ide menjadi pengalaman digital yang fungsional.",
      explore: "JELAJAHI SEMESTA DIGITAL SAYA",
      connect: "HUBUNGI",
      sections: {
        about: "TENTANG",
        projects: "PROYEK",
        skills: "KEAHLIAN",
        experience: "PENGALAMAN",
        resume: "CV",
        contact: "KONTAK",
      },
      photos: { me: "SAYA", life: "HIDUP", studio: "STUDIO", work: "KARYA" },
      floatingPhotos: "Foto portofolio mengambang",
      portfolioSections: "Bagian portofolio",
      globe: "Ilustrasi globe digital",
    },
    about: {
      kicker: "● Tentang",
      title: "Cerita Saya",
      intro:
        "Halo, saya Virgin, mahasiswa Informatika yang tertarik pada teknologi, pengembangan web, dan pembuatan solusi digital yang bermanfaat.",
      name: "VIRGIN KAPOROH",
      description:
        "Saya senang mengeksplorasi teknologi, mengasah kemampuan perangkat lunak, dan menciptakan pengalaman digital yang bermanfaat sekaligus menarik. Saya menghargai antarmuka yang rapi, pemecahan masalah, dan proses belajar berkelanjutan untuk berkembang menjadi developer yang lebih baik.",
      focusAreas: [
        {
          title: "Pengembangan Perangkat Lunak",
          text: "Merancang solusi praktis dan membangun produk digital yang berpusat pada pengguna.",
        },
        {
          title: "Pengembangan Web",
          text: "Membuat antarmuka responsif dan pengalaman web modern dengan perhatian pada detail.",
        },
        {
          title: "Teknologi",
          text: "Mengeksplorasi perangkat, kerangka kerja, dan sistem yang meningkatkan fungsi serta pengalaman produk.",
        },
        {
          title: "Pemecahan Masalah",
          text: "Mengubah ide menjadi pengalaman fungsional melalui proses belajar dan penyempurnaan.",
        },
      ],
    },
    skills: {
      kicker: "● Keahlian",
      title: "Teknologi & Keahlian",
      description:
        "Perangkat teknis yang saya gunakan untuk merancang, mengembangkan, dan memelihara aplikasi web, mengelola basis data, serta membangun solusi digital praktis.",
      groups: [
        "Pengembangan Frontend",
        "Pengembangan Backend",
        "Manajemen Basis Data",
        "Perangkat Pengembangan",
        "Teknologi Tambahan",
      ],
      items: {
        responsiveDesign: "Desain Responsif",
        applicationLogic: "Logika Aplikasi",
        authentication: "Autentikasi",
        databaseDesign: "Perancangan Basis Data",
        sqlQueries: "Kueri SQL",
        dataModeling: "Pemodelan Data",
        crudOperations: "Operasi CRUD",
        aiDevelopment: "Pengembangan Berbantuan AI",
        webDeployment: "Deploy Web",
      },
    },
    projects: {
      kicker: "● Portofolio",
      title: "Proyek Pilihan",
      description:
        "Kumpulan proyek pengembangan perangkat lunak yang menunjukkan pengalaman saya dalam teknologi web, pengembangan aplikasi, dan solusi digital praktis.",
      categories: {
        personalManagement: "Aplikasi Manajemen Pribadi",
        fullStack: "Aplikasi Web Full-Stack",
        web: "Aplikasi Web",
        frontend: "Pengembangan Frontend",
      },
      items: {
        virea:
          "Aplikasi manajemen pribadi yang membantu pengguna mengatur aktivitas harian, mengelola tugas, melacak jadwal, dan meningkatkan produktivitas melalui ruang kerja digital yang intuitif.",
        engener:
          "Aplikasi komunitas penggemar yang terinspirasi ENHYPEN, dilengkapi dasbor interaktif, diskografi, pelacak koleksi, buku harian pribadi, hitung mundur, dan sistem pengelolaan konten.",
        theSin:
          "Platform arsip dan pengelolaan album buatan penggemar yang menampilkan informasi album, profil anggota, konten berdasarkan era, dan pengelolaan konten berbasis basis data.",
        portfolio:
          "Portofolio developer pribadi yang menampilkan keahlian teknis, pengalaman profesional, proyek pilihan, dan minat karier melalui antarmuka modern yang responsif.",
      },
      github: "GitHub",
      demo: "Demo Langsung",
    },
    experience: {
      kicker: "● Pengalaman",
      title: "Berkarya, Belajar & Berkontribusi",
      description:
        "Perjalanan melalui proyek profesional, pengembangan lepas, pengalaman magang, dan karya kreatif kolaboratif.",
      roles: [
        "Web Developer Lepas",
        "Web Developer",
        "Staf Magang TI",
        "Staf Pembuat Konten",
      ],
      periods: [
        "2026 - Sekarang",
        "2026",
        "2026",
        "September 2024 - Desember 2025",
      ],
      companies: {
        selfEmployed: "Wiraswasta",
        shifa: "Warung Shifa",
        healthOffice: "Dinas Kesehatan Kota Kotamobagu",
        studentOrganization: "Organisasi Mahasiswa Seni & Hiburan",
      },
      descriptions: [
        "Merancang dan mengembangkan aplikasi web berdasarkan kebutuhan proyek. Mengerjakan logika aplikasi, fungsi basis data, dan antarmuka responsif untuk menghadirkan solusi digital yang praktis.",
        "Merancang dan mengembangkan sistem Point of Sale (POS) berbasis web untuk usaha kecil setempat. Menerjemahkan kebutuhan klien menjadi fitur sistem, menerapkan antarmuka responsif, dan mengintegrasikan fungsi basis data.",
        "Mendukung administrasi data berbasis spreadsheet dan pengelolaan dokumen. Membantu dukungan TI dasar, dokumentasi teknis, serta tugas administrasi terkait teknologi.",
        "Membuat konten digital untuk mempromosikan kegiatan dan acara organisasi. Berkolaborasi dengan tim untuk menghasilkan konten media sosial yang menarik, mendukung komunikasi visual, serta membantu perencanaan dan pelaksanaan acara kampus.",
      ],
      resumeTitle: "Lihat CV",
      resumeDescription:
        "Kenali latar belakang profesional, keahlian teknis, pendidikan, dan pengalaman pengembangan pilihan saya melalui CV terbaru.",
      download: "Unduh CV",
      contact: "Hubungi Saya",
    },
    education: {
      kicker: "● Pendidikan",
      title: "Perjalanan Akademik",
      description:
        "Membangun dasar yang kuat dalam rekayasa perangkat lunak, sistem data, dan pemecahan masalah berbasis web.",
      degree: "Sarjana Ilmu Komputer",
      studyDescription:
        "Berfokus pada pengembangan perangkat lunak, basis data, teknologi web, dan penerapan strategi pemecahan masalah dalam bidang teknologi.",
    },
    contact: {
      kicker: "● Kontak",
      title: "Mari Terhubung",
      description:
        "Saya terbuka untuk kolaborasi, kesempatan belajar, dan diskusi seputar pembuatan pengalaman digital yang bermanfaat.",
    },
    footer: {
      title: "Terima Kasih",
      description:
        "Terima kasih telah mengunjungi semesta digital saya. Setiap proyek, tantangan, dan pelajaran membentuk cara saya membangun pengalaman dan memecahkan masalah.",
      copyright: "© 2026 Virgin R. S. Kaporoh",
    },
    handNav: {
      title: "✋ Navigasi Gestur Tangan",
      close: "Tutup navigasi gestur tangan",
      loading: "Memuat...",
      disable: "Nonaktifkan Kontrol Tangan",
      enable: "Aktifkan Kontrol Tangan",
      status: "Status",
      active: "🟢 Aktif",
      inactive: "⚪ Tidak aktif",
      gesture: "Gestur",
      waiting: "Menunggu...",
      noGesture: "Gestur tidak terdeteksi",
      gestures: {
        ABOUT: "☝️ Tentang",
        PROJECTS: "✌️ Proyek",
        SKILLS: "🤟 Keahlian",
        EXPERIENCE: "🖖 Pengalaman",
        CONTACT: "🖐️ Kontak",
        OK_SIGN: "👌 Unduh CV",
      },
    },
    assistant: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      experience: "Pengalaman",
      education: "Pendidikan",
      resume: "CV",
      contact: "Kontak",
      open: "Buka asisten GINNY AI",
      close: "Tutup GINNY AI",
      guide: "Panduan portofolio · mode lokal",
      navigation: "Navigasi portofolio",
      explore: "JELAJAHI",
      wakeHint: "Ucapkan",
      wakeHintEnd: "untuk memulai perintah suara.",
      quickPrompts: [
        "Proyek apa saja yang dibuat Virgin?",
        "Tampilkan keahlian saya",
        "Bagaimana cara menghubungi Virgin?",
      ],
      placeholder: "Tanyakan tentang portofolio ini kepada Ginny...",
      message: "Pesan untuk GINNY AI",
      send: "Kirim pesan",
      awake: "Ginny aktif dan sedang mendengarkan",
      toggleVoice: "Aktifkan/nonaktifkan pengenalan suara",
      turnMicOff: "Matikan mikrofon",
      enableVoice: "Aktifkan suara",
      voiceReplies: "Balasan suara",
      disclaimer:
        "Fitur suara menggunakan pengenalan suara di browser Anda. Ginny hanya menjawab berdasarkan isi portofolio.",
      greeting:
        "Hai, saya GINNY AI — panduan untuk portofolio Virgin. Ajukan pertanyaan atau gunakan menu samping untuk menjelajah.",
      voiceOff: "Asisten suara tidak aktif.",
      unsupported:
        "Pengenalan suara tidak didukung di browser ini. Anda tetap bisa mengobrol dengan mengetik.",
      secure:
        "Pengenalan suara memerlukan HTTPS atau localhost. Anda tetap bisa mengobrol dengan mengetik.",
      listening: 'Menunggu ucapan “Ginny, bangun!”',
      awakened:
        "Saya sudah aktif! Apa yang ingin Anda ketahui tentang portofolio Virgin?",
      awakeStatus: "Ginny aktif. Silakan ajukan pertanyaan.",
      micDenied:
        "Akses mikrofon ditolak. Izinkan akses mikrofon di browser untuk menggunakan fitur suara.",
      tryAgain:
        "Pengenalan suara tidak dapat dimulai ulang. Coba lagi atau ketik pertanyaan Anda.",
      voiceStartError: "Pengenalan suara tidak dapat dimulai: {message}",
      replyProjects:
        "Proyek unggulan Virgin adalah VIREA, aplikasi manajemen pribadi dengan React, Laravel, dan MySQL; ENGENEr, aplikasi komunitas penggemar; serta THE SIN, arsip album. Jelajahi bagian Proyek untuk melihat detailnya.",
      replySkills:
        "Virgin menggunakan React, JavaScript, HTML, CSS, Tailwind, Node.js, Express, Laravel, PHP, MySQL, dan PostgreSQL, serta perangkat lainnya. Daftar lengkapnya ada di bagian Keahlian.",
      replyExperience:
        "Pengalaman Virgin mencakup pengembangan web lepas, pembuatan sistem POS untuk Warung Shifa, dan magang TI di Dinas Kesehatan Kota Kotamobagu.",
      replyEducation:
        "Virgin adalah mahasiswa Informatika. Kunjungi bagian Pendidikan untuk informasi lebih lanjut.",
      replyContact:
        "Anda dapat menghubungi Virgin melalui sefralitavirgin@gmail.com atau melihat tautan media sosial di bagian Kontak.",
      replyResume: "CV dapat diunduh di bagian CV.",
      replyAbout:
        "Virgin Kaporoh adalah mahasiswa Informatika dan calon software developer yang senang membangun aplikasi web praktis serta pengalaman digital.",
      replyDefault:
        "Saya dapat membantu menjelaskan proyek, keahlian, pengalaman, pendidikan, CV, dan kontak Virgin. Coba tanya “Proyek apa saja yang dibuat Virgin?” atau ucapkan “Ginny, bangun!” lalu ajukan pertanyaan.",
      takingYou: "Mengarahkan Anda ke bagian",
      section: ".",
    },
  },
};

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "id" ? "id" : "en";
};

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title =
      language === "id"
        ? "Virgin Kaporoh | Portofolio"
        : "Virgin Kaporoh | Portfolio";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageContext;
