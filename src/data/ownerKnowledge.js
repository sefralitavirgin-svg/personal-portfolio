export const ownerKnowledge = {
  profile: {
    preferredName: "Virgin",
    professionalIdentity: "Software Developer / Aspiring Software Engineer",
    country: "Indonesia",
    status: "Undergraduate student",
    field: "Informatics Engineering",
    personality: [
      "Interested in technology and software development",
      "Enjoys learning new technologies",
      "Creative and imaginative",
      "Interested in international opportunities",
      "Enjoys writing and developing fictional stories",
    ],
  },
  education: {
    institution: "STMIK Multicom Kotamobagu, Indonesia",
    degree: "Bachelor's degree in Informatics Engineering",
    started: 2024,
    status: "Currently studying; not yet graduated",
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Mining",
      "Software Engineering",
      "Backend Development",
      "Database Systems",
      "Web Application Development",
    ],
  },
  technical_skills: {
    languages: ["JavaScript", "Python", "PHP", "SQL", "Kotlin", "Dart"],
    frontend: ["HTML", "CSS", "React.js"],
    backend: ["Node.js", "Express.js", "Laravel", "PHP", "REST API development"],
    databases: ["MySQL", "SQL"],
    mobile: ["Flutter", "Dart", "Kotlin"],
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "API Integration",
      "Full-Stack Development",
      "Application Deployment",
    ],
    preference: "Backend Development",
  },
  career_goals: {
    goals: [
      "Become a professional software developer",
      "Work with international companies",
      "Gain professional software engineering experience",
      "Build a strong GitHub portfolio",
      "Build international professional connections",
      "Explore remote employment",
      "Earn internationally recognized technical certifications",
    ],
    canada: {
      interest: "One of her biggest personal and career interests",
      preferredProvince: "Manitoba",
      preferredCity: "Winnipeg",
      status: "A future aspiration, not a confirmed relocation",
    },
  },
  projects: {
    items: [
      {
        name: "VIREA",
        description: "A personal productivity and operating-system concept",
        features: ["Dashboard", "Task Management", "Calendar", "Goals", "Finance", "Settings"],
        direction: ["React", "Database integration", "Personal productivity tools"],
      },
      {
        name: "Personal Website",
        description: "A personal space for identity, projects, updates, and Ginny AI",
        features: ["About Me", "Projects", "Skills", "Contact", "Personal updates"],
      },
      {
        name: "Web Development Projects",
        description: "CRUD applications, database-driven applications, personal websites, and portfolio projects",
      },
    ],
  },
  technology_interests: [
    "Backend Engineering",
    "Artificial Intelligence",
    "AI Agents",
    "Full-Stack Web Development",
    "Software Architecture",
    "API Development",
    "Database Design",
    "Automation",
    "Cloud and Deployment Technologies",
  ],
  kpop: {
    fandom: "ENGENE",
    favoriteGroup: "ENHYPEN",
    interests: ["ENHYPEN members and activities", "K-pop comebacks", "Fan communities"],
  },
  entertainment: [
    "Thai entertainment",
    "Win Metawin",
    "Tu Tontawan",
    "Nanon Korapat",
    "Phuwin Tangsakyuen",
    "Perth Tanapon",
    "Fourth Nattawat",
    "Tay Tawan",
  ],
  creative_writing: {
    penName: "V. Kaporoh",
    interests: ["Romance", "Slow burn", "Enemies-to-lovers", "Character development", "Dramatic storylines", "Fictional royal settings", "Alternative universes"],
    project: "THE PRINCIPALITY",
  },
  fictional: {
    cherys: {
      name: "CHERYS",
      description: "Virgin's fictional six-member K-pop girl group universe",
      debut: 2022,
      fandom: "IRISH",
      agency: "YG Entertainment",
      identity: "Celestial and ethereal",
      status: "Fictional, not a real K-pop group",
    },
  },
  personal_preferences: {
    aesthetics: ["Soft pink", "Coquette-inspired", "Clean girl", "Feminine minimalism", "Pinterest-inspired"],
    colors: ["White", "Baby pink", "Dusty rose", "Cream", "Champagne"],
  },
  contact: {
    email: "sefralitavirgin@gmail.com",
    github: "https://github.com/sefralitavirgin-svg",
    linkedin: "https://www.linkedin.com/in/virgin-kaporoh-670215350/",
    tiktok: "https://www.tiktok.com/@sefraly06",
    instagram: "https://www.instagram.com/vrgnrsk/",
    facebook: "https://www.facebook.com/vrginrsk",
  },
};

