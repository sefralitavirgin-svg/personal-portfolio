import React from "react";

const projects = [
  {
    id: 1,
    title: "VIREA",
    category: "Personal Management Application",
    description:
      "A personal management application designed to help users organize daily activities, manage tasks, track schedules, and improve productivity through an intuitive digital workspace.",
    tech: ["React", "Laravel", "MySQL"],
    github: null,
    demo: "https://vireaa.vercel.app",
  },
  {
    id: 2,
    title: "ENGENEr",
    category: "Full-Stack Web Application",
    description:
      "A fan community web application inspired by ENHYPEN, featuring an interactive dashboard, discography, collection tracker, personal diary, countdowns, and an administrative content management system.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL"],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "THE SIN",
    category: "Web Application",
    description:
      "A fan-made album archive and management platform featuring album information, member profiles, era-based content, and database-driven content management.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A personal developer portfolio showcasing technical skills, professional experience, selected projects, and career interests through a responsive and modern interface.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github:
      "https://github.com/sefralitavirgin-svg/personal-portofolio",
    demo: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">● Portfolio</span>

          <h2 className="section-title">
            Selected Projects
          </h2>

          <p className="lead-copy">
            A collection of software development projects
            showcasing my experience in web technologies,
            application development, and practical digital solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-art" aria-hidden="true" />

              <div className="project-body">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

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
                        Live Demo
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