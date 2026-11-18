import resume from "../assets/resume/Virgin_Kaporoh_Updated_CV.pdf";
import useLanguage from "../hooks/useLanguage";

const experienceData = [
  {
    id: 1,
    company: "selfEmployed",
  },
  {
    id: 2,
    company: "shifa",
  },
  {
    id: 3,
    company: "healthOffice",
  },
  {
    id: 4,
    company: "studentOrganization",
  },
];

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.experience.kicker}</span>

          <h2 className="section-title">{t.experience.title}</h2>

          <p className="lead-copy">{t.experience.description}</p>
        </div>

        <div className="experience-stack">
          {experienceData.map((item, index) => (
            <article key={item.id} className="timeline-card">
              <h3>{t.experience.roles[index]}</h3>

              <p className="meta">{t.experience.companies[item.company]}</p>

              <span className="period">{t.experience.periods[index]}</span>

              <p>{t.experience.descriptions[index]}</p>
            </article>
          ))}
        </div>

        <div id="resume" className="resume-panel">
          <h3>{t.experience.resumeTitle}</h3>

          <p>{t.experience.resumeDescription}</p>

          <div className="resume-actions">
            <a
              className="resume-link primary"
              href={resume}
              download="Virgin_R_S_Kaporoh_CV.pdf"
            >
              {t.experience.download}
            </a>

            <a className="resume-link secondary" href="#contact">
              {t.navbar.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;