const categoryKeywords = {
  profile: ["who", "about", "virgin", "name", "where", "country", "student", "siapa", "tentang", "nama", "negara", "mahasiswa"],
  education: ["education", "student", "study", "university", "college", "degree", "pendidikan", "kuliah", "mahasiswa", "universitas", "kampus"],
  technical_skills: ["skill", "skills", "technology", "technologies", "language", "framework", "backend", "frontend", "database", "keahlian", "teknologi", "bahasa", "basis data"],
  career_goals: ["career", "goal", "aspiration", "future", "abroad", "international", "canada", "winnipeg", "manitoba", "korea", "karier", "tujuan", "masa depan", "luar negeri", "kanada"],
  projects: ["project", "built", "build", "portfolio", "virea", "website", "proyek", "buat", "dibuat", "portofolio"],
  technology_interests: ["ai", "machine learning", "artificial intelligence", "agent", "api", "cloud", "software architecture", "automation", "kecerdasan", "otomasi"],
  kpop: ["kpop", "k-pop", "engene", "enhypen", "comeback", "idol"],
  entertainment: ["thai", "actor", "artist", "drama", "win", "tontawan", "nanon", "phuwin", "perth", "fourth", "tay"],
  creative_writing: ["write", "writer", "story", "novel", "fiction", "kaporoh", "principality", "tulis", "penulis", "cerita", "novel", "fiksi"],
  fictional: ["cherys", "group", "girl group", "irish", "yg entertainment"],
  personal_preferences: ["aesthetic", "style", "pink", "coquette", "prefer", "esthetic", "gaya", "estetika"],
  contact: ["contact", "email", "github", "linkedin", "instagram", "tiktok", "facebook", "reach", "hubungi", "kontak"],
};

function scoreCategory(query, category) {
  const normalized = query.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ");
  return categoryKeywords[category].reduce(
    (score, keyword) => score + (normalized.includes(keyword) ? 1 : 0),
    0,
  );
}

