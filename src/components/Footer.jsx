import useLanguage from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-10 text-white dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Virgin.</h2>
          <p className="mt-2 text-slate-400">Software Developer Portfolio</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6 sm:text-base md:justify-end">
          <a href="https://www.linkedin.com/in/virgin-kaporoh-670215350" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
            GitHub
          </a>
          <a href="https://www.instagram.com/vrgnrsk" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
            Instagram
          </a>
          <a href="https://tiktok.com/@sefraly06" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
            TikTok
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        {t?.footer?.copyright || `© ${new Date().getFullYear()} Virgin R. S. Kaporoh. All Rights Reserved.`}
      </div>
    </footer>
  );
}

export default Footer;