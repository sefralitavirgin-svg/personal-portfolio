import SkillJar from "../components/skills/SkillJar";
import useLanguage from "../hooks/useLanguage";

function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      name: "HTML",
      percent: 95,
      color: "bg-green-500",
    },
    {
      name: "CSS",
      percent: 90,
      color: "bg-emerald-500",
    },
    {
      name: "JavaScript",
      percent: 88,
      color: "bg-lime-500",
    },
    {
      name: "React",
      percent: 90,
      color: "bg-green-600",
    },
    {
      name: "PHP",
      percent: 85,
      color: "bg-emerald-600",
    },
    {
      name: "Laravel",
      percent: 80,
      color: "bg-green-700",
    },
    {
      name: "MySQL",
      percent: 82,
      color: "bg-teal-600",
    },
    {
      name: "Git",
      percent: 80,
      color: "bg-green-500",
    },
    {
      name: "GitHub",
      percent: 85,
      color: "bg-emerald-500",
    },
    {
      name: "VS Code",
      percent: 95,
      color: "bg-lime-600",
    },
    {
      name: "Figma",
      percent: 75,
      color: "bg-green-500",
    },
    {
      name: "Postman",
      percent: 80,
      color: "bg-emerald-600",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-green-600 font-semibold uppercase tracking-[4px]">
            🌿 My Garden
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {t.skills.title}
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8">
            {t.skills.subtitle}
          </p>

        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill) => (
            <SkillJar
              key={skill.name}
              name={skill.name}
              percent={skill.percent}
              color={skill.color}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;