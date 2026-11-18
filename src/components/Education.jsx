import useLanguage from "../hooks/useLanguage";

const education = [
  {
    id: 1,
    school: "STMIK Multicom Kotamobagu",
    period: "2024 - Present",
  },
];

function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.education.kicker}</span>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="lead-copy">{t.education.description}</p>
        </div>

        <div className="education-stack">
          {education.map((item) => (
            <article key={item.id} className="timeline-card">
              <h3>{item.school}</h3>
              <p className="meta">{t.education.degree}</p>
              <span className="period">{item.period}</span>
              <p>{t.education.studyDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;