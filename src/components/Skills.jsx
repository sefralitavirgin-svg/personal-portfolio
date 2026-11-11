function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Responsive UI"],
    },
    {
      title: "Backend Development",
      items: ["PHP", "Laravel", "REST APIs", "Authentication", "Web Logic"],
    },
    {
      title: "Database Management",
      items: ["MySQL", "Schema Design", "Query Optimization", "Data Modeling"],
    },
    {
      title: "Tools & Technologies",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Web Deployment"],
    },
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Skills</span>
          <h2 className="section-title">Tools I Build With</h2>
          <p className="lead-copy">
            A focused stack for building digital products, solving technical problems, and turning ideas into usable experiences.
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