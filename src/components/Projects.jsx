import useLanguage from "../hooks/useLanguage";

const projectData = [
  {
    id: 1,
    title: "VIREA",
    category: "personalManagement",
    description: "virea",
    tech: ["React", "Laravel", "MySQL"],
    github: null,
    demo: "https://vireaa.vercel.app",
  },
  {
    id: 2,
    title: "ENGENEr",
    category: "fullStack",
    description: "engener",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL"],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "THE SIN",
    category: "web",
    description: "theSin",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Personal Portfolio",
    category: "frontend",
    description: "portfolio",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github:
      "https://github.com/sefralitavirgin-svg/personal-portofolio",
    demo: null,
  },
];

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">{t.projects.kicker}</span>

          <h2 className="section-title">{t.projects.title}</h2>

          <p className="lead-copy">{t.projects.description}</p>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-art" aria-hidden="true" />

              <div className="project-body">
                <span className="project-category">
                  {t.projects.categories[project.category]}
                </span>

                <h3>{project.title}</h3>

                <p>{t.projects.items[project.description]}</p>

                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        className="project-link primary"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        className="project-link"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.projects.demo}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;