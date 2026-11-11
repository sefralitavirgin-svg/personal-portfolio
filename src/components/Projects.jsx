const projects = [
  {
    id: 1,
    title: "Student Finance Tracker",
    description: "A dashboard for managing budgets, tracking spending, and organizing student financial activities with a clean, practical interface.",
    tech: ["React", "PHP", "MySQL"],
    github: "https://github.com/sefralitavirgin-svg/student-finance-tracker",
    demo: "#",
  },
  {
    id: 2,
    title: "VIREA",
    description: "A study planner focused on assignment tracking, deadlines, and daily organization for students and learners.",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/sefralitavirgin-svg/personal-portofolio",
    demo: "vireaa.vercel.app",
  },
  {
    id: 3,
    title: "Confess Website",
    description: "A lightweight content platform designed for anonymous stories and community interactions with a modern, user-friendly UX.",
    tech: ["React", "Firebase"],
    github: "https://github.com/sefralitavirgin-svg",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="lead-copy">
            A snapshot of learning-driven work covering web development, data management, and practical problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-art" aria-hidden="true" />

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a className="project-link primary" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;