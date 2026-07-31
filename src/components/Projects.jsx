import projects from "../data/projects";
import useLanguage from "../hooks/useLanguage";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-slate-50 py-16 sm:py-20 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 sm:text-base dark:text-blue-400">Portfolio</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl dark:text-white">{t?.projects?.title || "Featured Projects"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg dark:text-slate-400">
            {t?.projects?.subtitle || "Here are some projects I've built to improve my skills in web development and solve real-world problems."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:bg-slate-900"
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover sm:h-56" />

              <div className="p-6 sm:p-7">
                <h3 className="mb-3 text-xl font-bold text-slate-800 sm:text-2xl dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-slate-900 px-3 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700 sm:text-base"
                  >
                    {t?.projects?.github || "GitHub"}
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border-2 border-blue-600 px-3 py-3 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white sm:text-base"
                  >
                    {t?.projects?.demo || "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;