import profile from "../assets/images/profile-porto.png";
import useLanguage from "../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 sm:pt-28 lg:pt-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div className="order-2 flex flex-col items-center text-center lg:order-none lg:items-start lg:text-left">
            <p className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              👋 {t.hero.greeting}
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Virgin
              <br />
              R. S. Kaporoh
            </h1>

            <h2 className="mt-5 text-2xl text-slate-600 sm:text-3xl dark:text-slate-300">
              {t.hero.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg dark:text-slate-400">
              {t.hero.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center text-white transition hover:bg-blue-700 sm:px-8 sm:py-4 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                {t.hero.projectButton}
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-blue-600 px-6 py-3 text-center text-blue-600 transition hover:bg-blue-50 sm:px-8 sm:py-4 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
              >
                {t.hero.contactButton}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="order-1 flex justify-center lg:order-none">
            <img
              src={profile}
              alt="Virgin R. S. Kaporoh"
              className="h-64 w-64 rounded-full border-8 border-white object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;