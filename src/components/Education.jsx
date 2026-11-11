const education = [
  {
    id: 1,
    school: "STMIK Multicom Kotamobagu",
    degree: "Bachelor of Computer Science",
    period: "2024 - Present",
    description: "Focused on software development, databases, web technologies, and the practical application of problem-solving strategies in technology.",
  },
];

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Education</span>
          <h2 className="section-title">Academic Path</h2>
          <p className="lead-copy">
            Building a strong foundation in software engineering, data systems, and web-based problem solving.
          </p>
        </div>

        <div className="education-stack">
          {education.map((item) => (
            <article key={item.id} className="timeline-card">
              <h3>{item.school}</h3>
              <p className="meta">{item.degree}</p>
              <span className="period">{item.period}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;