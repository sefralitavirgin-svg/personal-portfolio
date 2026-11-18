import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";
import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? language === "id" ? "Aktifkan tema gelap" : "Enable dark theme"
          : language === "id" ? "Aktifkan tema terang" : "Enable light theme"
      }
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        border
        border-pink-200
        bg-pink-50
        shadow-sm
        transition
        hover:bg-pink-100
      "
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-pink-600" />
      ) : (
        <SunIcon className="h-5 w-5 text-pink-500" />
      )}
    </button>
  );
}

export default ThemeToggle;