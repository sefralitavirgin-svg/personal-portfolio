import useLanguage from "../hooks/useLanguage";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-slate-200 bg-white p-1 shadow-sm">

      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-label="Bahasa Indonesia"
        aria-pressed={language === "id"}
        className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
          language === "id"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        🇮🇩
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        🇺🇸
      </button>

    </div>
  );
}

export default LanguageSwitcher;