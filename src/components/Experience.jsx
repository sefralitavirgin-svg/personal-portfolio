import resume from "../assets/resume/Virgin_Kaporoh_Updated_CV.pdf";

const experience = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2026 - Present",
    description:
      "Designed and developed web applications based on project requirements. Worked on application logic, database functionality, and responsive user interfaces to deliver practical digital solutions.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Warung Shifa",
    period: "2026",
    description:
      "Designed and developed a web-based Point of Sale (POS) system for a local small business. Translated client requirements into functional system features, implemented responsive interfaces, and integrated database functionality.",
  },
  {
    id: 3,
    role: "IT Intern",
    company: "Dinas Kesehatan Kota Kotamobagu",
    period: "2026",
    description:
      "Supported spreadsheet-based data administration and document management. Assisted with basic IT support, technical documentation, and administrative technology-related tasks.",
  },
  {
    id: 4,
    role: "Content Creator Staff",
    company: "Arts & Entertainment Student Organization",
    period: "September 2024 - December 2025",
    description:
      "Created digital content to promote organizational activities and events. Collaborated with team members to produce engaging social media content, support visual communication, and contribute to campus event planning and execution.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Experience</span>

          <h2 className="section-title">
            Building, Learning & Delivering
          </h2>

          <p className="lead-copy">
            A journey through professional projects, freelance
            development, internship experience, and collaborative
            creative work.
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
            Explore my professional background, technical skills,
            education, and selected development experience through
            my latest resume.
          </p>

          <div className="resume-actions">
            <a
              className="resume-link primary"
              href={resume}
              download="Virgin_R_S_Kaporoh_CV.pdf"
            >
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