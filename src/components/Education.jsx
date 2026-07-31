import education from "../data/education";
import useLanguage from "../hooks/useLanguage";

function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="bg-white py-16 sm:py-20 md:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl dark:text-white">
          {t?.education?.title || "Education"}
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 p-6 shadow-md sm:p-8 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-semibold sm:text-2xl dark:text-white">{item.school}</h3>
              <p className="mt-2 text-blue-600 dark:text-blue-400">{item.degree}</p>
              <p className="mt-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">{item.period}</p>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;