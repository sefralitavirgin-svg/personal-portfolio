import useLanguage from "../hooks/useLanguage";

function Skills() {
  const { t } = useLanguage();
  const skillGroups = [
    {
      title: t.skills.groups[0],
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        t.skills.items.responsiveDesign,
        "Vite",
      ],
    },
    {
      title: t.skills.groups[1],
      items: [
        "Node.js",
        "Express.js",
        "Laravel",
        "PHP",
        "REST API",
        t.skills.items.applicationLogic,
        t.skills.items.authentication,
      ],
    },
    {
      title: t.skills.groups[2],
      items: [
        "MySQL",
        "PostgreSQL",
        t.skills.items.databaseDesign,
        t.skills.items.sqlQueries,
        t.skills.items.dataModeling,
        t.skills.items.crudOperations,
      ],
    },
    {
      title: t.skills.groups[3],
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "XAMPP",
        "Laragon",
        "Vercel",
      ],
    },
    {
      title: t.skills.groups[4],
      items: [
        "Python",
        "Flutter",
        "Firebase",
        t.skills.items.aiDevelopment,
        t.skills.items.webDeployment,
      ],
    },
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.skills.kicker}</span>

          <h2 className="section-title">{t.skills.title}</h2>

          <p className="lead-copy">{t.skills.description}</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;