import useLanguage from "../hooks/useLanguage";

function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t?.skills?.categories?.frontend || "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: t?.skills?.categories?.backend || "Backend",
      skills: ["PHP", "Laravel", "Node.js"],
    },
    {
      title: t?.skills?.categories?.database || "Database",
      skills: ["MySQL"],
    },
    {
      title: t?.skills?.categories?.tools || "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-16 sm:py-20 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">{t?.skills?.title || "Skills"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg dark:text-slate-400">
            {t?.skills?.subtitle || "Technologies I use to build applications."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {categories.map((category) => (
            <div key={category.title} className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl sm:p-8 dark:bg-slate-900">
              <h3 className="mb-6 text-xl font-semibold text-slate-800 sm:text-2xl dark:text-white">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 sm:text-base dark:bg-blue-950 dark:text-blue-300">
                    {skill}
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