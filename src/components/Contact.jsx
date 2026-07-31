import useLanguage from "../hooks/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-20 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl dark:text-white">
          {t?.contact?.title || "Contact Me"}
        </h2>
        <p className="mb-10 text-center text-sm text-gray-500 sm:mb-14 sm:text-base dark:text-slate-400">
          {t?.contact?.subtitle || "Feel free to connect with me through any of the platforms below."}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a href="https://www.linkedin.com/in/virgin-kaporoh-670215350" target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-900">
            <h3 className="mb-2 text-xl font-semibold dark:text-white">LinkedIn</h3>
            <p className="text-sm text-gray-500 sm:text-base dark:text-slate-400">Connect with me professionally.</p>
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-900">
            <h3 className="mb-2 text-xl font-semibold dark:text-white">GitHub</h3>
            <p className="text-sm text-gray-500 sm:text-base dark:text-slate-400">Explore my projects and source code.</p>
          </a>

          <a href="https://www.instagram.com/vrgnrsk" target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-900">
            <h3 className="mb-2 text-xl font-semibold dark:text-white">Instagram</h3>
            <p className="text-sm text-gray-500 sm:text-base dark:text-slate-400">Follow my journey and updates.</p>
          </a>

          <a href="https://www.facebook.com/vrginrsk" target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-900">
            <h3 className="mb-2 text-xl font-semibold dark:text-white">Facebook</h3>
            <p className="text-sm text-gray-500 sm:text-base dark:text-slate-400">Stay connected with me.</p>
          </a>

          <a href="https://tiktok.com/@sefraly06" target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl sm:col-span-2 dark:bg-slate-900">
            <h3 className="mb-2 text-xl font-semibold dark:text-white">TikTok</h3>
            <p className="text-sm text-gray-500 sm:text-base dark:text-slate-400">Watch my short videos and creative content.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;