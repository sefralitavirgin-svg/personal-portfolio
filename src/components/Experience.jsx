import resume from "../assets/resume/Virgin_Kaporoh_Updated_CV.pdf";

const experience = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2026 - Present",
    description: "Developing responsive websites, preparing digital solutions for client needs, and creating polished user experiences with practical functionality.",
  },
  {
    id: 2,
    role: "Content Creator",
    company: "Campus Organization",
    period: "Sep 2024 - Dec 2025",
    description: "Created digital content and supported event initiatives with visual communication, design awareness, and collaborative execution.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Experience</span>
          <h2 className="section-title">Learning in Motion</h2>
          <p className="lead-copy">
            A practical overview of my work, collaborative projects, and hands-on digital experiences.
          </p>
        </div>

        <div className="experience-stack">
          {experience.map((item) => (
            <article key={item.id} className="timeline-card">
              <h3>{item.role}</h3>
              <p className="meta">{item.company}</p>
              <span className="period">{item.period}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div id="resume" className="resume-panel">
          <h3>Resume Access</h3>
          <p>
            A current version of my resume is available for download and can be updated as my work and experience evolve.
          </p>

          <div className="resume-actions">
            <a className="resume-link primary" href={resume} download="Virgin_R_S_Kaporoh_CV.pdf">
              Download Resume
            </a>
            <a className="resume-link secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;