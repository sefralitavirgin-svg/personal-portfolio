import profile from "../assets/images/profile-porto.png";
import useLanguage from "../hooks/useLanguage";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-16 sm:py-20 md:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl dark:text-white">
          {t.about.title}
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-25"></div>
              <img
                src={profile}
                alt="Virgin R. S. Kaporoh"
                className="relative h-64 w-64 rounded-3xl border-4 border-white object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </div>

          {/* About Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 sm:text-base dark:text-blue-400">
              {t.about.subtitle}
            </span>

            <h3 className="mt-3 mb-6 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Virgin R. S. Kaporoh
            </h3>

            <p className="mb-8 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {t.about.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                  📍 {t.about.location}
                </h4>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {t.about.locationValue}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                  🎓 {t.about.education}
                </h4>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {t.about.educationValue}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                  💻 {t.about.specialization}
                </h4>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {t.about.specializationValue}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                  🌐 {t.about.languages}
                </h4>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {t.about.languagesValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;