export function retrieveOwnerKnowledge(query) {
  const categories = Object.keys(categoryKeywords);
  const matches = categories
    .map((category) => ({ category, score: scoreCategory(query, category) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  return matches.length > 0 ? matches.map((match) => match.category) : ["profile"];
}

export function getOwnerReply(query, language = "en") {
  const categories = retrieveOwnerKnowledge(query);
  const indonesian = language === "id";

  if (categories.includes("contact")) {
    return indonesian
      ? `Virgin dapat dihubungi melalui email ${ownerKnowledge.contact.email}. Tautan juga tersedia untuk GitHub, LinkedIn, TikTok, Instagram, dan Facebook di bagian Kontak.`
      : `You can reach Virgin by email at ${ownerKnowledge.contact.email}. More public links are available in the Contact section.`;
  }

  if (categories.includes("education")) {
    return indonesian
      ? `Virgin saat ini adalah mahasiswa S1 Teknik Informatika di STMIK Multicom Kotamobagu. Ia memulai kuliah pada 2024 dan belum lulus.`
      : `Virgin is currently an undergraduate student at STMIK Multicom Kotamobagu, studying Informatics Engineering. She started in 2024 and has not graduated yet.`;
  }

  if (categories.includes("technical_skills")) {
    return indonesian
      ? `Virgin mempelajari dan menggunakan JavaScript, Python, PHP, SQL, Kotlin, Dart, React.js, Node.js, Express.js, Laravel, Flutter, dan MySQL. Ia memiliki ketertarikan khusus pada pengembangan backend.`
      : `Virgin has experience with JavaScript, Python, PHP, SQL, Kotlin, Dart, React.js, Node.js, Express.js, Laravel, Flutter, and MySQL. She has a particular interest in backend development.`;
  }

  if (categories.includes("career_goals")) {
    return indonesian
      ? `Virgin bercita-cita menjadi software developer profesional dan membangun karier internasional. Ia sangat tertarik dengan Kanada, terutama Winnipeg, Manitoba, serta peluang teknologi di Korea Selatan. Ini masih aspirasi masa depan, bukan kepastian relokasi atau penawaran kerja.`
      : `Virgin aspires to become a professional software developer and build an international career. Canada, especially Winnipeg, Manitoba, is a major interest, and she is also interested in technology opportunities in South Korea. These remain future aspirations, not confirmed relocation or employment plans.`;
  }

  if (categories.includes("projects")) {
    return indonesian
      ? `Virgin aktif mengembangkan proyek pribadi dan akademik. Salah satunya adalah VIREA, konsep aplikasi produktivitas dengan React dan integrasi basis data, serta berbagai aplikasi CRUD, portofolio, dan aplikasi web berbasis basis data.`
      : `Virgin actively develops personal and academic projects. One concept is VIREA, a productivity application featuring tasks, calendars, goals, and finance, with React and database integration. She also builds CRUD, portfolio, and database-driven web applications.`;
  }

  if (categories.includes("technology_interests")) {
    return indonesian
      ? `Virgin tertarik pada backend engineering, AI, machine learning, AI agents, pengembangan full-stack, arsitektur perangkat lunak, API, basis data, otomasi, serta cloud dan deployment. Ia juga sedang mengeksplorasi aplikasi berbasis OpenAI API melalui Ginny AI.`
      : `Virgin is interested in backend engineering, AI, machine learning, AI agents, full-stack development, software architecture, APIs, databases, automation, cloud, and deployment. She is also exploring OpenAI-powered applications through Ginny AI.`;
  }

  if (categories.includes("kpop")) {
    return indonesian
      ? `Ya! Virgin adalah ENGENE dan grup favoritnya adalah ENHYPEN. Ia suka mengikuti kegiatan anggota, comeback, berita, dan komunitas penggemar K-pop.`
      : `Yes! Virgin is an ENGENE, and her favorite group is ENHYPEN. She enjoys following member activities, comebacks, news, and K-pop fan communities.`;
  }

  if (categories.includes("fictional")) {
    return indonesian
      ? `CHERYS adalah dunia girl group K-pop fiktif ciptaan Virgin. CHERYS terdiri dari enam anggota dan diluncurkan pada 2022 dalam cerita fiksi miliknya, dengan fandom IRISH. Ini bukan grup K-pop nyata.`
      : `CHERYS is Virgin’s fictional six-member K-pop girl group universe. In her fictional story, CHERYS debuted in 2022 under YG Entertainment and has the fandom name IRISH. CHERYS is not a real K-pop group.`;
  }

  if (categories.includes("creative_writing")) {
    return indonesian
      ? `Virgin suka menulis cerita dengan nama pena V. Kaporoh. Ia tertarik pada romance, slow burn, enemies-to-lovers, pengembangan karakter, dunia fiksi kerajaan, dan dunia alternatif. Salah satu proyeknya berjudul THE PRINCIPALITY.`
      : `Virgin enjoys creative writing under the pen name V. Kaporoh. She likes romance, slow-burn and enemies-to-lovers stories, complex characters, fictional royal settings, and alternative universes. One of her projects is THE PRINCIPALITY.`;
  }

  if (categories.includes("entertainment")) {
    return indonesian
      ? `Virgin juga tertarik pada hiburan Thailand, drama Asia, dan beberapa aktor seperti Win Metawin, Tu Tontawan, Nanon Korapat, Phuwin Tangsakyuen, Perth Tanapon, Fourth Nattawat, dan Tay Tawan.`
      : `Virgin also enjoys Thai entertainment and Asian dramas. She has expressed interest in artists and actors including Win Metawin, Tu Tontawan, Nanon Korapat, Phuwin Tangsakyuen, Perth Tanapon, Fourth Nattawat, and Tay Tawan.`;
  }

  if (categories.includes("personal_preferences")) {
    return indonesian
      ? `Virgin menyukai estetika pink lembut, coquette, clean girl, dan feminin minimalis—terutama white, baby pink, dusty rose, cream, serta champagne.`
      : `Virgin enjoys soft pink, coquette-inspired, clean girl, feminine minimalism, and Pinterest-inspired aesthetics, especially white, baby pink, dusty rose, cream, and champagne.`;
  }

  return indonesian
    ? `Virgin adalah mahasiswa Teknik Informatika di Indonesia yang tertarik pada pengembangan perangkat lunak, khususnya backend, web development, AI, dan kesempatan karier internasional.`
    : `Virgin is an Informatics Engineering student in Indonesia who is interested in software development, especially backend development, web applications, AI, and international career opportunities.`;
}
