function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "Vite",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "Laravel",
        "PHP",
        "REST API",
        "Application Logic",
        "Authentication",
      ],
    },
    {
      title: "Database Management",
      items: [
        "MySQL",
        "PostgreSQL",
        "Database Design",
        "SQL Queries",
        "Data Modeling",
        "CRUD Operations",
      ],
    },
    {
      title: "Development Tools",
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
      title: "Additional Technologies",
      items: [
        "Python",
        "Flutter",
        "Firebase",
        "AI-Assisted Development",
        "Web Deployment",
      ],
    },
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Skills</span>

          <h2 className="section-title">
            Technologies & Expertise
          </h2>

          <p className="lead-copy">
            My technical toolkit for designing, developing,
            and maintaining web applications, working with
            databases, and building practical digital solutions.
          </p>
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