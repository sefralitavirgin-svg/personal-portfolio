import experience from "../data/experience";
import useLanguage from "../hooks/useLanguage";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="bg-slate-50 py-16 sm:py-20 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl dark:text-white">
          {t?.experience?.title || "Experience"}
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {experience.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white p-6 shadow-md sm:p-8 dark:bg-slate-900">
              <h3 className="text-xl font-semibold sm:text-2xl dark:text-white">{item.role}</h3>
              <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">{item.company}</p>
              <p className="mt-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">{item.period}</p>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;